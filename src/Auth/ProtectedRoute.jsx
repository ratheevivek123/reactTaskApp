import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { verifyToken } from "./Auth";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { valid, userInfo } = await verifyToken();
      setIsAuthenticated(valid);
    };
    checkAuth();
  }, []);

  // Show a loading state while verifying the token
  if (isAuthenticated === null) {
    return <p>Loading...</p>;
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (userInfo.role === null || userInfo.role !== "user") {
    return <Navigate to="/unauthorized" replace />;
  }
  // Render the children if authenticated
  return children;
};

export default ProtectedRoute;
