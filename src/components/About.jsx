import React, { useState } from "react";
import "./Box.css";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div id="About" style={{ position: "relative" }}>
        <p
          style={{
            color: "#8c21d3ff",
            fontSize: "14px",
            opacity: "70%",
          }}
        >
          Introduction
        </p>

        <div
          id="about"
          style={{
            overflow: "hidden",
            height: isExpanded ? "auto" : "350px",
            transition: "all 0.4s ease",
          }}
        >
          <p> Hi, I'm{" "} <strong style={{ color: "#c1c1c1" }}> M Mamoon Khaliq </strong> , a passionate{" "} <strong style={{ color: "#F0F2F5" }}> MERN Stack & Full Stack Developer </strong>{" "} with hands-on experience building scalable, responsive, and high-performance web applications. I specialize in developing modern frontend interfaces with React and Next.js while building robust backend systems using Node.js, Express.js, MongoDB, MySQL, and Supabase. </p> <p> <strong style={{ color: "#F0F2F5" }}>Education:</strong>{" "} Bachelor's in Computer System Engineering (2023–2027) at The Islamia University of Bahawalpur. </p> <p> <strong style={{ color: "#c1c1c1" }}>Programming Languages:</strong>{" "} JavaScript (ES6+), Python, SQL, C++, HTML5, and CSS3. </p> <p> <strong style={{ color: "#c1c1c1" }}>Technical Skills:</strong>{" "} React.js, Next.js, Node.js, Express.js, MongoDB, MySQL, Supabase, RESTful APIs, JWT Authentication, API Integration, Tailwind CSS, GSAP, Git/GitHub, Socket.IO, Stripe, Mailjet, Firebase, and Postman. </p> <p> <strong style={{ color: "#c1c1c1" }}>Additional Expertise:</strong>{" "} Python Automation, Data Mining, Web Scraping, Data Collection, Data Cleaning, Pandas, BeautifulSoup, Selenium, Object-Oriented Programming (OOP), Data Structures & Algorithms, MVC Architecture, Database Design, and Responsive Web Development. </p> <p> <strong style={{ color: "#c1c1c1" }}>Experience:</strong> Built multiple full-stack applications including authentication systems, AI-powered tools, blogging platforms, event management systems, tourism websites, and payment-integrated web applications. Currently seeking a Backend or Full Stack Developer internship where I can contribute to scalable software solutions while continuously expanding my technical expertise. </p>
        </div>
<div style={{
    position: "absolute",
    right: "-9%",
    bottom: "1px",
    transform: "translateX(-50%)",
    zIndex: 10,
  }}>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            width: "150px",
            marginTop: "15px",
            backgroundColor: "#8c21d3",
            color: "#F0F2F5",
            border: "none",
            padding: "10px 20px",
           borderBottomRightRadius: "14px",
            cursor: "pointer",
          }}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
        </div>
      </div>
    </>
  );
};

export default About;