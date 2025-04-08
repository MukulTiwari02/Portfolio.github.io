import React from 'react'
import socialItems from '../Assets/socialItems'
import SocialItem from '../components/SocialItem'

const Socials = () => {

  const Socials = socialItems.map((socialItem,index) => {
      return <SocialItem key = {index}
      image = {socialItem.image}
      name = {socialItem.name}
      url = {socialItem.url}/>       
  })

  const screenWidth = window.innerWidth;

  return (
    <div className='social-items'>
      {screenWidth<=768 && <h1>Socials</h1>}
      <div className="social-items-container">
        {Socials}  
      </div>    
    </div>
  )
}

export default Socials