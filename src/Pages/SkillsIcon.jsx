import { useState, useEffect } from "react";
import "../components/Box.css";

const SkillsIcon = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const visibleSlides = 3;
  const boxWidth = 200;
  const gap = 10;
  const slideWidth = boxWidth + gap;

  const skills = [
    { name: "C++", icon: "💻" },
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript (ES6+)", icon: "⚡" },
    { name: "React.js", icon: "⚛️" },
    { name: "Redux", icon: "📦" },
    { name: "React Router", icon: "🛣️" },
    { name: "Canvas", icon: "🖼️" },
    { name: "Git", icon: "🔧" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Mongoose", icon: "📘" },
    { name: "Next.js", icon: "✨" },
    { name: "Axios", icon: "📡" },
    { name: "DBMS", icon: "🗄️" },
    { name: "SQL", icon: "📊" },
    { name: "Relational Algebra", icon: "➗" },
    { name: "MIPS Assembly", icon: "⚙️" },
    { name: "Verilog HDL", icon: "🔌" },
    { name: "Digital Logic (RTL)", icon: "📐" }
  ];

  const totalSlides = skills.length - visibleSlides + 1;

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlay, totalSlides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  return (
    <>
      <div  style={{backgroundColor:"white", marginBottom: "15px", width:"fit-content "}}>
        <p className="skills-heading">My Skills</p>

        <div className="skills-container">
          <div className="skills-slider">
            <div
              className="skills-track"
              style={{
                transform: `translateX(-${currentIndex * slideWidth}px)`,
                width: `${skills.length * slideWidth}px`,
              }}
            >
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-box"
                  onMouseOver={() => goToSlide(index)}
                >
                  <div className="skill-icon-wrapper">
                    <div className="skill-icon">{skill.icon}</div>
                  </div>

                  <div className="skill-content">
                    <h3 className="skill-name">{skill.name}</h3>
                  </div>

                  <div className="skill-border"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsIcon;
