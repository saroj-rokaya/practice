import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Mainbody from '../main/Mainbody'
import "./all.css"

export default function All() {
  return (
    <div className="allstyle">
      <Header/>
      <Mainbody/>
      <Footer/>
    </div>
  )
}
