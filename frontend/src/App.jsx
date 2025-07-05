import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Example page components
import Home from "./pages/Home";
import Chatbot from "./pages/Chatbot";
import Dashboard from "./pages/Dashboard";
import Departments from "./pages/Departments";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>


        
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="departments" element={<Departments />} />
        <Route path="/header" element={<Header />} />
        <Route path="/nav" element={<Navbar />} />




      </Routes>
    </BrowserRouter>
  );
}

export default App;
