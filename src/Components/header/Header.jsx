import React from "react";
import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <nav>
            <div className="namecontainer">
            <p className="name">Saroj Kumar Rokaya</p>
            </div>
            <ul className="header-nav-lists">
                <li className="navlists">Home</li>
                <li className="navlists">About</li>
                <li className="navlists">Skills</li>
                <li className="navlists">Projects</li>
                <li className="navlists">Contact</li>
            </ul>
        </nav>
    </div>
  );
}
