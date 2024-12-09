import React from "react";
// import './App.css';

import Navbar from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { Footer } from "./Components/Footer";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Work } from "./Pages/Work";
import { WorkDetails } from "./Pages/WorkDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/WorkDetails" element={<WorkDetails />} />
          </Routes>
        </Router>

        <Footer />
      </div>
    </div>
  );
};

export default App;
