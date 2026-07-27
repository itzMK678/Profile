import React from 'react'
import { Helmet } from "react-helmet-async";
import Skills from '../Pages/Skills'
import SkillsIcon from '../Pages/SkillsIcon'
import About from"../components/About"
const Aboutpage = () => {
  return (
    <>
     <Helmet>
         <title>About | M Mamoon Khaliq</title>

        <meta
        name="description"
        content="Learn about M Mamoon Khaliq, a Full Stack MERN Developer with experience building modern web applications."
    />
        <meta
          name="keywords"
          content="MERN Developer, React Developer, Full Stack Developer, Pakistan"
        />
        <meta property="og:title" content="M Mamoon Khaliq | MERN Stack Developer" />

<meta
    property="og:description"
    content="Portfolio showcasing React, Node.js, Next.js, MongoDB, Supabase, and full-stack web development projects."
/>

<meta property="og:type" content="website" />

<meta property="og:url" content="https://mamoon-dev.vercel.app/" />

<meta property="og:image" content="https://yourportfolio.com/preview.png" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="M Mamoon Khaliq | MERN Stack Developer" />
<meta
    name="twitter:description"
    content="Portfolio of MERN Stack Developer M Mamoon Khaliq."
/>
<meta name="twitter:image" content="https://yourportfolio.com/preview.png" />
      </Helmet>
      <About/>
   <SkillsIcon/> 
    <Skills/>
    </>
  )
}

export default Aboutpage