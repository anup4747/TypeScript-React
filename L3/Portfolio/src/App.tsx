// import React, { createContext, useContext, useState, useEffect } from 'react';
// import './App.css';

import Navbar from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { Footer } from "./Components/Footer";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Work } from "./Pages/Work";
import { Ecomuors } from "./Pages/Projects/Ecomours";
import { Project2 } from "./Pages/Projects/project2";
import { Project3 } from "./Pages/Projects/project3";
import { Project4 } from "./Pages/Projects/project4";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { certificates } from './Data/data';

export const App: React.FC = () => {
  
  return (
    <div className="App">
      <div className="flex overflow-hidden flex-col bg-white">
        <Router>
          {/* Navbar is persistent and rendered above all routes */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Work" element={<Work />} />
            <Route path="/About" element={<About certificates={certificates} />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Ecomuors" element={<Ecomuors />} />
            <Route path="/project2" element={<Project2 />} />
            <Route path="/project3" element={<Project3 />} />
            <Route path="/project4" element={<Project4 />} />
          </Routes>
        </Router>

        <Footer />
      </div>
    </div>
  );
};

export default App;
