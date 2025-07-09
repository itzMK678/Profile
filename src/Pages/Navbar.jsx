import React from 'react'
import image from "../assets/Logo.png"

const Navbar = () => {
  return (
    
    <>
    <div className="Nav" style={{display:"flex",backgroundColor:"#a273c2",height:"70px",justifyContent:"space-between",padding:'20px',}}>
    <div id="image" style={{backgroundImage: `url(${image})`, backgroundSize: "cover",backgroundPosition: "center",backgroundRepeat: "no-repeat",width: "60px",      height: "90px" }}></div>
    <div id="nav-opt" style={{display:"flex"}}>
        {/* <i class="fa-solid fa-lightbulb"></i> */}
       <a href="Resume.png" download>  <button style={{ height: "40px", width: "100px", borderRadius: "8px", border: "1px solid white", marginTop: "18px" }}
>Download CV</button>
</a>
             </div>
        </div>
    
    </>
  )
}
  
export default Navbar