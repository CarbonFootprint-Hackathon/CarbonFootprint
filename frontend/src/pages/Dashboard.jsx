import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <div >
      <Navbar />
      
      <Header />

      {/* Stats Cards */}
      <div className="flex justify-center items-center gap-8 mt-10 ml-60">
        <div className="h-40 w-60 bg-white shadow-md flex flex-col items-center justify-center border-2 border-green-200 hover:cursor-pointer transition-transform duration-200 hover:scale-105 rounded-2xl">
          <h1 className="font-bold text-lg text-green-700 mb-2">
            Total CO₂ Today
          </h1>
          <span className="text-2xl font-semibold text-gray-700">1,234 kg</span>
        </div>
        <div className="h-40 w-60 bg-white shadow-md flex flex-col items-center justify-center border-2 border-yellow-200 hover:cursor-pointer transition-transform duration-200 hover:scale-105 rounded-2xl">
          <h1 className="font-bold text-lg text-yellow-700 mb-2">
            Carbon Points Earned
          </h1>
          <span className="text-2xl font-semibold text-gray-700">567</span>
        </div>
        <div className="h-40 w-60 bg-white shadow-md flex flex-col items-center justify-center border-2 border-red-200 hover:cursor-pointer transition-transform duration-200 hover:scale-105 rounded-2xl">
          <h1 className="font-bold text-lg text-red-700 mb-2">Trees Planted</h1>
          <span className="text-2xl font-semibold text-gray-700">42</span>
        </div>
        <div className="h-40 w-60 bg-white shadow-md flex flex-col items-center justify-center border-2 border-purple-200 hover:cursor-pointer transition-transform duration-200 hover:scale-105 rounded-2xl">
          <h1 className="font-bold text-lg text-purple-700 mb-2">
            Net Zero Progress
          </h1>
          <span className="text-2xl font-semibold text-gray-700">68%</span>
        </div>
      </div>
      {/* Department Emissions */}
      <div className="flex justify-center items-start gap-8 mt-12 ml-60">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-96 border border-gray-100">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="font-bold text-xl text-gray-800">
              Department Emissions
            </h1>
            <select className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-300">
              <option value="today">Today</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
            </select>
          </div>

          {/* Emissions List */}
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-green-50 rounded-xl px-4 py-3 hover:scale-[1.02] transition-transform mb-8">
              <span className="font-medium text-gray-700 ">Melting</span>
              <span className="font-semibold text-green-700">420 kg</span>
            </div>

            <div className="flex justify-between items-center bg-yellow-50 rounded-xl px-4 py-3 hover:scale-[1.02] transition-transform mb-7">
              <span className="font-medium text-gray-700">Machining</span>
              <span className="font-semibold text-yellow-700">320 kg</span>
            </div>

            <div className="flex justify-between items-center bg-red-50 rounded-xl px-4 py-3 hover:scale-[1.02] transition-transform mb-7">
              <span className="font-medium text-gray-700">Dispatch</span>
              <span className="font-semibold text-red-700">210 kg</span>
            </div>
          </div>
        </div>
{/* Third */}
        <div className="bg-white shadow-lg rounded-2xl p-6 w-96 border border-gray-100  ml-0">
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            Net Zero Milestone Progress
          </h1>

          <div className="space-y-4">
            <div className="flex flex-col bg-blue-50 rounded-xl px-4 py-3 hover:scale-[1.02] transition-transform">
              <span className="text-md font-semibold text-blue-700">
                2028 Target
              </span>
              <span className="text-sm text-gray-700">
                ● Level: Phase 1 – Reduction in Scope 1 Emissions
              </span>
            </div>

            <div className="flex flex-col bg-indigo-50 rounded-xl px-4 py-3 hover:scale-[1.02] transition-transform">
              <span className="text-md font-semibold text-indigo-700">
                2032 Target
              </span>
              <span className="text-sm text-gray-700">
                ● Level: Phase 2 – Renewable Energy Transition
              </span>
            </div>

            <div className="flex flex-col bg-purple-50 rounded-xl px-4 py-3 hover:scale-[1.02] transition-transform">
              <span className="text-md font-semibold text-purple-700">
                2040 Target
              </span>
              <span className="text-sm text-gray-700">
                ● Level: Achieve Net Zero Carbon Emissions
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth */}
      <div className="flex justify-center items-start gap-8 mt-12 ml-60 mb-16">
  <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-6xl border border-gray-100">
    <h1 className="text-xl font-bold text-gray-800 mb-6">Emission Scope Breakdown</h1>

    <div className="flex flex-wrap gap-6 justify-center">
      {/* Scope 1 */}
      <div className="w-64 bg-red-50 border border-red-200 rounded-xl px-5 py-6 hover:scale-[1.03] transition-transform shadow-sm">
        <h2 className="text-lg font-bold text-red-700 mb-2">Scope 1</h2>
        <p className="text-gray-700 text-sm">Direct emissions from owned or controlled sources (e.g., fuel combustion).</p>
      </div>

      {/* Scope 2 */}
      <div className="w-64 bg-yellow-50 border border-yellow-200 rounded-xl px-5 py-6 hover:scale-[1.03] transition-transform shadow-sm">
        <h2 className="text-lg font-bold text-yellow-700 mb-2">Scope 2</h2>
        <p className="text-gray-700 text-sm">Indirect emissions from the generation of purchased electricity consumed.</p>
      </div>

      {/* Scope 3 */}
      <div className="w-64 bg-green-50 border border-green-200 rounded-xl px-5 py-6 hover:scale-[1.03] transition-transform shadow-sm">
        <h2 className="text-lg font-bold text-green-700 mb-2">Scope 3</h2>
        <p className="text-gray-700 text-sm">All other indirect emissions in the value chain (e.g., transportation, suppliers).</p>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Dashboard;
