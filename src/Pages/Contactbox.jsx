import React from 'react';
import "../components/Box.css"


const Contactbox = () => {
  return (
    <>
    <div id="contact-me" >
      <div className="abo"  style={{ display: "flex" ,marginTop:"30px",gap: "10px"}} >
        <div className="input-box" style={{ width:'50%',display: "flex", gap: "10px",marginTop:'20px' }}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Phone Number" />
          <input type="text" placeholder="Subject" />
          <button>Send now</button>
        </div>
        <div className="msg" >
          <textarea id="msg" style={{ marginTop:'20px' }}placeholder="Message for me" rows="6" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Contactbox;
