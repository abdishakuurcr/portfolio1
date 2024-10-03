import React from "react";

const Header= () => {
  return (
    <div className="bg-white backdrop-blur-md bg-opacity-60 shadow flex justify-between fixed z-10 w-full px-4 sm:px-6 md:px-10 lg:px-[70px] py-4 items-center">
      <h1 className=" md:text-4xl font-bold">|Eng: <span  className="text-blue-500">SHAKRA|</span></h1>
      <ul className="flex gap-6 font-bold  md:text-2xl px-1  focus:border-b-2 border-blue-700">
        <li className="hover:border-b-2 border-blue-700">
          <a href="#">Home</a>
        </li>
        <li className="hover:border-b-2 border-blue-700">
          <a href="#">About</a>
        </li>
        <li className="hover:border-b-2 border-blue-700">
          <a href="#">Skills</a>
        </li>
        <li className="hover:border-b-2 border-blue-700">
          <a href="#">Projects</a>
        </li>
        <li className="hover:border-b-2 border-blue-700">
          <a href="#">Contacts US</a>
        </li>
      </ul>
    </div>
  );
};

export default Header
