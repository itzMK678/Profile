import React from "react";
import Box from "./Box";

const dataList = [
  {
    name: "Linkedin",
    icon: <i className="fa-brands fa-linkedin-in"></i>,
    link: "https://www.linkedin.com/in/mamoon-khaliq-2592ba336",
  },
  {
    name: "Gmail",
    icon: <i className="fa-solid fa-envelope"></i>,
    link: "mailto:m.mamoon.khaliq@gmail.com",
  },
  {
    name: "Github",
    icon: <i className="fa-brands fa-github"></i>,
    link: "https://github.com/itzMK678",
  },
  {
    name: "Whatsapp",
    icon: <i className="fa-brands fa-whatsapp"></i>,
    link: "https://wa.me/923326325661",
  },
];

const Contact = () => {
  return (
    <>
      <p className="text-[#a432f0ff] text-[16px] ">
        My Socialmedia
      </p>

      <div className="flex flex-wrap justify-around">
        {dataList.map((item, index) => (
          <Box
            key={index}
            name={item.name}
            icon={item.icon}
            link={item.link}
          />
        ))}
      </div>
    </>
  );
};

export default Contact;