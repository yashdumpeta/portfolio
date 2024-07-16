import React from 'react'
import './styles/ProjectPage.css'
import { FaBookOpenReader, FaComputer } from 'react-icons/fa6'
import { SiDjango, SiGithub, SiPython, SiReact } from 'react-icons/si'
import { FaCss3, FaHtml5, FaJs } from 'react-icons/fa'
import { DiMysql } from 'react-icons/di'
import recalld from '../assets/images/recalld.png'
import recalld2 from '../assets/images/recalld-2.png'

const ProjectPage = () => {

  const projects = [
    {
      title: "recalld",
      image: recalld2,
      source_code: "https://github.com/yashdumpeta/recalld",
      tech_used: [
        { icon: <SiPython />, name: "Python" },
        { icon: <SiDjango />, name: "Django" },
        { icon: <SiReact />, name: "React.js" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3 />, name: "CSS" },
        { icon: <DiMysql />, name: "MySQL" },
        { icon: <SiGithub style={{ paddingRight: "1px", alignContent: "center" }} />, name: "Github" },

      ],
      concept_tags: [
        "MVC-Architecture", "RESTfulAPI", "JWT"
      ],
      description: "recalld is a dynamic and interactive full-stack flashcard app designed to help facilitate learning and information retention. It's built with a powerful django backend and a visually sleek and visually appealing front-end built with React.js. ",
    },
    {
      title: "recipeFind",
      image: "",
      source_code: "https://github.com/yashdumpeta/recipeFind",
      tech_used: [

        { icon: <SiReact />, name: "React.js" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3 />, name: "CSS" },
        { icon: <SiGithub style={{ paddingRight: "1px", alignContent: "center" }} />, name: "Github" },

      ],
      concept_tags: [
      ],
      description: "recipeFind is a web app for discovering and exploring a world of culinary delights. Leveraging the expansive database of over 2.3 million recipes provided by the Edamam API, recipeFind allows users to effortlessly search and retrieve detailed information about any dish they desire ",
    },
  ]


  return (
    <div className='main-container'>
      <div className="content">

        <div className='projects'>
          <h1 id='projects-header'>Projects</h1>
          {projects.map((project, index) => (
            <div className="project" key={index} style={{'--project-image': `url(${project.image})`}}>
              <div className="project-info">
                <h2 className="title">
                  {project.title}
                </h2>
                <h4 className="description">
                  {project.description}
                </h4>
                <h3 id="tech_stack">
                  {project.tech_used.map((tech, index) => (
                    <div className="tech-item" key={index}>
                      {tech.icon}
                      <span className='skill-name'>{tech.name}</span>
                    </div>
                  ))}
                </h3>
              </div>
              <button className="source-code-tag">
                <a href={project.source_code} target='_blank' rel="noopener noreferrer"> <SiGithub /> </a>
              </button>
              {/* <img className='project-image' src={project.image} alt='project-img' /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectPage
