import React, { useState } from "react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div id="About" className="w-full flex flex-col ">
      <p className="text-[#8c21d3] text-[16px] ">Introduction</p>

      <div
        id="about"
        className="relative overflow-hidden w-full rounded-[14px] bg-[#2d2d2dcc] p-5 text-[18px]  leading-[1.8] text-[#727272]
                   md:p-[18px] md:text-[16px] md:leading-[1.7]
                   sm:rounded-xl sm:p-4 sm:text-[15px]
                   max-[480px]:rounded-[10px] max-[480px]:p-[14px] max-[480px]:text-[14px] max-[480px]:leading-[1.6]
                   max-[360px]:p-3 max-[360px]:text-[13px]
                   max-[320px]:p-[10px] max-[320px]:text-[12px] max-[320px]:leading-[1.5]"
        style={{
          maxHeight: isExpanded ? "1200px" : "350px",
          transition: "max-height 0.5s ease",
        }}
      >
        <p className="mb-2">
          Hi, I'm{" "}
          <strong className="text-[#c1c1c1]">M Mamoon Khaliq</strong>, a
          passionate{" "}
          <strong className="text-[#F0F2F5]">
            MERN Stack & Full Stack Developer
          </strong>{" "}
          with hands-on experience building scalable, responsive, and
          high-performance web applications. I specialize in developing modern
          frontend interfaces with React and Next.js while building robust
          backend systems using Node.js, Express.js, MongoDB, MySQL, and
          Supabase.
        </p>

        <p className="mb-2">
          <strong className="text-[#F0F2F5]">Education:</strong> Bachelor's in
          Computer System Engineering (2023–2027) at The Islamia University of
          Bahawalpur.
        </p>

        <p className="mb-2">
          <strong className="text-[#c1c1c1]">Programming Languages:</strong>{" "}
          JavaScript (ES6+), Python, SQL, C++, HTML5, and CSS3.
        </p>

        <p className="mb-2">
          <strong className="text-[#c1c1c1]">Technical Skills:</strong> React.js,
          Next.js, Node.js, Express.js, MongoDB, MySQL, Supabase, RESTful APIs,
          JWT Authentication, API Integration, Tailwind CSS, GSAP, Git/GitHub,
          Socket.IO, Stripe, Mailjet, Firebase, and Postman.
        </p>

        <p className="mb-2">
          <strong className="text-[#c1c1c1]">Additional Expertise:</strong>{" "}
          Python Automation, Data Mining, Web Scraping, Data Collection, Data
          Cleaning, Pandas, BeautifulSoup, Selenium,
          Object-Oriented Programming (OOP), Data Structures & Algorithms, MVC
          Architecture, Database Design, and Responsive Web Development.
        </p>

        <p>
          <strong className="text-[#c1c1c1]">Experience:</strong> Built multiple
          full-stack applications including authentication systems, AI-powered
          tools, blogging platforms, event management systems, tourism websites,
          and payment-integrated web applications. Currently seeking a Backend
          or Full Stack Developer internship where I can contribute to scalable
          software solutions while continuously expanding my technical
          expertise.
        </p>

        <div className="absolute bottom-0 right-0 z-10">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 w-[150px] cursor-pointer rounded-br-[14px] bg-[#8c21d3] px-5 py-2.5 text-[#F0F2F5] transition-colors hover:bg-[#9d38e5]"
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;