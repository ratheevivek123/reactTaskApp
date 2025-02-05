import React from "react";

const Tasks = () => {
  return (
    <div className="flex screen justify-between gap-5 mt-10">
      <div className="w-[45%] bg-red-600 p-10 rounded-xl">
        <h1 className="text-xl font-bold">0</h1>

        <h3 className="text-2xl font-semibold">New Tasks</h3>
      </div>
      <div className="w-[45%] bg-yellow-600 p-10 rounded-xl">
        <h1 className="text-xl font-bold">3</h1>

        <h3 className="text-2xl font-semibold">Completed</h3>
      </div>
      <div className="w-[45%] bg-green-600 p-10 rounded-xl">
        <h1 className="text-xl font-bold">0</h1>

        <h3 className="text-2xl font-semibold">Accepted</h3>
      </div>
      <div className="w-[45%] bg-blue-600 p-10 rounded-xl">
        <h1 className="text-xl font-bold">1</h1>

        <h3 className="text-2xl font-semibold">Faild</h3>
      </div>
    </div>
  );
};

export default Tasks;
