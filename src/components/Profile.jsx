import React, { useState } from "react";
import Mypic from "../assets/image.jpeg"
import Overview from "../MainPages/Overview";
import Aboutpage from "../MainPages/Aboutpage";
import ProjectPage from "../MainPages/ProjectPage";
import Details from "../MainPages/Details";
import "../components/Box.css"


const Test = () => {
      const [active, setActive] = useState(1);

  const menu = [
    { name: "OverView", tab: 1 },
    { name: "About", tab: 2 },
    { name: "Projects", tab: 3 },
    { name: "Details", tab: 4 },
  ];

  
  let content;
  if (active === 1) {
    content = <Overview/>;
  } else if (active === 2) {
    content = <Aboutpage/>;
  } else if (active === 3) {
    content = <ProjectPage/>;
  } else if (active === 4) {
    content = <Details/>;
  }

  return (

    

    <div id="ProfileDiv" style={{width:"100%",display:'flex',boxSizing:"border-box" ,paddingTop:"15px"}}>

    <div id="FirstDiv">
         <div>
                
                <p style={{ color: "#8c21d3ff", fontSize: "14px", opacity: "70%" }}>
                  Profile
                </p>
                <div className="Pcard" style={{marginRight:"10px",cursor:"pointer" }}>
                  <div id="info">
                    <div id="pic">
                      <img src={Mypic} alt="Profile" />
                    </div>
                    <p id="name">Mamoon Khaliq</p>
                    <p>Front-end Webdeveloper</p>
                    <p>
                      <i className="fa-solid fa-location-pin"></i> Haroonabad, Pakistan
                    </p>
                  </div>
                  <div id="links">
                    <ul>
                      {menu.map((c) => (
                       <li
          key={c.tab}
          onClick={() => setActive(c.tab)}
          style={{ color: active === c.tab ? "#8c21d3ff" : "#c1c1c1", cursor: "pointer" }}
        >
          {c.name}
        </li>
        
                      ))}
                    </ul>
                  </div>
              </div> 
        </div>
    </div>
    <div id="SecondDiv">
       {content}
    </div>
    </div>
  )
}

export default Test