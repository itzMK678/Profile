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

    const whatsappMessage = `
*New Portfolio Inquiry*

Name: ${message.name}
Email: ${message.email}
Phone: ${message.phone}
Subject: ${message.subject}

Message:
${message.messageText}
`;

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
        <div className="bg-[#242424] rounded-lg w-[95%] max-w-[1000px] mx-auto mt-[30px] p-5 flex flex-col items-center">
          <div className="flex flex-row justify-evenly items-start gap-5 w-full p-[20px_10px_10px_10px] flex-wrap">
            <div className="flex flex-col gap-[15px] w-full max-w-[400px] items-start">
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

              <button className="w-[150px] h-[35px] mt-[10px] bg-[#8c21d3] rounded-md text-[#c1c1c1] text-[15px] font-[200] cursor-pointer">
                Send now
              </button>
            </div>

            <div className="w-full max-w-[390px]">
              <textarea
                name="messageText"
                placeholder="Message for me"
                rows="6"
                onChange={handleChange}
                className="w-full h-[225px] bg-transparent border border-[#8c21d3] rounded p-[5px] text-[#8c21d3] text-[14px] resize-none outline-none focus:text-white focus:border-2"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contactbox;