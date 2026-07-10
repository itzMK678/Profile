import React from 'react'
import { Helmet } from "react-helmet-async";
import Contactbox from'../Pages/Contactbox'
import Contact from '../components/Contact'
const Details = () => {
  return (
    <>
    <Helmet>
    <title>Details | M Mamoon Khaliq</title>

    <meta
        name="description"
        content="Get in touch with M Mamoon Khaliq for freelance work, internships, collaborations, or full-stack development projects."
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
    <Contact/>
    <Contactbox/>
   
    </>
  )
}

export default Details