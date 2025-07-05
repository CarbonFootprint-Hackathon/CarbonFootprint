import React from 'react';
import { Link } from 'react-router-dom';
import { FaInfoCircle, FaTachometerAlt, FaBuilding, FaChartBar, FaRobot, FaFileAlt, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="h-screen w-60 bg-white-50 p-4 flex flex-col justify-between fixed shadow-md">
      
      <div>
        <h1 className="text-2xl font-extrabold mb-1 text-green-500">CarbonTrack</h1>
        <h2 className="text-md font-semibold mb-4 pt-4 border-b border-gray-300">Net Zero Tracker</h2>

        <nav className="flex flex-col space-y-3">
          <Link
            to="/"
            className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-green-500 hover:text-white transition"
          >
            <FaInfoCircle /> About
          </Link>

          <Link
            to="/dashboard"
            className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-green-500 hover:text-white transition"
          >
            <FaTachometerAlt /> Dashboard
          </Link>

          <Link
            to="/departments"
            className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-green-500 hover:text-white transition"
          >
            <FaBuilding /> Departments
          </Link>

          <Link
            to="/analytics"
            className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-green-500 hover:text-white transition"
          >
            <FaChartBar /> Analytics
          </Link>

          <Link
            to="/chatbot"
            className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-green-500 hover:text-white transition"
          >
            <FaRobot /> Chatbot
          </Link>

          <Link
            to="/esg"
            className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-green-500 hover:text-white transition"
          >
            <FaFileAlt /> ESG Reports
          </Link>
        </nav>
      </div>

      <div className="pt-4 border-t border-gray-300">
        <p className="text-sm font-semibold">Name</p>
        <p className="text-sm text-gray-600 mb-3">Department</p>

        <button className="w-full bg-red-500 text-white py-1 rounded hover:bg-red-600 transition flex items-center justify-center gap-2">
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
