import React from 'react'
import "./contacts.css"

export default function Contacts() {
  return (
    <div className="contactscontainer">

    <div className="contactss">
      Contact
    </div>

    <div className="contactsform-container">

       <div className="contactsform-inner-left-container">
        <p className="contactme">Contact Me</p>
        <p className="contactme-description">
          Feel free to drop your information on your right
        </p>
      </div>

      <div className="contactsform-inner-right-container">      
        <form>
          <input type="text" name="fullName" placeholder="Enter Your Full Name" className="boxes" required/><br />
       
          <input type="text" name="address" placeholder="Enter Address" className="boxes" required/><br />
       
          <input type="tel" name="number" placeholder="Enter Mobile Number" className="boxes" required-pattern="[0-9]+" required/><br />

          <input type="email" name="email" placeholder="Enter Email" className="boxes" required/><br />
       
           <textarea name="textarea"  cols="5" rows="3" placeholder="Write a comment" className="boxes" id="txtbox" ></textarea><br />

          <button className='submitBtn'>submit &#8594;</button>

        </form>
      </div>
     

       

      
      
    </div>


  </div>
  )
}
