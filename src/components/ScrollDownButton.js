import React from 'react'
import scrollImg from '../Assets/Images/scroll-icon-animation.gif'

const ScrollDownButton = () => {
  return (
    <a className = "hero-scroll-image" href="#About">
            <img src={scrollImg} alt="Click To Scroll Down"/>
    </a>
  )
}

export default ScrollDownButton