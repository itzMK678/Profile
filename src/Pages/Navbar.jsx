import React from "react";
import image from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-[#8c21d3ff] h-[100px] p-5">
      {/* Logo */}
      <div
        className="w-[100px] h-[90px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Navigation */}
      <div className="flex">
        <a href="Resume.pdf" download>
          <button
            className="h-[40px] w-[100px] rounded-[8px] border border-white mt-[18px] cursor-pointer bg-white text-[#8c21d3ff] transition-all duration-300 hover:bg-[#ad3df8ff] hover:text-white"
          >
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;