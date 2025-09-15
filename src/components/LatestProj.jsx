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
          <p>API Tester is my latest project which I created using React and Axios.</p>
          <a href="https://api-tester-promax.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button >See project</button>
          </a>
        </div>
      </details>
    </div>
  );
};

export default LatestProj;
