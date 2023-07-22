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
             <img src={image} className="footer-image" alt="image" />
              saroj rokaya
            </div>
            <div className="left-right-footer-header">
              links
            </div>
          </div>

          <div className="footer-bodies">

            <div className="left-right-footer-body">
              <p className="footerintro">
              Greetings! <br /> <br />
                I'm Saroj Kumar Rokaya <br /> <br />
                a passionate Web Developer with a love for all things creative. <br /> <br />
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
            hi
        </div>

      </div>


      <div className="copyright">
        &copy;Copyright 2023, All right reserved || Saroj Kumar Rokaya
      </div>

    </>
  );
}
