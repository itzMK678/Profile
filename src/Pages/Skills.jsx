import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillsOBJ = [
    {
      title: "React Development",
      date: "2024 - Present",
      description:
        "Building modern, interactive user interfaces with React. Creating reusable components, managing state with hooks, and implementing responsive designs for web applications.",
      level: "Intermediate",
    },
    {
      title: "JavaScript ES6+",
      date: "2023 - Present",
      description:
        "Proficient in modern JavaScript including arrow functions, destructuring, async/await, promises, and DOM manipulation. Building dynamic web applications with clean, efficient code.",
      level: "Intermediate",
    },
    {
      title: "HTML5 & Canvas",
      date: "2023 - Present",
      description:
        "Advanced HTML5 markup and semantic structure. Experience with Canvas API for creating interactive graphics, animations, and data visualizations in web browsers.",
      level: "Intermediate",
    },
    {
      title: "CSS3 & Styling",
      date: "2022 - Present",
      description:
        "Responsive web design using CSS3, Flexbox, Grid, animations, and transitions. Creating beautiful, mobile-first designs with modern styling techniques.",
      level: "Advanced",
    },
    {
      title: "C++ & OOP Concepts",
      date: "2022 - Present",
      description:
        "Object-oriented programming fundamentals including classes, inheritance, polymorphism, and encapsulation. Building efficient algorithms and data structures.",
      level: "Basic",
    },
      {
      title:' Learning backend ',
      date: "2025 - Present",
      description:
        "learning Nodejs , expressJs",
      level: "Basic",
    },
  ];

  return (
    <div className="skills-timeline-container">
      <div className="skills-timeline">
        <h2 className="timeline-title">My Skills Journey</h2>
        <div className="timeline-content">
          {skillsOBJ.map((skill, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content-item">
                <div className="skill-header">
                  <h3 className="skill-title">{skill.title}</h3>
                  <span className={`skill-level ${skill.level.toLowerCase()}`}>
                    {skill.level}
                  </span>
                </div>
                <p className="skill-date">{skill.date}</p>
                <p className="skill-description">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
