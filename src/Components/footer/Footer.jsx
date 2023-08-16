import React from "react";
import "./footer.css";
import image from './image.png'


export default function Footer() {
  return (
    <>
      <div className="footercontainer">

        <div className="left-footer-container">

          <div className="footer-headers">
            <div className="left-right-footer-header">
              <a href={image}>
              <img src={image} id="footer-image" alt="image" />
              </a>
              <p id="name">saroj Kumar Rokaya</p>
            </div>
            <div className="left-right-footer-header">
              <p id="link-hdr">Links</p>
            </div>
          </div>

          <div className="footer-bodies">

            <div className="left-right-footer-body">
              <p className="footerintro">
              Greetings! <br /> <br />
                I'm Saroj Kumar Rokaya <br /> <br />
                A passionate Web Developer with a love for all things creative. <br /> <br />
                Let's collaborate and bring ideas to life! 🌟
              </p>

            </div>

            <div className="left-right-footer-body">
              <ol className="lists">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
              </ol>
            </div>
          </div>

        </div>
        
        <div className="right-footer-container">

          <div className="footer-contact-header">
            <div className="follow-me-section">
              Follow me
            </div>
            <div className="contact-section">
              Contacts
            </div>
          </div>

          <div className="footer-contact-body">
            <div className="follow-me-body">
            <ol className="follow-me-lists">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Linkedin</li>
                <li>Github</li>
              </ol>
            </div>


            <div className="contact-section-body">
            <ol className="contact-lists">
                <li>Ph:-<span>9849925392</span></li>
                <li>Email:-<span className="email">rokayasaroj188@gmail.com</span></li>
                
              </ol>
            </div>
          </div>
          

        </div>

      </div>
             

      {/* copyright footer section */}
      <div className="copyright">
        <p className="copyright-footer">&copy;Copyright 2023, All right reserved || Saroj Kumar Rokaya</p>
      </div>

    </>
  );
}
