import React from 'react'

import '../styles/ProjectCard.css'
const ProjectCard = ({ project }) => {
  return (
    <div className='project-card'>

      <img src={project.path} alt="" className='project-image' />

      <h1 className='project-name'>{project.name}</h1>
      <div className="content">
        <p className='desc'>{project.description}</p>
        <button className="live" onClick={() => {
          window.open(project.livelink, '_blank');
        }}>Live</button>

      </div>
    </div>
  )
}

export default ProjectCard
