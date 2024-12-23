import React from 'react'
import '../styles/Projects.css';
import projectArray from '../Data/Project.js';
import ProjectCard from './ProjectCard.jsx';

const Projects = () => {
  return (
    <div className='projects-container'>
      <h1 className='project-heading'>Projects</h1>
      <div className="projects">

        {
          projectArray.map(project => (
            <ProjectCard project={project} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects
