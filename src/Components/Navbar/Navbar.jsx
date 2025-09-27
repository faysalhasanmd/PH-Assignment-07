import React from "react";
import "./navStyle.css";

const Navbar = () => {
  return (
    <div className="shadow-sm bg-white">
      <div className="w-[1200px] mx-auto flex nav items-center justify-between p-3">
        <h1 className="font-bold text-3xl mb-2 sm:mb-0 sm:text-2xl">
          CS — Ticket System
        </h1>
        <div className="navbar-end nav">
          <ul className="flex gap-2 md:gap-5 nav mr-5">
            <a href="">
              <li className="font-size text-gray-700">Home</li>
            </a>
            <a href="">
              <li className="font-size text-gray-700">FAQ</li>
            </a>
            <a href="">
              <li className="font-size text-gray-700">Changelog</li>
            </a>
            <a href="">
              <li className="font-size text-gray-700">Blog</li>
            </a>
            <a href="">
              <li className="font-size text-gray-700">Download</li>
            </a>
            <a href="">
              <li className="font-size text-gray-700">Contact</li>
            </a>
          </ul>
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
