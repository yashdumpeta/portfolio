import React from 'react'
import './LandingPage.css'
import IntroSection from '../components/IntroSection'
import AboutSection from '../components/AboutSection'
import SkillSection from '../components/SkillSection'


const LandingPage = () => {
  return (
    <div className="main-container">
      <IntroSection />
      <AboutSection />
      <SkillSection />
    </div>
  );
}



export default LandingPage
