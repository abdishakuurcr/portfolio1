import React from "react";
import Shakra from "../Images/Shakra.jpg";
const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row   justify-center px-4   py-24 w-full "> 
      <div className="text-center sm:text-left">
        <h1 className="text-5xl sm:text-5xl font-bold mb-4">
        <img className=" ml-[28%] w-[210px] sm:w-[250px] rounded-full pt-11    sm:mt-0 sm:ml-[20%]" src={Shakra} alt="profile" />
         <h1 className="ml-11"> Hi,</h1>
      I'm  <span className="text-blue-700">Abdishakuur Daahir Elmi</span> <br /> <span className="text-xl">junior </span> <br /> fullstack Web Developer
        </h1>
        <a 
          href="/Abdishakuur Daahir elmi's Cv.docx" // Tani waa dariiqa saxda ah ee CV-gaaga
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-500 font-bold px-6 py-3 rounded-[10px] text-white mt-8 transition duration-300 hover:bg-blue-600"
        >
          Here is My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
