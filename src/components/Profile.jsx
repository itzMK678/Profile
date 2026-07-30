import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

import Mypic from "../assets/image.jpeg";

import Overview from "../MainPages/Overview";
import Aboutpage from "../MainPages/Aboutpage";
import ProjectPage from "../MainPages/ProjectPage";
import Details from "../MainPages/Details";

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
    content = <Overview />;
  } else if (active === 2) {
    content = <Aboutpage />;
  } else if (active === 3) {
    content = <ProjectPage />;
  } else if (active === 4) {
    content = <Details />;
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

        <link rel="canonical" href="https://mamoon-dev.vercel.app/" />

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
        <meta
          property="og:site_name"
          content="M Mamoon Khaliq Portfolio"
        />
        <meta property="og:locale" content="en_US" />

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

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "M Mamoon Khaliq",
            url: "https://mamoon-dev.vercel.app/",
            image: "https://mamoon-dev.vercel.app/profile.jpg",
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
              "https://linkedin.com/in/mamoon-khaliq-2592ba336",
            ],
          })}
        </script>
      </Helmet>

      <div className="w-full flex box-border pt-[15px]">
        {/* Left Side */}
        <div className="w-[35%] flex items-center flex-col">
          <p className="text-start bg-red-400 text-[14px] opacity-70">
            Profile
          </p>

          <div className="sticky top-5 z-10 flex flex-col items-center w-[380px] rounded-2xl bg-[#2d2d2dcc] p-5 mb-5 mr-[10px] cursor-pointer">
            <div className="pt-[15px] flex flex-col items-center w-full">
              <div className="mt-[15px] mb-[10px] h-[120px] w-[120px] overflow-hidden rounded-full border-2 border-[#8c21d3]">
                <img
                  src={Mypic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-[18px] text-[#c1c1c1] hover:text-purple-500">
                Mamoon Khaliq
              </p>

              <p className="m-0 text-[16px] text-[#727272] hover:text-purple-500">
                Full-Stack Web developer
              </p>

              <p className="m-0 text-[16px] text-[#727272] hover:text-purple-500">
                <i className="fa-solid fa-location-pin"></i> Lahore,
                Pakistan
              </p>
            </div>

            <div className="mt-[30px] ml-[10px]  w-[290px]">
              <ul className="m-0 list-none p-0">
                {menu.map((c) => (
                  <li
                    key={c.tab}
                    onClick={() => setActive(c.tab)}
                    className={`my-[10px] cursor-pointer border-b border-[#3c3c3c] pb-2 text-[16px] transition-colors duration-300 hover:text-[#a273c2] ${
                      active === c.tab
                        ? "text-[#8c21d3]"
                        : "text-[#c1c1c1]"
                    }`}
                  >
                    {c.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-[65%] mr-[10px]">
          {content}
        </div>
      </div>
    </>
  );
};

export default Test;