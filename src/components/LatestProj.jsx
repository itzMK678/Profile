import React, { useState } from "react";

const LatestProj = () => {
  const [paddingBottom, setPaddingBottom] = useState("10px");

  const handleClick = () => {
    setPaddingBottom((prev) => (prev === "10px" ? "30px" : "10px"));
  };

  return (
    <div
      className=" mt-8 flex w-full flex-col text-base text-[#c1c1c1]
                 max-[480px]:px-2.5 max-[480px]:text-sm
                 max-[380px]:text-[13px]"
      style={{ paddingBottom }}
    >
      <details className="w-[99%] cursor-pointer rounded-md bg-[#2d2d2dcc] px-2 py-2 text-base max-[480px]:w-[98%] max-[480px]:p-2.5 max-[480px]:text-sm max-[380px]:max-w-[330px] max-[320px]:max-w-[270px] max-[320px]:w-full max-[320px]:p-2">
        <summary className="hover:text-[#a432f0]" onClick={handleClick}>
          See my Latest Project
        </summary>

        <div className="hover:text-[#a432f0] mt-4 flex flex-wrap justify-between gap-3 rounded-md max-[768px]:flex-col max-[768px]:items-start">
          <p>
            MK Tours is a modern tourism website built with{" "}
            <strong>Next.js</strong>, designed for the Pakistani market. It
            features <strong>WhatsApp integration</strong> for seamless customer
            communication and <strong>GSAP animations</strong> to deliver a
            smooth and engaging user experience.
          </p>

          <a
            href="https://my-journey-wine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-3 h-7 w-[100px] rounded-md bg-[#a432f0] text-white transition-opacity hover:opacity-90 max-[768px]:w-full max-[480px]:text-sm max-[320px]:h-[26px] max-[320px]:text-[12.5px]">
              See Project
            </button>
          </a>
        </div>
      </details>
    </div>
  );
};

export default LatestProj;