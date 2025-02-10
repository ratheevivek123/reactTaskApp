import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { verifyToken } from "./Auth";

const AdminProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [user, setUser] = useState({});

  useEffect(() => {
    const checkAuth = async () => {
      const { valid, userInfo } = await verifyToken();
      setIsAuthenticated(valid);
      setUser(userInfo);
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

  // Redirect to unauthorized if the user is not an admin
  if (user.role === null || user.role !== "admin") {
    return <Navigate to="/unauthorized" replace />;
  }

  // Render the children if authenticated and user is an admin
  return children;
};

export default AdminProtectedRoute;
