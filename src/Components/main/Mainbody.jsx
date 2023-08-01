import React from 'react'
import "./mainbody.css"
import Homesection from './Home/Homesection'
import Aboutsection from './About/Aboutsection'
import Skillssection from './Skills/Skillssection'
import Projectssection from './Projects/Projectssection'
import ContactsSection from './Contacts/ContactsSection'


export default function Mainbody() {
  return (
    <>

        <div className="home">
            <Homesection/>
        </div>
        
        <div className="about">
          <Aboutsection/>
        </div>

        <div className="skills">
          <Skillssection/>
        </div>

        <div className="projects">
          <Projectssection/>
        </div>

        <div className="contacts">
          <ContactsSection/>
        </div>

        
    </>
  )
}
