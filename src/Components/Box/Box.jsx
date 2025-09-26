import React from "react";
import bgImg from "../../assets/vector1.png";
import "./card.css";

const Box = ({ data }) => {
  // console.log(data);
  return (
    <div className="">
      <div className="w-[1200px] mx-auto mt-6 bg-[#f5f5f5]">
        <div className="flex gap-7">
          <div className="h-[200px] bg-img flex flex-col text-center justify-center rounded-2xl w-[590px] text-white">
            <h1 className="text-3xl font-bold">In Progress</h1>
            <span className="text-3xl font-bold">0</span>
          </div>

          <div className="h-[200px] flex bg-img1 flex-col text-center justify-center rounded-2xl w-[590px] text-white">
            <h1 className="text-3xl font-bold">Resolved</h1>
            <span className="text-3xl font-bold">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
