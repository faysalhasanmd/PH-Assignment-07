import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar";
import yellow from "../../assets/heee.png";
import blue from "../../assets/bluedot.png";
import green from "../../assets/greendot.png";
import purple from "../../assets/pupledot.png";
import TaskStatus from "../TaskStatus/TaskStatus";
import toast from "react-hot-toast";
import "./card.css";

const SIngleCard = ({ person, data, setData, setSelectedPerson }) => {
  const handleCard = (value) => {
    setSelectedPerson((val) => {
      if (val.some((p) => p.id === value.id)) {
        toast.error("Same Issue Not Added..!!");
        return val;
      }
      toast.success("Task Status Completed.!!");
      return [...val, value];
    });
    setData((val) => {
      if (val.some((p) => p.id === value.id)) {
        return val;
      }
      return [...data, value];
    });
  };
  // console.log(person);
  return (
    <div onClick={() => handleCard(person)}>
      <div className=" flex flex-col nav justify-between gap-1 rounded-xl min-h-[80px] w-[430px]">
        <div className="p-3.5 rounded-[7px] bg-white ">
          <div className="flex justify-between items-start mt-2">
            <h1 className="font-semibold ">{person.title}</h1>
            <div
              className={`${
                person.status === "In Progress"
                  ? "bg-yellow-200 text-gray-800 font-semibold px-2.5 py-1 rounded-2xl flex items-center gap-1 text-[14px]"
                  : person.status === "Closed"
                  ? "bg-blue-200 text-gray-800 font-semibold px-2.5 py-1 rounded-2xl flex items-center gap-1 text-[14px]"
                  : person.status === "Resolved"
                  ? "bg-purple-200 text-gray-800 font-semibold px-2.5 py-1 rounded-2xl flex items-center gap-1 text-[14px]"
                  : person.status === "Open"
                  ? "bg-green-200 text-gray-800 font-semibold px-2.5 py-1 rounded-2xl flex items-center gap-1 text-[14px]"
                  : ""
              }`}
            >
              <img
                className="w-[12px] h-[12px]"
                src={
                  person.status === "In Progress"
                    ? yellow
                    : person.status === "Closed"
                    ? blue
                    : person.status === "Resolved"
                    ? purple
                    : green
                }
                alt=""
              />

              <span>{person.status}</span>
            </div>
          </div>
          <p className="text-gray-600 text-[13px]">{person.description}</p>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <p className="text-gray-600 text-[13px]">#{person.id}</p>
              <span
                className={`${
                  person.priority === "High"
                    ? "text-red-500 text-[13px]"
                    : person.priority === "Medium"
                    ? "text-yellow-500 text-[13px]"
                    : person.priority === "Critical"
                    ? "text-orange-700 text-[13px]"
                    : "text-green-500 text-[13px]"
                }`}
              >
                {person.priority}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-gray-600  text-[13px]">{person.customer}</h1>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCalendar} />
                <p className="text-gray-600 text-[13px]">{person.createdAt}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIngleCard;
