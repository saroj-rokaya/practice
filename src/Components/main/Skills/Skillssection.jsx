import React from "react";
import "./skillssection.css";
import Skillcart from "./Skillcart";

export default function Skillssection() {
  return (
    <div className="skillscontainer">
     
      <div className="skillss">Skills</div>
      
      <div className="sklcrt">
        <Skillcart sklcrt="html" />
      </div>
      <div className="sklcrt">
        <Skillcart sklcrt="html" />
      </div>
      <div className="sklcrt">
        <Skillcart sklcrt="html" />
      </div>

    </div>
  );
}
