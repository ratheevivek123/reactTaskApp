import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../../Utils.jsx/utils";

const Taskedit = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    assignedTo: "",
    category: "",
    description: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${baseURL}/api/tasks/assign`,
        formData,
        {
          withCredentials: true,
        }
      );

      setFormData({
        title: "",
        date: "",
        assignedTo: "",
        category: "",
        description: "",
        status: "",
      });
      alert("Task created successfully!");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div className="p-5 bg-[#1C1C1C] rounded mt-8 shadow-[0px_0px_15px_3px_rgba(255,255,255,0.3)]">
      <form
        className="flex flex-wrap w-full items-start justify-between p-10 mt-14"
        onSubmit={handleSubmit}
      >
        <div className="w-1/2">
          <h3 className="text-sm text-gray-400 m-0.5">TITLE</h3>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="text-sm py-2 px-3 w-4/5 round bg-transparent border-[2px] border-gray-300 mb-4 hover:border-[3px]"
            required
          />
          <h3 className="text-sm text-gray-400 mb-0.5">Date</h3>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="text-sm py-2 px-3 w-4/5 round bg-transparent border-[2px] border-gray-300 mb-4 hover:border-[3px]"
            required
          />
          <h3 className="text-sm text-gray-400 mb-0.5">Assign to</h3>
          <input
            type="text"
            name="assignedTo"
            value={formData.assignedTo}
            onChange={handleChange}
            placeholder="Employee Email"
            className="text-sm py-2 px-3 w-4/5 round bg-transparent border-[2px] border-gray-300 mb-4 hover:border-[3px]"
            required
          />
          <h3 className="text-sm text-gray-400 mb-0.5">Category</h3>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="UI, code, etc."
            className="text-sm py-2 px-3 w-4/5 round bg-transparent border-[2px] border-gray-300 mb-4 hover:border-[3px]"
            required
          />
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-[20px] text-gray-400 mb-0.5">Description</h3>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            cols="30"
            rows="4"
            className="w-full text-xl bg-transparent px-4 py-2 rounded border-gray-400 border-[3px]"
            required
          ></textarea>
          <h3 className="text-sm text-gray-400 mb-0.5">Status</h3>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="text-sm text-gray-400 py-2 px-3 w-4/5 round bg-transparent border-[2px] border-gray-300 mb-4 hover:border-[3px]"
            required
          >
            <option value="New">New</option>
          </select>
          <button
            type="submit"
            className="bg-emerald-400 text-sm rounded-xl mt-3 w-full py-2 hover:bg-emerald-600 border-gray-400 border-[1px] hover:border-[2px]"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Taskedit;
