import React from 'react';
import './Box.css';
// import "../MainPages/Responsive.css";

const Box = ({ name, icon, link }) => {
  return (
    
    <div className="Card" >
      <div id="thing">
        <p>{name}</p>
        <div className="image" style={{marginTop:"-16px"}}>{icon}</div>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="contact-btn"style={{marginTop:"-16px",width:'80%',marginLeft:"15px"}}>Contact</button>
      </a>
    </div>
  );
};

export default Box;
