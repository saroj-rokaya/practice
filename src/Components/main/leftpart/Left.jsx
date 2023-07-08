import React from 'react'
import "./left.css"
import logo from './logo.png'
import "./center.css";
export default function Left() {
  return (
    
<div className="photocontainer">
<img src={logo} className="photo" alt="image" />
<div className="intro">
   <p className="center">Its</p>
   <p className="center">me</p> 
  <p className="center">Saroj Kumar Rokaya</p>
  </div>
</div>    
  )
}
