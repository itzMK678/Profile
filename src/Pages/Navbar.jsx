import React from 'react'
import image from "../assets/Logo.png"

const Navbar = () => {
  return (
    
    <>
    <div className="Nav" style={{display:"flex",backgroundColor:"#8c21d3ff",height:"70px",justifyContent:"space-between",padding:'20px',}}>
    <div id="image" style={{backgroundImage: `url(${image})`, backgroundSize: "cover",backgroundPosition: "center",backgroundRepeat: "no-repeat",width: "60px",      height: "90px" }}></div>
    <div id="nav-opt" style={{display:"flex"}}>
        {/* <i class="fa-solid fa-lightbulb"></i> */}
       <a href="Resume.pdf" download>  <button onMouseEnter={(e) => {
      e.target.style.backgroundColor = "#ad3df8ff";
      e.target.style.color = "white";
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = "white";
      e.target.style.color = "#8c21d3ff";
    }}
   style={{ height: "40px", width: "100px", borderRadius: "8px", border: "1px solid white", marginTop: "18px" ,cursor:"pointer" }}
>Download CV</button>
</a>
             </div>
        </div>
    
    </>
  )
}
  
export default Navbar