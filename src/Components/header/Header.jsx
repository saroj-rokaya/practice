import React from "react";
import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <nav>
            <div className="namecontainer">
            <p className="name">Saroj Kumar Rokaya</p>
            <p className="name">Saroj Kumar Rokaya</p>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>
  );
}
