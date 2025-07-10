import React from 'react';
import "../components/Box.css"


const Contactbox = () => {
  return (
    <>
    <div id="contact-me" style={{ marginTop:"30px",}}>
      <div className="abo"  style={{ display: "flex" ,margin:"20px",gap: "10px",paddingTop:"20px"}} >
        <div className="input-box" style={{marginTop:'20px' }}>
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
