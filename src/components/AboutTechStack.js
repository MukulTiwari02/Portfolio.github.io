import React from 'react'
import TechStackImages from '../Assets/techStack'
import TechStackImage from './TechStackImage'

const AboutTechStack = () => {
    const images = TechStackImages.map((element) => {
        return (
            <TechStackImage name = {element.name} img = {element.img} id = {element.id} />
        )
    })
  return (
    <div className='AboutTechStack'>
        <h1>Tech Stack that I use includes</h1>
        <div className="techStackContainer">
            {images}
        </div>
    </div>
  )
}

export default AboutTechStack