import React, { useState } from "react";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./taskStatus.css";

const TaskStatus = ({
  person,
  setSelectedPerson,
  setData,
  resolved,
  setResolved,
}) => {
  const [click, setClick] = useState([]);

  const removeCard = (card) => {
    if (!click.includes(card.id)) {
      setClick((info) => [...info, card.id]);
    }
    setSelectedPerson((info) => info.filter((x) => x.id !== card.id));
    setData((info) => info.filter((x) => x.id !== card.id));
    setResolved((info) => [...info, card]);

    toast.success("Task Resolved!");
  };

  return (
    <div className="w-[300px]">
      <div className="bg-white p-2.5 margin rounded-[10px] shadow">
        <h1 className="font-bold mb-2">Task Status</h1>
        <div className="px-2.5 p-2 rounded-[8px] centerItem m-2">
          {person.length === 0 && (
            <h1 className="text-gray-400 text-center bg-[#f5f5f5] p-6 rounded-[7px] text-sm">
              No Task In Progress <br />
              <span className="text-[12px]">
                Click on a Ticket to start working
              </span>
            </h1>
          )}
          {person.map((task) => (
            <div
              key={task.id}
              className="bg-[#f5f5f5] p-2 mt-3 rounded-[7px] shadow"
            >
              <p className="font-semibold text-sm">{task.title}</p>
              <button
                onClick={() => removeCard(task)}
                className="w-[90%] cursor-pointer text-sm bg-green-500 mx-auto text-white font-semibold rounded-[10px] mt-1.5 p-1 flex justify-center items-center"
              >
                {click.includes(task.id) ? (
                  <span className="flex gap-1 items-center">
                    <FontAwesomeIcon icon={faCheck} /> Selected
                  </span>
                ) : (
                  "Complete"
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white p-2.5 margin rounded-[10px] mt-3 shadow">
        <h1 className="font-bold mb-2">Resolved</h1>
        <div className="px-2.5 p-2 rounded-[8px] m-2">
          {resolved.length === 0 && (
            <h1 className="text-gray-400 text-center bg-[#f5f5f5] p-6 rounded-[7px] text-sm">
              No Resolved Task
            </h1>
          )}
          {resolved.map((task) => (
            <div
              key={task.id}
              className="bg-[#f5f5f5] p-2 mt-3 rounded-[7px] shadow"
            >
              <p className="font-semibold text-sm">{task.title}</p>
              <span className="flex items-center gap-1 text-green-600 font-semibold mt-1">
                <FontAwesomeIcon icon={faCheck} /> Completed
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;
