import React from 'react'
import Navbar from '../Components/Navbar'
import Main  from '../Components/Main'
import Img from '../Images/Homeimg.jpg'
import Trip from '../Components/Trip'
// import Footer from '../Components/Footer'
// import Contact from './Contact'

export default function Home() {
  return (
    <div>
    <Navbar/>
    <Main clName="main" mainimg={Img} title="Travel with no regrets" text="Plan your next Journey"
    btntext="Plan with Us" url="/" btnclass="show"/>
    <Trip/>
    {/* <Contact/> */}
    {/* <Footer/> */}
    </div>
  )
}
