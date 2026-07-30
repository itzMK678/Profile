import React, { useState } from "react";
import BlogGen from "../assets/BlogGen.png";
import Brickbreaker from "../assets/Brick-breaker.png";
import CaraWeb from "../assets/caraweb.png";
import MrAPI from "../assets/MrAPI.png";
import Samsung from "../assets/Samsung.png";
import Snakegame from "../assets/Snakegame.png";
import Tourism from "../assets/Tourism.png";
import Login from "../assets/Login.png";
import Cars from "../assets/Cars.png";
import Skills from "../assets/Skills.png";
import Sahara from "../assets/Sahara.png";
import Flappybird from "../assets/FlappyBird.png";
import Luxe from "../assets/LuxeHotel.png";
import McDonald from "../assets/McDonald.png";
import Tour from "../assets/MkTours.png";
import ProjectsCard from "../components/ProjectsCard";

const Category = ["All", "Website", "Tools", "Game"];

const ProjectData = [
  {
    image: Tour,
    name: "Mk Tours",
    Technologies: "Next JS , TAILWIND CSS,Node",
    type: "Website",
    link: "https://my-journey-wine.vercel.app/",
  },
  {
    image: Skills,
    name: "Skills Creative",
    Technologies: "NEXT JS , TAILWIND CSS",
    type: "Website",
    link: "https://skillcreatives-lemon.vercel.app/",
  },
  {
    image: Cars,
    name: "Cars Rally",
    Technologies: "React , TAILWIND CSS",
    type: "Website",
    link: "https://cars-really.vercel.app/",
  },
  {
    image: Sahara,
    name: "Sahara Welfare",
    Technologies: "React JS , TAILWIND CSS",
    type: "Website",
    link: "https://sahara-ecru.vercel.app/",
  },
  {
    image: MrAPI,
    name: "API Tester",
    Technologies: "React JS , TAILWIND CSS , OPENAI API",
    type: "Tools",
    link: "https://api-tester-promax.vercel.app/",
  },
  {
    image: BlogGen,
    name: "Blog-GPT",
    Technologies: "React JS , TAILWIND CSS , OPENAI API",
    type: "Tools",
    link: "https://blog-gpt-omega.vercel.app/",
  },
  {
    image: CaraWeb,
    name: "E-commerce Website",
    Technologies: "HTML , CSS , JS",
    type: "Website",
    link: "https://itzmk678.github.io/ecommerce-web/",
  },
  {
    image: Login,
    name: "Login Page",
    Technologies: "HTML , CSS , JS",
    type: "Website",
    link: "https://itzmk678.github.io/login-page/",
  },
  {
    image: Tourism,
    name: "Tourism Website",
    Technologies: "HTML , CSS , JS",
    type: "Website",
    link: "https://itzmk678.github.io/tourist/",
  },
  {
    image: Samsung,
    name: "Samsung Website",
    Technologies: "HTML , CSS , JS",
    type: "Website",
    link: "https://itzmk678.github.io/samsung/",
  },
  {
    image: Snakegame,
    name: "Snake Game",
    Technologies: "HTML , CANVAS",
    type: "Game",
    link: "https://itzmk678.github.io/snake-game/",
  },
  {
    image: Brickbreaker,
    name: "Brick Breaker",
    Technologies: "HTML , CANVAS",
    type: "Game",
    link: "https://itzmk678.github.io/brick-breaker/",
  },
  {
    image: Flappybird,
    name: "Flappy Bird",
    Technologies: "HTML , CANVAS",
    type: "Game",
    link: "https://itzmk678.github.io/flappy-bird/",
  },
  {
    image: Luxe,
    name: "Luxe Hotel",
    Technologies: "Next JS , TAILWIND CSS,Node",
    type: "Website",
    link: "https://luke-hotel-95dq.vercel.app//",
  },
  {
    image: McDonald,
    name: "McDonald's Website",
    Technologies: "Html , CSS , JS",
    type: "Website",
    link: "https://itzmk678.github.io/mcdonald/",
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? ProjectData
      : ProjectData.filter(
          (project) => project.type === selectedCategory
        );

  return (
    <>
      <p className="text-[#a432f0ff]">Projects</p>

      {/* Category Buttons */}
      <div>
        {Category.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedCategory(item)}
            className={`inline-block w-[70px] text-center m-[10px] p-[10px] rounded-[22px] text-white cursor-pointer border border-[rgb(138,0,230)] ${
              selectedCategory === item
                ? "bg-[#8a00e6]"
                : "bg-black"
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Projects */}
      <div className="flex flex-wrap gap-[10px] w-full justify-center">
        {filteredProjects.map((item, index) => (
          <ProjectsCard
            key={index}
            image={item.image}
            name={item.name}
            type={item.type}
            link={item.link}
            Technologies={item.Technologies}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;