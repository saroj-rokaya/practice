import React from 'react'
import "./homesection.css"
import logo from './logo.png'
import "./center.css"
export default function Left() {
  return (
    
<div className="homecontainer">


  <div className="img">
   <a href={logo}>
   <img src={logo} className="photo" alt="image" />
   </a>
  </div>

  <div className="introcontainer">

    <p className="welcome">
    Welcome to <span className="myweb">my website.</span>
    </p>

    <p className="intro">
    I am a <span className="developer">frontend developer.</span>
    </p>
  </div>


</div>  
  
  )
}
