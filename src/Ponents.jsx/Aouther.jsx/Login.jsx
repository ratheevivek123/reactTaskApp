import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:7000/api/users/login",
        { email, password },
        { withCredentials: true }
      );
      if (res.data.success) {
        setTimeout(() => {
          setLoading(false);
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-900 text-white">
      <div className="border-2 border-red-500 p-10 rounded-xl flex flex-col items-center">
        {loading ? (
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-t-transparent border-red-600 rounded-full animate-spin"></div>
            <p className="mt-4 text-lg font-semibold">Logging in...</p>
          </div>
        ) : (
          <form onSubmit={submitHandler} className="flex flex-col items-center">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-red-600 border-2 outline-none rounded-full px-5 py-3 text-xl bg-transparent"
              type="email"
              placeholder="Enter your email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border-red-600 border-2 rounded-full px-5 py-3 text-xl mt-4 bg-transparent"
              type="password"
              placeholder="Enter password"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-500 font-bold rounded-full px-6 py-3 text-xl mt-7 w-full transition duration-300"
            >
              Login
            </button>
            <Link to="/register" className="mt-5 text-red-600 hover:underline">
              Don't have an account? Register here
            </Link>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
