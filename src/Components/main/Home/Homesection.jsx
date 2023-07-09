import React from 'react'
import "./homesection.css"
import logo from './logo.png'
import "./center.css"
export default function Left() {
  return (
    
<div className="homecontainer">


  <div className="img">
    <img src={logo} className="photo" alt="image" />
  </div>

  <div className="introcontainer">

    <p className="welcome">
    Welcome to <span className="myweb">my website.</span>
    </p>

    <p className="intro">
    I am a frontend <span className="developer">developer.</span>
    </p>
  </div>


</div>  
  
  )
}
