import React from 'react'
import './Main.css'





const Main = (props) => {
  return (
    <>
    <div>
      <div className={props.clName}>
        <img src={props.mainimg} alt=''/>
      </div>
    </div>
    <div className='maintext'>
        <h1 className='heading'>{props.title}</h1>
        <p className='para'>{props.text}</p>
        <a href={props.url} className={props.btnclass}>{props.btntext}</a>
    </div>
    </>
  )
}

export default Main
