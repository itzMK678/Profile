import React from 'react';
import "../components/Box.css";

const Contactbox = () => {
  return (
    <div id="contact-me">
      <div className="abo">
        <div className="input-box">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Phone Number" />
          <input type="text" placeholder="Subject" />
          <button>Send now</button>
        </div>
        <div className="msg">
          <textarea id="msg" placeholder="Message for me" rows="6" />
        </div>
      </div>
    </div>
  );
};

export default Contactbox;
