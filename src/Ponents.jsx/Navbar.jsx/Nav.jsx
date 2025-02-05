import React from "react";
import { Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="flex items-center justify-between px-4">
        <h1 className="text-xl">
          HELLO <br />
          <span className="text-2xl font-semibold ">EMPLOY</span>
        </h1>
        <button className="text-lg font-medium bg-red-700 px-4 py-2 rounded-xl">
          Log Out
        </button>
      </div>
      <Outlet />
    </>
  );
};

export default Nav;
