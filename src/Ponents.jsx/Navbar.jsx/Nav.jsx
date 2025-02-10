import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Outlet } from "react-router-dom";
import { baseURL } from "../../Utils.jsx/utils";

const Nav = () => {
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    try {
      const res = await axios.get(`${baseURL}/api/users/logout`, {
        withCredentials: true,
      });

      if (res.data.success) {
        alert(res.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between px-4">
        <h1 className="text-xl">
          HELLO <br />
          <span className="text-2xl font-semibold ">EMPLOY</span>
        </h1>
        <button
          className="text-lg font-medium bg-red-700 px-4 py-2 rounded-xl"
          onClick={handleLogoutClick}
        >
          Log Out
        </button>
      </div>
      <Outlet />
    </>
  );
};

export default Nav;
