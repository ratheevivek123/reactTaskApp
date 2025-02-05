import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "employee",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        // "http://your-backend-url/register",
        formData
      );
      if (response.status === 200) {
        setSuccess("Registration successful! Redirecting...");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } catch (error) {
      setError("There was an error registering. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-red-500 p-10 rounded-xl flex flex-col items-center bg-white shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-red-600">Register</h2>

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center w-80"
        >
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="border-red-600 border-2 outline-none rounded-full px-5 py-3 text-lg bg-transparent w-full"
            placeholder="Enter your username"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-red-600 border-2 outline-none rounded-full px-5 py-3 text-lg bg-transparent w-full mt-4"
            placeholder="Enter your email"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="border-red-600 border-2 outline-none rounded-full px-5 py-3 text-lg bg-transparent w-full mt-4"
            placeholder="Enter your password"
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="border-red-600 border-2 outline-none rounded-full px-5 py-3 text-lg bg-transparent w-full mt-4"
          >
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-500 font-bold rounded-full px-4 py-3 text-lg mt-7 w-full"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
