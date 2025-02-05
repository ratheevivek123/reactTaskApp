import React from "react";

const Taskedit = () => {
  return (
    <div className="p-5 bg-[#1C1C1C] rounded mt-8">
      <form className="flex flex-wrap w-full items-start justify-between p-10 mt-14">
        <div className="w-1/2">
          <h3 className="text-sm text-gray-400 mb-0.5">TITLE</h3>
          <input
            type="text"
            className="text-sm py-2 px-3 w-4/5 round bg-transparent border-[2px] border-gray-300 mb-4 hover:border-[3px]"
          />
          <h3 className="text-sm text-gray-400 mb-0.5">Date</h3>
          <input
            type="date"
            className="text-sm py-2 px-3 w-4/5 round bg-transparent border-[2px] border-gray-300 mb-4 hover:border-[3px]"
          />
          <h3 className="text-sm text-gray-400 mb-0.5">Assign to</h3>
          <input
            type="text"
            placeholder="employ Name"
            className="text-sm py-2 px-3 w-4/5 round bg-transparent border-[2px] border-gray-300 mb-4 hover:border-[3px]"
          />
          <h3 className="text-sm text-gray-400 mb-0.5">Category</h3>
          <input
            type="text"
            placeholder="design , div , etc.."
            className="text-sm py-2 px-3 w-4/5 round bg-transparent border-[2px] border-gray-300 mb-4 hover:border-[3px]"
          />
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-[20px] text-gray-400 mb-0.5">Description</h3>
          <textarea
            name=""
            id=""
            cols="30"
            rows="20"
            className="w-full h-44 text-xl bg-transparent px-4 py-2 rounded border-gray-400 border-[3px] "
          ></textarea>
          <button className=" bg-emerald-400 text-sm rounded-xl mt-3 w-full py-2 hover:bg-emerald-600 border-gray-400 border-[1px] hover:border-[2px]">
            Create it
          </button>
        </div>
      </form>
    </div>
  );
};

export default Taskedit;
