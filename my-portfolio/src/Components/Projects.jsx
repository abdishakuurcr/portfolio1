import React, { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import bloodDonationScreenshot from "../Images/bloodHome.jpg"; // Import screenshot for blood donation app
import blooddashboard from "../Images/dashboard.jpg"; // Import screenshot for blood donation app
import EcomerceHome from "../Images/ecomerce Home.jpg";
import EcomerceDashboard from "../Images/eComerce-dashbord.jpg";

const Projects = () => {
  // State to manage the visibility of screenshots
  const [showScreenshot, setShowScreenshot] = useState(null); // null means no screenshot is displayed

  // Function to handle card click
  const handleCardClick = (project) => {
    // Toggle the visibility of the clicked project's screenshot
    setShowScreenshot(showScreenshot === project ? null : project);
  };

  return (
    <div className="py-10 bg-slate-50  sm:px-[70px]">
      <h1 className="font-bold text-4xl text-center mb-8">My Main Projects</h1>
      <div className="flex justify-center gap-8 flex-wrap">

        {/* Project 1: Blood Donation Web Application */}
        <div 
          className="w-full sm:w-[500px] rounded-lg bg-white shadow-lg p-5 flex flex-col items-center transition-transform duration-300 hover:scale-105 cursor-pointer" 
          onClick={() => handleCardClick("bloodDonation")}
        >
          <FaHeart className="w-[80px] mb-4 text-red-600" />
          <h2 className="text-center font-bold text-xl text-blue-700">Blood Donation Web Application</h2>
          <p className="text-gray-500 text-center mt-2">
            Built a web application to connect blood donors with recipients.
          </p>
          <p className="text-gray-500 text-center mt-1">
            Included search functionality for filtering donors by city and blood type, along with responsive design and secure form validation.
          </p>
          {showScreenshot === "bloodDonation" && (
            <div>
              <img className="w-full h-[150px] object-cover rounded-md mt-3" src={bloodDonationScreenshot} alt="Blood Donation App Screenshot" />
              <img className="w-full h-[150px] object-cover rounded-md mt-3" src={blooddashboard} alt="Blood Donation App Screenshot" />
            </div>
          )}
        </div>

        {/* Project 2: E-commerce Website */}
        <div 
          className="w-full sm:w-[500px] rounded-lg bg-white shadow-lg p-5 flex flex-col items-center transition-transform duration-300 hover:scale-105 cursor-pointer" 
          onClick={() => handleCardClick("ecommerce")}
        >
          <FaShoppingCart className="w-[80px] mb-4 text-green-600" />
          <h2 className="text-center font-bold text-xl text-blue-700 ">E-commerce Website</h2>
          <p className="text-gray-500 text-center mt-2">
            Designed a full-stack e-commerce platform with product listing, order processing, and payment integration.
          </p>
          <p className="text-gray-500 text-center mt-1">
            Utilized React for the front-end and Node.js with MongoDB for the back-end.
          </p>
          {showScreenshot === "ecommerce" && (
            <>
              <img className="w-full h-[150px] object-cover rounded-md mt-3" src={EcomerceHome} alt="E-commerce App Screenshot" />
              <img className="w-full h-[150px] object-cover rounded-md mt-3" src={EcomerceDashboard} alt="E-commerce App Screenshot" />
            </>
          )}
        </div>

        {/* Add more projects similarly */}
      </div>
    </div>
  );
};

export default Projects;
