import React from "react";

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

  const levelStyles = {
    Basic:
      "bg-red-500/20 text-red-500 border border-red-500/30",
    Intermediate:
      "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    Advanced:
      "bg-green-500/20 text-green-400 border border-green-500/30",
  };

  return (
    <div className="w-full max-w-[950px] font-sans lg:w-[90%] md:w-[98%] md:p-4 sm:w-[94%] sm:p-2">
      <div>
        <h2 className="my-6 text-center text-xl font-light text-gray-300 transition hover:text-purple-500 sm:text-base">
          My Skills Journey
        </h2>

        <div className="relative mr-4 pl-10 before:absolute before:left-[30px] before:top-0 before:bottom-0 before:w-px before:bg-purple-500 sm:pl-8 sm:before:left-5">
          {skillsOBJ.map((skill, index) => (
            <div
              key={index}
              className="relative mb-12 h-auto pl-10 sm:mb-8 sm:pl-8"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[15px] top-2 h-2.5 w-2.5 rounded-full bg-purple-500"></div>

              {/* Card */}
              <div className="w-fit rounded-xl border border-purple-500/20 bg-[#2d2d2dcc] p-6 transition hover:border-purple-500 md:p-4">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-[25px] font-normal text-purple-500 md:text-lg sm:text-[18px]">
                    {skill.title}
                  </h3>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                      levelStyles[skill.level]
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>

                <p className="-mt-2 text-[13px] text-gray-400 opacity-80">
                  {skill.date}
                </p>

                <p className="mt-2 text-[45px] leading-6 text-gray-300 md:text-[16px]">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;