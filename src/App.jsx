import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// import PixelSnow from "./effects/PixelSnow";

import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";

import Profile from "./components/Profile";
import Details from "./MainPages/Details";
import Aboutpage from "./MainPages/Aboutpage";
import ProjectPage from "./MainPages/ProjectPage";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">

      {/* Background Effect */}
      {/* <div className="fixed inset-0 z-0 pointer-events-none">
        <PixelSnow
          color="#780bbf"
          speed={0.2}
          density={0.6}
          variant="snowflake"
          className="w-full h-full"
        />
      </div> */}

      {/* Website */}
      <div className="relative z-10">
        <Navbar />

        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/Contact" element={<Details />} />
          <Route path="/Projects" element={<ProjectPage />} />
          <Route path="/About" element={<Aboutpage />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;