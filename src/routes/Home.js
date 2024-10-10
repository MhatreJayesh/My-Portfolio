import React from 'react'
import CustomNavbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import Work from '../components/Work'

const Home = () => {
  return (
    <>
      <CustomNavbar />
      <HeroImg />
      <Work />
      <Footer />
    </>
  )
}

export default Home