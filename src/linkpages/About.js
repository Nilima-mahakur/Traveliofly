import React from 'react'
import Navbar from '../Components/Navbar'
import Main  from '../Components/Main'
import AboutImg from '../Images/about1.jpg'
import Aboutus from '../Components/Aboutus'
import Footer from '../Components/Footer'

const About = (props) => {
  return (
    <>
      <Navbar/>
      <Main clName="mainabout" mainimg={AboutImg}   btnclass="hide"/>
      <Aboutus/>
    <Footer/>
    </>
  )
}

export default About

