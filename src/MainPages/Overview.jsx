import React from 'react'
import About from '../components/About'
import LatestProj from '../components/LatestProj'
import { Helmet } from "react-helmet-async";
import SkillsIcon from '../Pages/SkillsIcon'
import Contact from '../components/Contact'
import Contactbox from '../Pages/Contactbox'
const Overview = () => {
  return (
    <>
    <Helmet>
    <title>Overview | M Mamoon Khaliq</title>

    <meta
        name="description"
        content="Learn about M Mamoon Khaliq, A complete overview about work experience a Full Stack MERN Developer with experience building modern web applications."
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
    <LatestProj/>
    <SkillsIcon/>
    <Contact/>
    <Contactbox/>
    </>
  )
}

export default Overview