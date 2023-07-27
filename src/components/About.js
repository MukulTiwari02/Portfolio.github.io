import React from 'react'
import AboutImage from './AboutImage'
import AboutText from './AboutText'
import AboutTechStack from './AboutTechStack'

const About = () => {
  return (
    <>
    <div className='About' id="About">
       <AboutImage />
       <AboutText />
    </div>
    <AboutTechStack />
    </>
  )
}

export default About