import React, { useState } from "react";
import Mypic from "../assets/image.jpeg"
import Overview from "../MainPages/Overview";
import Aboutpage from "../MainPages/Aboutpage";
import ProjectPage from "../MainPages/ProjectPage";
import Details from "../MainPages/Details";
import "../components/Box.css"
import { Helmet } from "react-helmet-async";

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

    <>

<Helmet>
  {/* Basic SEO */}
  <title>M Mamoon Khaliq | MERN Stack & Full Stack Developer</title>

  <meta
    name="description"
    content="Official portfolio of M Mamoon Khaliq, a MERN Stack & Full Stack Developer specializing in React, Next.js, Node.js, Express.js, MongoDB, Supabase, and modern web applications."
  />

  <meta
    name="keywords"
    content="M Mamoon Khaliq, MERN Stack Developer, Full Stack Developer, React Developer, Next.js Developer, Node.js Developer, Express.js, MongoDB, Supabase, JavaScript Developer, Portfolio"
  />

  <meta name="author" content="M Mamoon Khaliq" />
  <meta name="robots" content="index, follow" />

  {/* Canonical URL */}
  <link rel="canonical" href="https://mamoon-dev.vercel.app/" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://mamoon-dev.vercel.app/" />
  <meta
    property="og:title"
    content="M Mamoon Khaliq | MERN Stack & Full Stack Developer"
  />
  <meta
    property="og:description"
    content="Explore the portfolio of M Mamoon Khaliq featuring MERN Stack, React, Next.js, Node.js, MongoDB, Supabase, and modern web development projects."
  />
  <meta
    property="og:image"
    content="https://mamoon-dev.vercel.app/preview.png"
  />
  <meta property="og:site_name" content="M Mamoon Khaliq Portfolio" />
  <meta property="og:locale" content="en_US" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="M Mamoon Khaliq | MERN Stack & Full Stack Developer"
  />
  <meta
    name="twitter:description"
    content="Official portfolio of MERN Stack & Full Stack Developer M Mamoon Khaliq."
  />
  <meta
    name="twitter:image"
    content="https://mamoon-dev.vercel.app/preview.png"
  />

  {/* Structured Data (JSON-LD) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "M Mamoon Khaliq",
      url: "https://mamoon-dev.vercel.app/",
      image: "https://mamoon-dev.vercel.app/profile.jpg", // Replace with your actual image
      jobTitle: "MERN Stack & Full Stack Developer",
      description:
        "MERN Stack Developer specializing in React, Next.js, Node.js, Express.js, MongoDB, Supabase, and scalable web applications.",
      knowsAbout: [
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Supabase",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "REST API",
      ],
      sameAs: [
        "https://github.com/itzMK678",
        "linkedin.com/in/mamoon-khaliq-2592ba336",
      ],
    })}
  </script>
</Helmet>
 {/* // real code */}
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
                    <p>Full-Stack Web developer</p>
                    <p>
                      <i className="fa-solid fa-location-pin"></i> Lahore, Pakistan
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
    </>
  )
}

export default Test