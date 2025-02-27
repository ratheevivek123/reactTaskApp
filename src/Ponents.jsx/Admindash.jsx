import React, { useState, useEffect } from "react";
import axios from "axios";

import { baseURL } from "../Utils.jsx/utils";
import Taskedit from "./Navbar.jsx/Taskmanager.jsx/Taskedit";
import AdminNav from "./Navbar.jsx/AdminNav";

const Admindash = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/users/allusers`, {
        withCredentials: true,
      });
      setUsers(response.data.users || []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Fetch tasks for a selected user
  const fetchUserTasks = async (userId) => {
    const user = users.find((user) => user._id === userId);
    if (!user) return;

    // If user is an admin, show message and don't fetch tasks
    if (user.role === "admin") {
      setSelectedUser(user);
      setTasks([]); // No tasks for admins
      return;
    }

    try {
      const response = await axios.get(`${baseURL}/api/tasks/user/${userId}`, {
        withCredentials: true,
      });
      setTasks(response.data.tasks || []);
      setSelectedUser(user);
    } catch (error) {
      console.error("Error fetching user tasks:", error);
    }
  };

  // Reassign a failed task
  const reassignTask = async (taskId) => {
    try {
      await axios.patch(
        `${baseURL}/api/tasks/${taskId}/reassign`,
        {},
        { withCredentials: true }
      );
      fetchUserTasks(selectedUser._id); // Refresh task list after reassignment
    } catch (error) {
      console.error("Error reassigning task:", error);
    }
  };

  // Delete a task
  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`${baseURL}/api/tasks/${taskId}`, {
        withCredentials: true,
      });
      fetchUserTasks(selectedUser._id); // Refresh task list after deletion
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="bg-gray-900 p-6 text-white min-h-screen">
      <h1 className="text-3xl text-center font-bold mb-6">
        <AdminNav />
      </h1>
      <Taskedit />

      {/* User List */}
      <div className="bg-gray-800 p-5 mt-8 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Users</h2>
        {users.length === 0 ? (
          <p className="text-gray-400">No users found</p>
        ) : (
          users.map((user) => (
            <div
              key={user._id}
              className="flex items-center justify-between bg-gray-700 p-3 rounded-lg mb-2 cursor-pointer hover:bg-gray-600"
              onClick={() => fetchUserTasks(user._id)}
            >
              <h3 className="font-semibold">{user.username}</h3>
              <p>{user.email}</p>
              <span
                className={`px-3 py-1 text-xs rounded-lg ${
                  user.role === "admin" ? "bg-red-500" : "bg-blue-500"
                }`}
              >
                {user.role}
              </span>
            </div>
          ))
        )}
      </div>

      {/* Task List for Selected User */}
      {selectedUser && (
        <div className="bg-gray-800 p-5 mt-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">
            {selectedUser.role === "admin"
              ? `Sorry, he is an admin.`
              : `Tasks for ${selectedUser.name}`}
          </h2>

          {/* Show tasks only if user is NOT an admin */}
          {selectedUser.role !== "admin" && (
            <>
              {tasks.length === 0 ? (
                <p className="text-gray-400">No tasks assigned</p>
              ) : (
                tasks.map((task) => (
                  <div
                    key={task._id}
                    className="bg-gray-700 p-4 rounded-lg mb-3 flex justify-between items-center"
                  >
                    <div>
                      <h3 className="text-lg font-bold">{task.title}</h3>
                      <p className="text-sm text-gray-300">
                        <strong>Date:</strong>{" "}
                        {new Date(task.date).toDateString()}
                      </p>
                      <p className="text-sm text-gray-300">
                        <strong>Description:</strong> {task.description}
                      </p>
                      <p className="text-sm text-gray-300">
                        <strong>Status:</strong> {task.status}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {task.status === "Failed" && (
                        <button
                          onClick={() => reassignTask(task._id)}
                          className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                          Reassign Task
                        </button>
                      )}
                      <button
                        onClick={() => deleteTask(task._id)}
                        className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition duration-300"
                      >
                        Delete Task
                      </button>
                    </div>
                  </div>
                ))
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Admindash;
