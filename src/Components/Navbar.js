import React from 'react'
import './Navbar.css'
// import { FaBars, FaCompressArrowsAlt } from "react-icons/fa";
import { Items } from './Items';


export default function Navbar() {

  return (
    <div>
      <nav className='Navbaritems'>
        <h1 className='logo'>Traveliofly</h1>
      
        <ul className='navbarmenu'>
            {Items.map((item, index) => {
                return(
                        <li key ={index}>
                            <a className= {item.clName} href={item.url}>
                                <i className={item.icon}> </i>
                                {item.title}
                            </a>
                        </li>
                 
                  );
                 } )}
           {/* <button>Sign Up</button> */}
        </ul>
      </nav>
    </div>
  )
}



