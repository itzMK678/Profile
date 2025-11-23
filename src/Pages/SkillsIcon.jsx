import { useEffect, useRef } from "react";
import "../components/Box.css";

const SkillsIcon = () => {
  const trackRef = useRef(null);

  const skills = [
    { name: "C++", icon: "💻" },
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React.js", icon: "⚛️" },
    { name: "Redux", icon: "📦" },
    { name: "Git", icon: "🔧" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
  ];

  // duplicate array for infinite loop
  const infiniteSkills = [...skills, ...skills];

  useEffect(() => {
    const track = trackRef.current;

    let scrollAmount = 0;

    const animate = () => {
      scrollAmount += 1;

      // Reset when fully scrolled through 1st list
      if (scrollAmount >= track.scrollWidth / 2) {
        scrollAmount = 0;
      }

      track.style.transform = `translateX(-${scrollAmount}px)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div style={{ marginBottom: "20px", width: "100%" }}>
      <p className="skills-heading">My Skills</p>

      <div className="skills-container">
        <div className="skills-slider">
          <div className="skills-track infinite" ref={trackRef}>
            {infiniteSkills.map((skill, index) => (
              <div className="skill-box" key={index}>
                <div className="skill-icon-wrapper">{skill.icon}</div>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsIcon;
