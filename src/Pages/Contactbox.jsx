import React , {useState} from 'react';
import "../components/Box.css";

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
      `https://wa.me/923326325661?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  return (
   
    <>
      <form onSubmit={handleSubmit}>
        <div id="contact-me">
       <div className="abo">
        <div className="input-box">
          <input name="name" type="text" placeholder="Name" onChange={handleChange} />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} />
          <input name="phone" type="number" placeholder="Phone Number" onChange={handleChange} />
          <input name="subject" type="text" placeholder="Subject" onChange={handleChange} />
          <button>Send now</button>
        </div>
        <div className="msg">
          <textarea name="messageText" id="msg" placeholder="Message for me" rows="6" onChange={handleChange} />
        </div>
        </div>
         </div>
        </form>
      </>
   
  );
};

export default Contactbox;
