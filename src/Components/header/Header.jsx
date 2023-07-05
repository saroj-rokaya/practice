import React from "react";
import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <nav>
            <p id="name">Saroj Kumar Rokaya</p>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>
  );
}
