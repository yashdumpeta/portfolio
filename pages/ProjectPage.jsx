import React from 'react'
import './styles/ProjectPage.css'

const ProjectPage = () => {

  const projects = [
    {
      title: "ad",
      image: "asd",
      source_code: "s",
      tech_used: "d",
      concept_tags: "d",
      description: "s",
    },
  ]

  return (
    <div className='main-container'>
      <div className='projects'>
        <h1 id='projects-header'>Projects</h1>
        {projects.map((project, index) => (
          <div className="project-info" key={index}>
            <img className='project-image' src={project.image} alt='__' />
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
                {project.source_code}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectPage
