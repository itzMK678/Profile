import React, { useState } from 'react';
import "../MainPages/Responsive.css"; 
import "../components/LatestProj.css";

const LatestProj = () => {
  const [padding, setPadding] = useState("10px");

  const handleClick = () => {
    setPadding(prev => (prev === "10px" ? "30px" : "10px"));
  };

  return (
    <div className="LatestProj">
      <details >
        <summary onClick={handleClick}>See my Latest Project</summary>
        <div>
          <p>API Tester is my latest project which I created using React and Axios.</p>
          <a href="https://api-tester-promax.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button>See project</button>
          </a>
        </div>
      </details>
    </div>
  );
};

export default LatestProj;
