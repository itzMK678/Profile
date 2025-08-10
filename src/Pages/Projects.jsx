import React from 'react'
import BlogGen from "../assets/BlogGen.png"
import Brickbreaker from "../assets/Brick-breaker.png"
import CaraWeb from "../assets/caraweb.png"
import MrAPI from "../assets/MrAPI.png"
import Samsung from "../assets/Samsung.png"
import Snakegame from "../assets/Snakegame.png"
import Tourism from "../assets/Tourism.png"
import Login from "../assets/Login.png"
import "../components/Box.css"
import ProjectsCard from '../components/ProjectsCard'


const ProjectData=[ 
     {
         image: MrAPI,
        name: ' Api Tester',
        Technologies:' HTML , CSS , REACT ',
        type: ' Website',
        link: "https://api-tester-promax.vercel.app/"
    },
    {
         image: BlogGen,
        name: ' Blog-Gpt',
        Technologies:' HTML , CSS , REACT ',
        type: ' Website',
        link: 'https://blog-gpt-omega.vercel.app/'
    },{
         image: CaraWeb,
         name: ' E-commerce website',
        type:' Website',
        Technologies:' HTML , CSS ,  Js ',
        link: 'https://itzmk678.github.io/ecommerce-web/'},

    {
        image: Login,
        name: ' Login Page',
        type:' Website',
         Technologies:' HTML , CSS , Js ',
        link: 'https://itzmk678.github.io/login-page/'
    },
 {
        image: Tourism,
        name: ' Tourism Web',
        type:' Website',
         Technologies:' HTML , CSS ,  Js ',
        link: 'https://itzmk678.github.io/tourist/'
    },
     {
        image: Samsung,
        name: ' Samsung Web',
        type:' Website',
        Technologies:' HTML , CSS , Js ',
        link: 'https://itzmk678.github.io/samsung/'
    },
     {
        image: Snakegame,
        name: ' Snake',
        Technologies:' HTML , CANVAS',
        type: ' Game',
        link: 'https://itzmk678.github.io/snake-game/'
    },
    {
        image: Brickbreaker,
        name: ' Brick-Breaker',
        Technologies:' HTML , CANVAS',
        type: ' Game',
        link: 'http://itzmk678.github.io/brick-breaker/'
    }
]



const Projects = () => {
  return (
    <>
   <p style={{color:"#a432f0ff"}}> Projects</p>
    <div className="projects" style={{ display: "flex", flexWrap: "wrap", gap: "10px", width: "100%", justifyContent: "center" ,}}>
   {ProjectData.map((item,index) =>(
    <ProjectsCard key={index} image={item.image}  name={item.name} type={item.type} link={item.link} Technologies={item.Technologies}/>
   ))}
    </div>
     </>
  )
}

export default Projects