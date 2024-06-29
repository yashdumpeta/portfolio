import React from 'react'
import './styles/ExperiencePage.css'
import michLogo from '../assets/images/michengineering2.jpeg'


const ExperiencePage = () => {

    const workExperiences = [
        {
            company: "Spire Investment Partners",
            period: "(June 2024 - Present)",
            position: "Technology & Cybersecurity Intern",
            description: "Loading..."
        },
        {
            company: "Spire Investment Partners",
            period: "(June 2024 - Present)",
            position: "Technology & Cybersecurity Intern",
            description: "Loading..."
        },
        

        // Add more experiences as needed
    ];



    return (
        <div className='main-container'>
            <div className='education'>
                <h1 id='education-header'>Education</h1>
                <div className='education-info'>
                    <img id='mich-logo' src={michLogo} alt='Michigan-Engineering Logo' />
                    <div className='college-details'>
                        <h2 id='college-info'>University of Michigan - College of Engineering</h2>
                        <h3 id='major'>B.S.E. in Computer Science</h3>
                        <p id='uni-ranking'> Ranked 5th in the US for Computer Science : 2014 - 2024 (csrankings) </p>
                    </div>
                </div>
            </div>
            <div className='work'>
                <h1 id='work-header'>Experiences</h1>
                {workExperiences.map((experience, index) => (
                    <div className='work-info' key={index}>
                        <img className='work-logo' src={michLogo} alt='' />
                        <div id='work-details'>
                            <h2 className='organization-name'>
                                {experience.company}
                                <span id='work-time-period'> {experience.period} </span>
                            </h2>
                            <h3 className='work-position'>
                                {experience.position}
                            </h3>
                            <p className='work-description'>
                                {experience.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExperiencePage
