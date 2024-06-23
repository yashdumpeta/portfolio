import React from 'react'
import './IntroSection.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
const IntroSection = () => {

    const direct_to_about_section = () => {
        document.getElementById('about-container').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="section intro-section" id='intro-box'>
            <div className="intro-container">
                <h1 className='name'>Yash Dumpeta</h1>
                <p className='college'>Junior studying Computer Science @ University of Michigan - Ann Arbor </p>
                <button className="scroll_to_about" onClick={direct_to_about_section}><strong> ⌄ </strong></button>
                
            </div>
        </div>
    )
}

export default IntroSection
