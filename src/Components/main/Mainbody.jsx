import React from 'react'
import "./mainbody.css"
import Homesection from './Home/Homesection'
import Aboutsection from './About/Aboutsection'

export default function Mainbody() {
  return (
    <>

        <div className="home">
            <Homesection/>
        </div>
        
        <div className="about">
          <Aboutsection/>
        </div>


    

    
    </>
  )
}
