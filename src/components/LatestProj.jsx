import React, { useState } from 'react';
import "../components/Box.css"


const LatestProj = () => {
  const [paddingBottom, setPaddingBottom] = useState("10px");

  const handleClick = () => {
    setPaddingBottom(prev => (prev === "10px" ? "30px" : "10px"));
  };

  return (
   
    <div className="LatestProj" style={{ paddingBottom }}>
      <details>
        <summary onClick={handleClick}>See my Latest Project</summary>
        <div>
          <p>
MK Tours is a modern tourism website built with <strong>Next.js</strong>, designed for the Pakistani market. It features <strong>WhatsApp integration</strong> for seamless customer communication and <strong>GSAP animations</strong> to deliver a smooth and engaging user experience.
</p>

          <a href="https://my-journey-wine.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button >See project</button>
          </a>
        </div>
      </details>
    </div>
  );
};

export default LatestProj;
