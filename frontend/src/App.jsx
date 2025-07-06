import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Example page components
import Home from "./pages/Home";
import Chatbot from "./pages/Chatbot";
import Dashboard from "./pages/Dashboard";
import Departments from "./pages/Departments";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Analytics from "./pages/Analytics";
import ESG from "./pages/ESG";
import About from "./pages/About";

// Departments Pages
import Dispatch from "./pages/Departments/Dispatch";
import Machining from "./pages/Departments/Machining";
import Melting from "./pages/Departments/Melting";

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
        <Route path="/about" element={<About />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/esg" element={<ESG />} />
        <Route path="/chatbot" element={<Chatbot/>} />
        <Route path="/dispatch" element={<Dispatch/>} />
        <Route path="/machining" element={<Machining/>} />
        <Route path="/melting" element={<Melting/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
