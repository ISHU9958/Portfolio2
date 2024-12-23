import React from 'react'
import '../styles/Skills.css';
import SkillCard from './SkillCard';
import skillArray from '../Data/Skill';

const Skills = () => {
  return (
    <div className="big-containier">
      <div className='skills-container'>
        <h1 className='skill-heading'>Skills</h1>
        <div className="skills">

          {
            skillArray.map(skill => (
              <SkillCard skill={skill} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Skills
