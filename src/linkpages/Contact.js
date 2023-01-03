import React from 'react'
import Navbar from '../Components/Navbar'
import Main  from '../Components/Main'
import ContactImg from '../Images/main2.jpg'
import Footer from '../Components/Footer'
import Contactform from '../Components/Contactform'

const Contact = () => {
  return (
    <div>
     <Navbar/>
     <Main clName="mainabout" mainimg={ContactImg}   btnclass="hide"/>
     <Contactform/>
     <Footer/>
    </div>

  )
}

export default Contact
