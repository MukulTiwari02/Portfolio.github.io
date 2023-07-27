import React, {useState} from 'react'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter';
import ScrollButton from './ScrollDownButton'

const Hero = () => {
    const text = useTypewriter({
        words : ['Full Stack Web Developer', 'MERN Stack Developer', 'Software Developer'],
        loop : []
    });
    
  return (
    <div className="hero" id = "hero">
        <h1>Hi</h1>
        <h2>My name is Mukul Tiwari</h2>
        <h2>I am a <span><Typewriter 
                    cursor={true} 
                    words = {['FULL STACK WEB DEVELOPER', 'MERN STACK DEVELOPER', 'SOFTWARE DEVELOPER']}
                    loop = {true}
                    cursorBlinking = {false}
                    delaySpeed={1000}
                    typeSpeed={90}
                    deleteSpeed={70}
                    cursorStyle={' <'}
                    /></span>
                    </h2>

        <ScrollButton />
    </div>
  )
}

export default Hero