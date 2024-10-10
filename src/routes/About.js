import React from 'react'
import CustomNavbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <>
      <CustomNavbar />
      <HeroImg2 heading="ABOUT." text="I'm a friendly full stack devloper." />
      <AboutContent />
      <Footer />
    </>
  )
}

export default About