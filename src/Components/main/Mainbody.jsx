import React from 'react'
import "./mainbody.css"
import HomeSection from './Home/HomeSection'
import AboutSection from './About/AboutSection'
import SkillsSection from './Skills/SkillsSection'
import ProjectsSection from './Projects/ProjectsSection'
import ContactsSection from './Contacts/ContactsSection'


export default function MainBody() {
  return (
    <>

        <div className="home">
            <HomeSection/>
        </div>
        
        <div className="about">
          <AboutSection/>
        </div>

        <div className="skills">
          <SkillsSection/>
        </div>

        <div className="projects">
          <ProjectsSection/>
        </div>

        <div className="contacts">
          <ContactsSection/>
        </div>

        
    </>
  )
}
