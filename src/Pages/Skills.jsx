import React from "react";

import "../components/Box.css"
const Skills = () => {
 const skillsOBJ = [
  {
    title: "MERN Stack Development",
    date: "2024 - Present",
    description:
      "Developing full-stack applications using React, Node.js, Express.js, MongoDB, and REST APIs with authentication, CRUD operations, and scalable architecture.",
    level: "Advanced",
  },
  {
    title: "React.js & Next.js",
    date: "2024 - Present",
    description:
      "Building responsive and interactive web applications using React Hooks, Context API, Next.js, reusable components, routing, and performance optimization.",
    level: "Advanced",
  },
  {
    title: "Backend Development",
    date: "2024 - Present",
    description:
      "Creating RESTful APIs with Node.js and Express.js, implementing JWT authentication, API integration, file uploads, and backend business logic.",
    level: "Intermediate",
  },
  {
    title: "Database Systems",
    date: "2024 - Present",
    description:
      "Working with MongoDB, MySQL, Supabase, and Firebase for database design, CRUD operations, SQL queries, joins, and authentication.",
    level: "Intermediate",
  },
  {
    title: "JavaScript (ES6+)",
    date: "2023 - Present",
    description:
      "Strong knowledge of modern JavaScript including async/await, promises, closures, destructuring, array methods, modules, and DOM manipulation.",
    level: "Advanced",
  },
  {
    title: "Python & Automation",
    date: "2024 - Present",
    description:
      "Using Python for automation, web scraping, data processing, and scripting with Pandas, BeautifulSoup, Selenium, and data cleaning techniques.",
    level: "Intermediate",
  },
  {
    title: "Data Mining & Machine Learning",
    date: "2024 - Present",
    description:
      "Experience with data mining, preprocessing, feature extraction, TF-IDF, Logistic Regression, K-Nearest Neighbors (KNN), K-Means Clustering, and basic machine learning workflows using Python libraries.",
    level: "Basic",
  },
  {
    title: "UI Development & Animations",
    date: "2024 - Present",
    description:
      "Designing responsive interfaces using Tailwind CSS, GSAP, CSS3, Flexbox, Grid, and modern UI/UX practices.",
    level: "Advanced",
  },
  {
    title: "Developer Tools",
    date: "2024 - Present",
    description:
      "Using Git, GitHub, Postman, Vercel, Stripe, Mailjet, Socket.IO, and third-party API integrations for modern web development.",
    level: "Intermediate",
  },
  {
    title: "Computer Science Fundamentals",
    date: "2023 - Present",
    description:
      "Strong understanding of Object-Oriented Programming (OOP), Data Structures & Algorithms, MVC Architecture, Database Design, and software engineering principles.",
    level: "Intermediate",
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
