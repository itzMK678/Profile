import React from 'react'
import { Helmet } from "react-helmet-async";
import LatestProj from '../components/LatestProj'
import Projects from '../Pages/Projects'
const ProjectPage = () => {
  return (
    <>
    <Helmet>
    <title>Projects | M Mamoon Khaliq</title>

    <meta
        name="description"
        content="Explore MERN Stack, React, Next.js, and Full Stack projects built by M Mamoon Khaliq."
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
    <LatestProj/>
    <Projects/>
    
    
     </>
  )
}

export default ProjectPage;