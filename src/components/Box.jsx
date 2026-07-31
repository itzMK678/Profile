import React from "react";

const Box = ({ name, icon, link }) => {
  return (
    <div className="w-[162px] h-[120px] m-[5px] py-[7px] flex flex-col justify-between bg-[#2d2d2dcc] rounded-[10px] transition-all duration-300 hover:border hover:border-[#a273c2] cursor-pointer">
      <div className="w-full h-[40px]  flex justify-between px-[10px]">
        <p className="text-[20px] text-[#c1c1c1] ">
          {name}
        </p>

        <div className="text-center text-[20px]  text-[#c1c1c1]">
          {icon}
        </div>
      </div>

      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="text-[15px] font-[200] w-[80%] h-[35px] ml-[15px] mb-[2px] -mt-4 bg-[#8c21d3] rounded-[6px] text-[#c1c1c1] cursor-pointer">
          Contact
        </button>
      </a>
    </div>
  );
};

export default Box;