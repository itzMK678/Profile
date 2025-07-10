import React, { useState } from "react";
import Mypic from "../assets/image.jpeg"
import "./Profile.css";
import Overview from "../MainPages/Overview";
import Aboutpage from "../MainPages/Aboutpage";
import ProjectPage from "../MainPages/ProjectPage";
import Details from "../MainPages/Details";





const Profile = () => {
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
    <div id="ProfileDiv"style={{ display: "flex",justifyContent:"center" }}>
      <div style={{ margin: "20px"  }}>
        <p style={{ color: "#a273c2", fontSize: "14px", opacity: "70%" }}>
          Profile
        </p>
        <div className="Pcard">
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
  style={{ color: active === c.tab ? "#a273c2" : "#c1c1c1", cursor: "pointer" }}
>
  {c.name}
</li>

              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* <div id="SecPart" > */}
      <div style={{marginTop:"20px"}}>
        {content}
      </div>
    </div>
  );
};

export default Profile;
