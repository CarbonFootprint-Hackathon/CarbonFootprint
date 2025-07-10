import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const mockData = [
  { name: 'Jan', emission: 400 },
  { name: 'Feb', emission: 300 },
  { name: 'Mar', emission: 500 },
  { name: 'Apr', emission: 200 },
];
const mockData1 = [
  { name: 'Jan', emission: 200 },
  { name: 'Feb', emission: 800 },
  { name: 'Mar', emission: 600 },
  { name: 'Apr', emission: 900 },
];
const mockData2 = [
  { name: 'Jan', emission: 1000 },
  { name: 'Feb', emission: 500 },
  { name: 'Mar', emission: 400 },
  { name: 'Apr', emission: 300 },
];

const Graph = ({ title }) => (
  <div className="bg-white p-4 shadow-md rounded-xl min-w-[500px]">
    <h2 className="text-center text-green-500 font-semibold mb-2 ">{title}</h2>
    <ResponsiveContainer style={{paddingTop:'8px'}} height={250}>
      <LineChart data={mockData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis label={{ value: 'CO₂ (kg)', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="emission" stroke="#10B981" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
    
  </div>
);
const Graph1 = ({ title }) => (
  <div className="bg-white p-4 shadow-md rounded-xl min-w-[500px]">
    <h2 className="text-center text-green-500 font-semibold mb-2 ">{title}</h2>
    <ResponsiveContainer style={{paddingTop:'8px'}} height={250}>
      <LineChart data={mockData1}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis label={{ value: 'CO₂ (kg)', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="emission" stroke="#10B981" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
    
  </div>
);
const Graph2 = ({ title }) => (
  <div className="bg-white p-4 shadow-md rounded-xl min-w-[500px]">
    <h2 className="text-center text-green-500 font-semibold mb-2 ">{title}</h2>
    <ResponsiveContainer style={{paddingTop:'8px'}} height={250}>
      <LineChart data={mockData2}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis label={{ value: 'CO₂ (kg)', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="emission" stroke="#10B981" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
    
  </div>
);

const Analytics = () => {
  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center ">
      <h1 className="text-2xl text-green-500 font-bold mb-6 pb-3">Carbon Emission Dashboard</h1>
      
      {/* Top Graphs */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-6 ">
        <Graph title="Melting Department" />
        <Graph1 title="Machining Department" />
      </div>

      {/* Bottom Graph */}
      <div className="flex justify-center">
        <Graph2 title="Dispatch Department" />
      </div>
    </div>
  );
};

export default Analytics;
