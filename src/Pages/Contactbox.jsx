import React, { useState } from "react";

const Contactbox = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    messageText: "",
  });

  const handleChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = ` my name is ${message.name} and I want to contact you regarding ${message.subject}. You can reach me at ${message.email} or ${message.phone}. Here is my message: ${message.messageText}`;


    window.open(
      `https://wa.me/923326325661?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p className="text-[16px] mt-5 text-[#8c21d3]">Contact for Queries</p>
        <div className="bg-[#2d2d2dcc] rounded-lg  mx-auto  p-5 flex flex-col justify-items-center">
          <div className="flex
flex-col
lg:flex-row
justify-evenly
items-start
w-full
gap-5">
            <div className="flex flex-col gap-[15px]  w-full my-2 items-start">
              <input
                name="name"
                type="text"
                placeholder="Name"
                onChange={handleChange}
                className="h-10 w-full bg-transparent border border-[#8c21d3] p-[5px] rounded text-[#8c21d3] text-[14px] outline-none focus:text-white focus:border-2"
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                className="h-10 w-full bg-transparent border border-[#8c21d3] p-[5px] rounded text-[#8c21d3] text-[14px] outline-none focus:text-white focus:border-2"
              />

              <input
                name="phone"
                type="number"
                placeholder="Phone Number"
                onChange={handleChange}
                className="h-10 w-full bg-transparent border border-[#8c21d3] p-[5px] rounded text-[#8c21d3] text-[14px] outline-none focus:text-white focus:border-2"
              />

              <input
                name="subject"
                type="text"
                placeholder="Subject"
                onChange={handleChange}
                className="h-10 w-full bg-transparent border border-[#8c21d3] p-[5px] rounded text-[#8c21d3] text-[14px] outline-none focus:text-white focus:border-2"
              />

             </div>

            <div className="w-full my-2 ">
              <textarea
                name="messageText"
                placeholder="Message for me"
                rows="6"
                onChange={handleChange}
                className="w-full h-full min-h-[207px] bg-transparent border border-[#8c21d3] rounded p-[5px] text-[#8c21d3] text-[14px] resize-none outline-none focus:text-white focus:border-2"
              />
            </div>
          </div>
           <button className="min-w-[150px] w-full h-[35px] my-[10px] bg-[#8c21d3] rounded-md text-[#c1c1c1] text-[15px] font-[200] cursor-pointer">
                Send now
              </button>
            
        </div>
      </form>
    </>
  );
};

export default Contactbox;