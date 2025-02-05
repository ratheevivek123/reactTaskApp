import React from "react";
import Nav from "./Navbar.jsx/Nav";
import Tasks from "./Navbar.jsx/Taskmanager.jsx/Tasks";
import Tasklist from "./Taskmanager.jsx/Tasklist";

const Employdashboard = () => {
  return (
    <div>
      <div className=" p-10 bg-[#1C1C1C] h-screen">
        <Tasks />
        <Tasklist />
      </div>
    </div>
  );
};

export default Employdashboard;
