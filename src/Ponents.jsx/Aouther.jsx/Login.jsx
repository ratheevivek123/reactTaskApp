import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const submitholder = async (e) => {
    e.preventDefault();
    // handler(email, password);
    // console.log("hello guys email is", email);
    // console.log("hello guys password is", password);
    // setemail("");
    // setpassword("");
    try {
      const res = await axios.post(
        "http://localhost:7000/api/users/login",
        { email, password },
        { withCredentials: true }
      );
      if (res.data.success) {
        alert(res.data.message);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-red-500 p-20 rounded-xl  flex">
        <form
          onSubmit={(e) => {
            submitholder(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
            className="border-red-600 border-2 outline-none rounded-full px-5 py-3 text-xl bg-transparent"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
            className="border-red-600 border-2 rounded-full px-5 py-3 text-xl mt-4 bg-transparent"
            type="password"
            placeholder="Enter password"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-500 font-bold rounded-full px-4 py-3 text-xl mt-7 w-full"
          >
            login
          </button>

          <Link to="/register" className="mt-7 text-red-600 hover:underline">
            Don't have an account? Register here
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
