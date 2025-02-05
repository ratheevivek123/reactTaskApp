import React from "react";
import Nav from "./Navbar.jsx/Nav";
import Taskedit from "./Navbar.jsx/Taskmanager.jsx/Taskedit";
import Alltasks from "./Navbar.jsx/Taskmanager.jsx/Alltasks";

const Admindashboard = () => {
  return (
    <div className="h-screen w-full p-10">
      <Taskedit />
      <Alltasks />
    </div>
  );
};

export default Admindashboard;
