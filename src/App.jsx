import React from 'react';
import './App.css';
import Profile from './components/Profile';
import { Routes, Route } from "react-router-dom";

import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import Aboutpage from './MainPages/Aboutpage';
import Overview from './MainPages/Overview';
import Details from './MainPages/Details';
import ProjectPage from './MainPages/ProjectPage';
// import ProfileMain from './Pages/ProfileMain';

function App() {
  return (
    <>
    <Navbar/>
     {/* <Profile/> */}
      <Routes>
        <Route path="/" element={<Profile/> }/>
        <Route path="/contact" element={<Details/>} />
         <Route path="/Projects" element={<ProjectPage />} />
         <Route path="/Projects" element={ <Aboutpage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
