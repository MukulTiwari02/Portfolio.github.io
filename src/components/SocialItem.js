import React from 'react'

const SocialItem = (props) => {

    const {name,image,url} = props

  return (
    <a classNamee = "tech-stack-image" target = "_blank" href={url}><img src={image} alt={name} title={name}/></a>
  )
}

export default SocialItem