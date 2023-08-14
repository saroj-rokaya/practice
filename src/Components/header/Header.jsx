import React from "react";
import "./header.css"
import CV from "./CV.pdf"

export default function Header() {
  return (
    <div className="header-container">
        <nav>
            <div className="namecontainer">
            <p className="name">Saroj Kumar Rokaya</p>
            </div>
            <ul className="header-nav-lists">
                <li className="header-navlists">Home</li>
                <li className="header-navlists">About</li>
                <li className="header-navlists">Skills</li>
                <li className="header-navlists">Projects</li>
                <li className="header-navlists">Contact</li>
                <a href={CV}>
                <li className="header-navlists">CV</li>
                </a>
                <i class="ri-menu-fill header-menu"></i>
            </ul>
        </nav>
    </div>
  );
}
