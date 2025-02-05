import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./Ponents.jsx/Aouther.jsx/Login";
import Nav from "./Ponents.jsx/Navbar.jsx/Nav";
import Employdashboard from "./Ponents.jsx/Employdashboard";
import Admindashboard from "./Ponents.jsx/Admindashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<Employdashboard />} />
          <Route path="/admin" element={<Admindashboard />} />
        </Route>

        <Route path="/login" element={<Login />} />
        {/* <Route path="/user" element={<Employdashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
