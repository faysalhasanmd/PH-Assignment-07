import React from "react";
import "./navStyle.css";

const Navbar = () => {
  return (
    <div className="shadow-sm bg-white">
      <div className="w-[1200px] mx-auto flex items-center justify-between p-3">
        <h1 className="font-bold">CS — Ticket System</h1>
        {/* <div> */}
        <div className="navbar-end">
          <ul className=" flex gap-5 mr-5">
            <li className="font-size text-gray-700">Home</li>
            <li className="font-size text-gray-700">FAQ</li>
            <li className="font-size text-gray-700">Changelog</li>
            <li className="font-size text-gray-700">Blog</li>
            <li className="font-size text-gray-700">Download</li>
            <li className="font-size text-gray-700">Contact</li>
          </ul>
          {/* </div> */}
          <div>
            <button className="btn bg-gradient-to-r from-purple-700 to-purple-500 text-white text-end">
              + New Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
