import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const SkillsIcon = () => {
  const trackRef = useRef(null);

  const skills = [
    { name: "C++", icon: "💻" },
    { name: "Python", icon: "🐍" },
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
    { name: "MySQL", icon: "🗄️" },
    { name: "Supabase", icon: "🟩" },
    { name: "Firebase", icon: "🔥" },
    { name: "Git", icon: "🔧" },
    { name: "GitHub", icon: "🐙" },
    { name: "REST API", icon: "🔗" },
    { name: "JWT", icon: "🔐" },
    { name: "Socket.IO", icon: "📡" },
    { name: "GSAP", icon: "✨" },
    { name: "Postman", icon: "📬" },
    { name: "Selenium", icon: "🤖" },
    { name: "Pandas", icon: "🐼" },
    { name: "BeautifulSoup", icon: "🥣" },
  ];

  const infiniteSkills = [...skills, ...skills];

  useEffect(() => {
    const track = trackRef.current;

    let x = 0;
    let dragging = false;

    const speed = 1;

    const update = () => {
      if (!dragging) {
        x -= speed;

        const halfWidth = track.scrollWidth / 2;

        if (Math.abs(x) >= halfWidth) {
          x = 0;
        }

        gsap.set(track, {
          x,
        });
      }
    };

    gsap.ticker.add(update);

    const draggable = Draggable.create(track, {
      type: "x",
      edgeResistance: 0.85,
      inertia: true, // Remove this if you don't have InertiaPlugin

      onPress() {
        dragging = true;
      },

      onDrag() {
        x = this.x;
      },

      onRelease() {
        x = this.x;
        dragging = false;
      },
    })[0];

    return () => {
      gsap.ticker.remove(update);
      draggable.kill();
    };
  }, []);

  return (
    <div className="w-full mb-5">
      <p className="mt-2 mb-2.5 text-[16px] text-purple-500">
        My Skills
      </p>

      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[240px]
          justify-start
          overflow-hidden
          sm:max-w-[300px]
          md:max-w-[370px]
          lg:max-w-[650px]
          xl:max-w-[860px]
        "
      >
        <div className="w-min">
          <div
            ref={trackRef}
            className="flex whitespace-nowrap will-change-transform cursor-grab active:cursor-grabbing select-none"
          >
            {infiniteSkills.map((skill, index) => (
              <div
                key={index}
                className="
                  mr-2
                  flex
                  h-25
                  min-w-[140px]
                  flex-col
                  items-center
                  rounded-xl
                  bg-[#2d2d2dcc]
                  p-3.5
                  text-center
                  shadow-lg
                  transition-all
                  duration-300
                  hover:bg-purple-600

                  md:h-[120px]
                  md:w-[100px]

                  lg:mr-2.5
                  lg:h-25
                  lg:min-w-[200px]
                "
              >
                <div className="mb-2 text-2xl md:text-[28px] lg:text-[32px]">
                  {skill.icon}
                </div>

                <h3 className="pb-6 text-[13px] text-white md:text-lg lg:text-base">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsIcon;