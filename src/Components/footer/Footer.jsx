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
                <li><span><i class="fa-solid fa-house"></i></span>Home</li>
                <li><span><i class="fa-solid fa-circle-info"></i></span>About</li>
                <li><span><i class="fa-solid fa-book-open"></i></span>skills</li>
                <li><span><i class="fa-solid fa-file-pen"></i></span>Projects</li>
                <li><span><i class="fa-solid fa-phone"></i></span>Contact</li>
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
                <a href="https://www.facebook.com/saroj.rokaya.5686"><li><span><i class="fa-brands fa-facebook"></i></span>Facebook</li></a>
                <a href="https://www.instagram.com/rokayasaroj188/"><li><span><i class="fa-brands fa-instagram"></i></span>Instagram</li></a>
                <a href="https://www.linkedin.com/in/saroj-rokaya-20289125b/"><li><span><i class="fa-brands fa-linkedin"></i></span>Linkedin</li></a>
                <a href="https://github.com/saroj-rokaya"><li><span><i class="fa-brands fa-github"></i></span>Github</li></a>
              </ol>
            </div>


            <div className="contact-section-body">
            <ol className="contact-lists">
                <li><span className="call-logo"><i class="fa-solid fa-phone"></i></span>Ph:-<span>9849925392</span></li>
                <li className="email"><span className="email-logo"><i class="fa-solid fa-envelope"></i></span>Email:-<span className="email">rokayasaroj188@gmail.com</span></li>
                
              </ol>
            </div>
          </div>
          

        </div>

      </div>
             

      {/* copyright footer section */}
      <div className="copyright">
        <p className="copyright-footer">Copyright &copy; 2023, All right reserved || Saroj Kumar Rokaya</p>
      </div>

    </>
  );
}
