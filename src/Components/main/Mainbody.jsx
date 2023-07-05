import React from 'react'
import "./mainbody.css"
import Right from './Right'
import Left from './leftpart/Left'

export default function Mainbody() {
  return (
    <>
    <div className="mainbody">
        <div className="leftportion">
            <Left/>
        </div>
        <div className="rightportion">
            <Right/>
        </div>
    </div>

    
    </>
  )
}
