import React from 'react'
import CustomNavbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'

const Contact = () => {
  return (
    <>
      <CustomNavbar />
      <HeroImg2 heading="CONTACT." text="Let's have a chat." />
      <Form />
      <Footer />
    </>
  )
}

export default Contact