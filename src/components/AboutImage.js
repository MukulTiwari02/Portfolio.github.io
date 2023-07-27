import React from 'react'
import imageHorizontal from '../Assets/Images/about-image-horizeontal.png'
import imageVertical from '../Assets/Images/about-image-vertical.png'

const AboutImage = () => {
  const deviceWidth = window.innerWidth;
  const image = (deviceWidth>=1450) ? imageHorizontal : imageVertical;
  return (
    <img src={image} alt="About Image" />
  )
}

export default AboutImage