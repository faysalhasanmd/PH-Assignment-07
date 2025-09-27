import React from "react";
import "./card.css";

const Box = ({ resolved, selectedPerson }) => {
  // console.log(resolved);
  return (
    <div className="max-w-[1200px] px-4  mx-auto mt-6 bg-[#f5f5f5]">
      <div className="flex flex-wrap box gap-7">
        <div className="h-[200px] flex one bg-img flex-col text-center justify-center rounded-2xl w-[590px] text-white">
          <h1 className="text-3xl font-bold">In Progress</h1>
          <span className="text-3xl font-bold">{selectedPerson.length}</span>
        </div>
        <div className="h-[200px] one flex bg-img1 flex-col text-center justify-center rounded-2xl w-[590px] text-white">
          <h1 className="text-3xl font-bold">Resolved</h1>
          <span className="text-3xl font-bold">{resolved.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Box;
// scale-x-[-1]
