import React, { useState } from 'react'
import "./skillssection.css"

export default function SkillsSection() {
  const [cards] = useState([
     {
      title: 'card-1',
      text: ' dlfjdskf fjfdskfj dfdjfdjf dfjkdskf dsf dsfjdsf jdf dsfkjdslfjdsf;ds '
     },
     {
      title: 'card-2',
      text: ' dlfjdskf fjfdskfj dfdjfdjf dfjkdskf dsf dsfjdsf jdf dsfkjdslfjdsf;ds '
     },
     {
      title: 'card-3',
      text: ' dlfjdskf fjfdskfj dfdjfdjf dfjkdskf dsf dsfjdsf jdf dsfkjdslfjdsf;ds '
     },
     {
      title: 'card-4',
      text: ' dlfjdskf fjfdskfj dfdjfdjf dfjkdskf dsf dsfjdsf jdf dsfkjdslfjdsf;ds '
     }

  ])
  return (
    <div className="skills-container">
    <div className="skills-contents">Skills</div>

    <div className="skills-card-container">
      {/* <div className="skills-by-cards"> */}
        <div className="cards">
            {
              cards.map((card,i)=>{
                <div key={i} className="card">
                  <h3>
                    {card.title}
                  </h3>
                  <p>
                    {card.text}
                  </p>
                </div>

              })
            }
        </div>
      {/* </div> */}
    </div>
  </div>
  )
}
