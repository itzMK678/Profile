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
    if (!track) return;

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

        gsap.set(track, { x });
      }
    };

    gsap.ticker.add(update);

    const draggable = Draggable.create(track, {
      type: "x",
      edgeResistance: 0.85,
      inertia: true,

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
    <div className="w-full mb-6 overflow-hidden">
      <p className="mb-3 text-[16px] text-[#8c21d3]">
        My Skills
      </p>

      <div className="w-full overflow-hidden rounded-xl">
        <div
          ref={trackRef}
          className="flex w-max select-none whitespace-nowrap cursor-grab active:cursor-grabbing"
        >
          {infiniteSkills.map((skill, index) => (
            <div
              key={index}
              className="
                mr-3
                flex
                h-[100px]
                min-w-[110px]
                flex-col
                items-center
                justify-center
                rounded-xl
                bg-[#2d2d2dcc]
                p-3
                text-center
                transition-all
                duration-300
                hover:bg-[#8c21d3]

                sm:min-w-[140px]

                md:h-[120px]
                md:min-w-[160px]

                lg:h-[110px]
                lg:min-w-[170px]
              "
            >
              <div className="mb-2 text-3xl">
                {skill.icon}
              </div>

              <h3 className="text-sm text-white">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsIcon;