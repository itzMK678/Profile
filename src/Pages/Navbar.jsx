import React from "react";
import image from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-[#8c21d3ff] h-[100px] p-5">
      {/* Logo */}
      <div
        className="w-[100px] h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Navigation */}
      <div className="flex">
        <a href="Resume.pdf" download>
          <button
            className="h-full w-full rounded-[8px] p-2 border border-white  cursor-pointer bg-white text-[#8c21d3ff] transition-all duration-300 hover:bg-[#ad3df8ff] hover:text-white"
          >
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;