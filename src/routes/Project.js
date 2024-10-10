import React from 'react'
import CustomNavbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingCards from '../components/PricingCards'
import Work from '../components/Work'

const Project = () => {
  return (
    <>
      <CustomNavbar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works" />
      <Work />
      <PricingCards />
      <Footer />
    </>
  )
}

export default Project