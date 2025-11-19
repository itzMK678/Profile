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
          <p>CarsRalley is a MERN Stack event booking website with Stripe payments and a calendar-based scheduling system. </p>
          <a href="https://racefusion.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button >See project</button>
          </a>
        </div>
      </details>
    </div>
  );
};

export default LatestProj;
