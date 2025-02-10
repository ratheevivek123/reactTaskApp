import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./Ponents.jsx/Aouther.jsx/Login";
import Nav from "./Ponents.jsx/Navbar.jsx/Nav";
import Employdashboard from "./Ponents.jsx/Employdashboard";
import Admindashboard from "./Ponents.jsx/Admindashboard";
import Register from "./Ponents.jsx/Aouther.jsx/Register";
import ProtectedRoute from "./Auth/ProtectedRoute";
import PublicRoute from "./Auth/PublicRoute";
import Unauthorized from "./Auth/Unauthorized";
import AdminProtectedRoute from "./Auth/AdminProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Nav />
            </ProtectedRoute>
          }
        >
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Employdashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <AdminProtectedRoute>
                <Admindashboard />
              </AdminProtectedRoute>
            }
          />
        </Route>

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        <Route
          path="/unauthorized"
          element={
            <ProtectedRoute>
              <Unauthorized />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/user" element={<Employdashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
