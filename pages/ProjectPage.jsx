import React from 'react'
import './styles/ProjectPage.css'
import {FaBookOpenReader } from 'react-icons/fa6'

const ProjectPage = () => {

  const projects = [
    {
      title: "recalld",
      image: "asd",
      source_code: "",
      tech_used: "d",
      concept_tags: "d",
      description: "s",
    },
  ]


  return (
    <div className='main-container'>
      <div className='projects'>
        <h1 id='projects-header'> <FaBookOpenReader style={{paddingRight: '10px'}}/>My Projects</h1>
        {projects.map((project, index) => (
          <div className="project-info" key={index}>
            <img className='project-image' src={project.image} alt='project-img'/>
            <div className="project-info">
              <h2 className="title">
                {project.title}
              </h2>
              <h4 className="description">
                {project.description}
              </h4>
              <h5 id="tech_stack">
                {project.tech_used}
              </h5>
              <p id="tags">
                {project.concept_tags}
              </p>
              <p id="source-code">
                <a href={project.source_code} className="source-code-tag" target='_blank' rel="noopener noreferrer"></a>  
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectPage
