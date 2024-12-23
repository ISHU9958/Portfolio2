import React from 'react'
import '../styles/SkillCard.css';

const SkillCard = ({skill}) => {
  return (
    <div className='skill-card'>
      
      <img src={skill.path} alt="" className='skill-image'/>
      
        <h1 className='skill-name'>{skill.name}</h1>
    </div>
  )
}

export default SkillCard
