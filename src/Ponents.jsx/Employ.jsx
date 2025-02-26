import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../Utils.jsx/utils";
import { useNavigate } from "react-router-dom";
import Nav from "./Navbar.jsx/Nav";

// const Employ = () => {
//   const [tasks, setTasks] = useState([]);
//   const [user, setUser] = useState({ username: "", email: "" });
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchUserData();
//     fetchTasks();
//   }, []);

//   const fetchUserData = async () => {
//     try {
//       const response = await axios.get(`${baseURL}/api/users/verify-token`, {
//         withCredentials: true,
//       });
//       setUser(response.data.userInfo);
//     } catch (error) {
//       if (error.response?.status === 401) navigate("/login");
//     }
//   };

//   const fetchTasks = async () => {
//     try {
//       const response = await axios.get(`${baseURL}/api/tasks/Usertsk`, {
//         withCredentials: true,
//       });
//       setTasks(response.data.tasks);
//     } catch (error) {
//       console.error("Error fetching tasks:", error);
//     }
//   };

//   const updateTaskStatus = async (taskId, status) => {
//     try {
//       await axios.patch(
//         `${baseURL}/api/tasks/${taskId}/review`,
//         { status },
//         { withCredentials: true }
//       );
//       fetchTasks();
//     } catch (error) {
//       console.error(
//         "Error updating task status:",
//         error.response?.data || error
//       );
//     }
//   };

//   const taskStats = {
//     new: tasks.filter((task) => task.status === "New").length,
//     accepted: tasks.filter((task) => task.status === "Accepted").length,
//     completed: tasks.filter((task) => task.status === "Completed").length,
//     failed: tasks.filter((task) => task.status === "Failed").length,
//   };

//   return (
//     <div className="bg-gray-900 min-h-screen text-white p-6">
//       <Nav name={user.username.toUpperCase()} />
//       <p className="text-gray-400 text-lg mt-4">Email: {user.email}</p>

//       <div className="grid grid-cols-4 gap-4 mt-5 text-center">
//         <div className="bg-blue-500 p-4 font-bold  rounded-lg">
//           <h2 className="text-2xl font-bold">{tasks.length}</h2>
//           <p>All Tasks</p>
//         </div>
//         <div className="bg-green-500 p-4 font-bold  rounded-lg">
//           <h2 className="text-2xl font-bold">{taskStats.completed}</h2>
//           <p>Completed</p>
//         </div>
//         <div className="bg-yellow-500 font-bold  p-4 rounded-lg">
//           <h2 className="text-2xl font-bold">{taskStats.accepted}</h2>
//           <p>Accepted</p>
//         </div>
//         <div className="bg-red-600 p-4 font-bold  rounded-lg">
//           <h2 className="text-2xl font-bold">{taskStats.failed}</h2>
//           <p>Failed</p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//         {tasks.map((task) => (
//           <div key={task._id} className="p-5 rounded-lg bg-gray-800 shadow-lg">
//             <h3 className="text-2xl font-bold text-center uppercase">
//               {task.title}
//             </h3>
//             <p className="mt-2 text-sm font-semibold">
//               Last Date: {new Date(task.date).toDateString()}
//             </p>
//             <p className="text-gray-300 mt-2">
//               Description: {task.description}
//             </p>

//             <div className="mt-4 flex justify-center space-x-2">
//               <button
//                 onClick={() => updateTaskStatus(task._id, "Accepted")}
//                 className="px-3 py-1 bg-yellow-500 rounded-lg hover:bg-yellow-600 transition duration-300"
//               >
//                 Accept
//               </button>
//               <button
//                 onClick={() => updateTaskStatus(task._id, "Completed")}
//                 className="px-3 py-1 bg-green-500 rounded-lg hover:bg-green-600 transition duration-300"
//               >
//                 Mark as Completed
//               </button>
//               <button
//                 onClick={() => updateTaskStatus(task._id, "Failed")}
//                 className="px-3 py-1 bg-red-600 rounded-lg hover:bg-red-700 transition duration-300"
//               >
//                 Mark as Failed
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Employ;

const Employ = () => {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState({ username: "", email: "" });
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
    fetchTasks();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/users/verify-token`, {
        withCredentials: true,
      });
      setUser(response.data.userInfo);
    } catch (error) {
      if (error.response?.status === 401) navigate("/login");
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/tasks/Usertsk`, {
        withCredentials: true,
      });
      setTasks(response.data.tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const updateTaskStatus = async (taskId, status) => {
    try {
      await axios.patch(
        `  ${baseURL}/api/tasks/${taskId}/review`,
        { status },
        { withCredentials: true }
      );
      fetchTasks();
    } catch (error) {
      console.error(
        "Error updating task status:",
        error.response?.data || error
      );
    }
  };

  const taskStats = {
    new: tasks.filter((task) => task.status === "New").length,
    accepted: tasks.filter((task) => task.status === "Accepted").length,
    completed: tasks.filter((task) => task.status === "Completed").length,
    failed: tasks.filter((task) => task.status === "Failed").length,
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <Nav name={user.username.toUpperCase()} />
      <p className="text-gray-400 text-lg mt-4">Email: {user.email}</p>

      <div className="grid grid-cols-4 gap-4 mt-5 text-center">
        <div className="bg-blue-500 p-4 font-bold rounded-lg">
          <h2 className="text-2xl font-bold">{taskStats.new}</h2>
          <p>All Tasks</p>
        </div>
        <div className="bg-green-500 p-4 font-bold rounded-lg">
          <h2 className="text-2xl font-bold">{taskStats.completed}</h2>
          <p>Completed</p>
        </div>
        <div className="bg-yellow-500 font-bold p-4 rounded-lg">
          <h2 className="text-2xl font-bold">{taskStats.accepted}</h2>
          <p>Accepted</p>
        </div>
        <div className="bg-red-600 p-4 font-bold rounded-lg">
          <h2 className="text-2xl font-bold">{taskStats.failed}</h2>
          <p>Failed</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {tasks.map((task) => {
          let borderColor = "border-gray-700"; // Default border

          if (task.status === "Reassigned") borderColor = "border-blue-500"; // Highlight reassigned tasks
          if (task.status === "Failed") borderColor = "border-red-500"; // Highlight failed tasks
          if (task.status === "Completed") borderColor = "border-green-500"; // Highlight completed tasks

          return (
            <div
              key={task._id}
              className={`p-5 rounded-lg bg-gray-800 shadow-lg border-2 ${borderColor}`}
            >
              <h3 className="text-2xl font-bold text-center uppercase">
                {task.title}
              </h3>
              <p className="mt-2 text-sm font-semibold">
                Last Date: {new Date(task.date).toDateString()}
              </p>
              <p className="text-gray-300 mt-2">
                Description: {task.description}
              </p>

              <div className="mt-4 flex justify-center space-x-2">
                {(task.status === "New" || task.status === "Reassigned") && (
                  <button
                    onClick={() => updateTaskStatus(task._id, "Accepted")}
                    className="px-3 py-1 bg-yellow-500 rounded-lg hover:bg-yellow-600 transition duration-300"
                  >
                    Accept
                  </button>
                )}
                {(task.status === "Accepted" ||
                  task.status === "Reassigned") && (
                  <>
                    <button
                      onClick={() => updateTaskStatus(task._id, "Completed")}
                      className="px-3 py-1 bg-green-500 rounded-lg hover:bg-green-600 transition duration-300"
                    >
                      Mark as Completed
                    </button>
                    <button
                      onClick={() => updateTaskStatus(task._id, "Failed")}
                      className="px-3 py-1 bg-red-600 rounded-lg hover:bg-red-700 transition duration-300"
                    >
                      Mark as Failed
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Employ;
