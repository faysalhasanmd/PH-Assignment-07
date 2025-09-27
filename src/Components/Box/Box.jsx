import React from "react";

const Box = ({ resolved, selectedPerson }) => {
  return (
    <div className="max-w-[1200px] px-4 mx-auto mt-6 bg-[#f5f5f5]">
      <div className="flex flex-col sm:flex-row gap-7">
        <div className="bg-gradient-to-r from-purple-700 to-purple-500 rounded-[10px] flex-1">
          <div className="h-[200px] sm:w-[590px] bg-[url('/vector1.png'),url('/vector2.png')] bg-no-repeat bg-[position:left_center,right_center] flex flex-col text-center justify-center rounded-2xl text-white">
            <h1 className="text-2xl sm:text-3xl font-bold">In Progress</h1>
            <span className="text-2xl sm:text-3xl font-bold">
              {selectedPerson.length}
            </span>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-[10px] flex-1">
          <div className="h-[200px] sm:w-[590px] bg-[url('/vector1.png'),url('/vector2.png')] bg-no-repeat bg-[position:left_center,right_center] flex flex-col text-center justify-center rounded-2xl text-white">
            <h1 className="text-2xl sm:text-3xl font-bold">Resolved</h1>
            <span className="text-2xl sm:text-3xl font-bold">
              {resolved.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
