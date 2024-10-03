import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">Contact Me</h1>
      <form className="max-w-md mx-auto bg-[#0B437F] p-8 rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out  hover:shadow-xl">
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2 text-yellow-50" htmlFor="name">
            Name
          </label>
          <input
            className="appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none border border-gray-300 rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="message"
            rows="5"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className="flex items-center justify-end">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
