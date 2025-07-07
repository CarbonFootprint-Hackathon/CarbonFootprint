import React from 'react';
import Chatbot from '../Chatbot';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';

const Dispatch = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 ">
      <Navbar />
      <Header />

      <div className=" mx-auto px-6 py-10 ml-90 flex flex-col justify-center items-center">
        <div className="bg-white shadow-lg rounded-xl p-8 max-w-[60%]">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-yellow-700 mb-8">
            Dispatch Department
          </h1>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Roles and Responsibilities
            </h2>
            <p className="text-lg mb-2">
              <span className="font-semibold text-gray-700">Role:</span>{' '}
              Manages final packaging, documentation, and delivery of finished goods.
            </p>
          </div>

          <div className="space-y-4 text-base leading-relaxed">
            <div className="border-l-4 border-yellow-400 pl-4">
              <strong>1. Final Inspection & Approval:</strong> Verifies product quality, labeling, and packaging before dispatch.
            </div>
            <div className="border-l-4 border-yellow-400 pl-4">
              <strong>2. Packing & Preservation:</strong> Ensures proper packing to avoid transit damage (e.g., shrink-wrap, crates).
            </div>
            <div className="border-l-4 border-yellow-400 pl-4">
              <strong>3. Logistics Coordination:</strong> Plans shipment routes, schedules transport, and manages delivery timelines.
            </div>
            <div className="border-l-4 border-yellow-400 pl-4">
              <strong>4. Documentation & Handover:</strong> Prepares invoices, delivery challans, and tracks goods until customer receipt.
            </div>
          </div>
        </div>

        <div className="w-5xl mx-auto px-6 py-8  ">
          <h1 className="text-3xl font-bold text-yellow-700 mb-6 text-center">
            Positions in Dispatch Department
          </h1>

          <div className="flex justify-between">
            <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-5 border-l-4 border-yellow-500 transition duration-300">
              <h2 className="text-lg font-semibold text-gray-800">
                Dispatch In-Charge
              </h2>
              <h2 className="text-lg font-bold text-black-800 text-center mt-5">
                Muthuvel
              </h2>
            </div>

            <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-5 border-l-4 border-yellow-500 transition duration-300">
              <h2 className="text-lg font-semibold text-gray-800">
                Packing Supervisor
              </h2>
              <h2 className="text-lg font-bold text-black-800 text-center mt-5">
                Prakash
              </h2>
            </div>

            <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-5 border-l-4 border-yellow-500 transition duration-300">
              <h2 className="text-lg font-semibold text-gray-800">
                Logistics Coordinator
              </h2>
              <h2 className="text-lg font-bold text-black-800 text-center mt-5">
                Ramesh
              </h2>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto p-6 bg-white shadow-xl rounded-2xl flex flex-col md:flex-row items-start gap-8">
          <div className="md:w-1/3 w-full bg-yellow-100 p-6 rounded-xl shadow-inner">
            <h1 className="text-2xl font-bold text-yellow-800 mb-2">Carbon Points</h1>
            <p className="text-sm text-gray-700 mb-1">🌿 Green Score: <span className="font-semibold text-yellow-700">81/100</span></p>
            <p className="text-sm text-gray-700 mb-1">🏭 Department: <span className="font-semibold">Dispatch</span></p>
            <p className="text-sm text-gray-700 mb-1">📅 Month: <span className="font-semibold">June 2025</span></p>
          </div>

          <div className="md:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-xl shadow-inner">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Current Emission</h2>
              <p className="text-4xl font-bold text-red-600">610 kg CO₂e</p>
              <p className="text-sm text-gray-600 mt-2">Recorded in June 2025</p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl shadow-inner">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Projected Emission</h2>
              <p className="text-4xl font-bold text-green-600">450 kg CO₂e</p>
              <p className="text-sm text-gray-600 mt-2">Forecasted for July 2025</p>
            </div>
          </div>
        </div>

        <div className='justify-center w-full h-full flex'>
          <div className="min-w-80 mx-150 bg-white shadow-lg rounded-xl p-6 mt-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">📄 Report</h1>
            <h2 className="text-sm text-gray-500 mb-6 text-justify">Download Department - ESG emission reports</h2>
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200">
              Download Report
            </button>
          </div>
        </div>

        <Chatbot />
      </div>
    </div>
  );
};

export default Dispatch;
