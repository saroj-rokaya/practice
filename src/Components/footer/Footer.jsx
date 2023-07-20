import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">

        <div className="footernav">
        <p className="navlistfooterlink">Lists :-</p>

          <ul>            
            <li className="navlistfooter">Home</li>
            <li className="navlistfooter">About</li>
            <li className="navlistfooter">Skills</li>
            <li className="navlistfooter">Projects</li>
            <li className="navlistfooter">Contact</li>
            
          </ul>
        </div>

        <div className="footerlink">
            <p className="navlistfooterlink">Contact Me :-</p>
          <ul>
            <li className="navlistfooter">Facebook</li>
            <li className="navlistfooter">Whatsapp</li>
            <li className="navlistfooter">Linked IN</li>
            <li className="navlistfooter">Github</li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        &copy;Copyright 2023, All right reserved || Saroj Kumar Rokaya
      </div>
    </>
  );
}
