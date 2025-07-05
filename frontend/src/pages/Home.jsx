import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-md bg-white">
        <h1 className="text-3xl font-bold text-green-700">CarbonTrack</h1>
        <button
          onClick={() => navigate("/login")}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg"
        >
          Login
        </button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 md:px-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          AI-Driven Carbon Net Zero Tracking
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Empower your manufacturing operations with real-time carbon footprint
          monitoring, AI optimization, and sustainability reporting — all in one platform.
        </p>
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-4 px-8 py-3 bg-green-700 text-white text-lg font-semibold rounded-lg hover:bg-green-800"
        >
          Go to Dashboard
        </button>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 md:px-20 pb-16">
        {[
          {
            title: "Scope 1, 2, 3 Emission Tracking",
            desc: "Track emissions by process and part level for full ESG compliance.",
          },
          {
            title: "AI-Powered Optimization",
            desc: "Identify emission hotspots and receive actionable recommendations using ML.",
          },
          {
            title: "Live Dashboards",
            desc: "Visualize carbon metrics across departments in real-time.",
          },
          {
            title: "Carbon Offset Integration",
            desc: "Track afforestation projects and net emissions effectively.",
          },
          {
            title: "EcoSim: What-If Simulator",
            desc: "Simulate operational changes and forecast emissions with AI.",
          },
          {
            title: "Audit-Ready Reporting",
            desc: "Download ready-to-submit ESG reports anytime.",
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg border-l-4 border-green-400"
          >
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              {feature.title}
            </h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-6 bg-gray-100 text-gray-500">
        &copy; {new Date().getFullYear()} CarbonTrack. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
