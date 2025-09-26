import React, { use, useState } from "react";
import SIngleCard from "./SIngleCard";
import TaskStatus from "../TaskStatus/TaskStatus";
import Box from "../Box/Box";

const Card = ({ fetchPromise }) => {
  const recivedJson = use(fetchPromise);
  const [data, setData] = useState(recivedJson);
  const [selectedPerson, setSelectedPerson] = useState([]);
  console.log(selectedPerson);
  // ---------------//
  return (
    <div className="w-[1200px] mx-auto mt-9">
      <h1 className="font-bold text-3xl mb-3">Customer Ticket</h1>
      <div className="flex gap-4">
        <div className="grid grid-cols-2 gap-4">
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
          selectedPerson={selectedPerson}
          data={data}
          setData={setData}
          person={selectedPerson}
          setSelectedPerson={setSelectedPerson}
        />
      </div>
      {/* <Box data={data}></Box> */}
    </div>
  );
};

export default Card;
