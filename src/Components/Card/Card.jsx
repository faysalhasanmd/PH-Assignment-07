import React, { use, useState } from "react";
import SIngleCard from "./SIngleCard";
import TaskStatus from "../TaskStatus/TaskStatus";
import "./card.css";

const Card = ({
  fetchPromise,
  resolved,
  setResolved,
  setSelectedPerson,
  selectedPerson,
}) => {
  const recivedJson = use(fetchPromise);
  const [data, setData] = useState(recivedJson);
  console.log(selectedPerson);
  // ---------------//
  return (
    <div className="w-[1200px] mx-auto mt-9">
      <h1 className="font-bold text-3xl mb-3">Customer Ticket</h1>
      <div className="flex reverse  gap-4">
        <div className="grid nav center grid-cols-2 gap-4">
          {data.map((person) => (
            <SIngleCard
              key={person.id}
              data={data}
              setData={setData}
              person={person}
              selectedPerson={selectedPerson}
              setSelectedPerson={setSelectedPerson}
            ></SIngleCard>
          ))}
        </div>
        <TaskStatus
          resolved={resolved}
          setResolved={setResolved}
          selectedPerson={selectedPerson}
          data={data}
          setData={setData}
          person={selectedPerson}
          setSelectedPerson={setSelectedPerson}
        />
      </div>
    </div>
  );
};

export default Card;
