import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for the hamburger and close buttons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white backdrop-blur-md bg-opacity-60 shadow fixed z-10 w-full px-4 sm:px-6 md:px-10 lg:px-[70px] py-4 flex justify-between items-center">
      <h1 className={"md:text-4xl text-4xl text-blue-900 font-bold  "}>Anas Waayeel</h1>
      
      {/* Hamburger Menu Icon */}
      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />} {/* Switch icons based on menu state */}
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          isOpen ? "block pl-4 text-blue-700 pt-0" : "hidden"
        } md:flex gap-4 md:text-2xl px-1 focus:border-b-2 border-blue-700 absolute md:relative top-16 left-0 md:top-auto md:left-auto bg-white md:bg-transparent w-full md:w-auto py-4 md:py-0 md:items-center`}
      >
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
          <a href="#">Contacts</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;