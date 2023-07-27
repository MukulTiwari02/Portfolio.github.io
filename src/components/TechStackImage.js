import React from 'react'

const TechStackImage = (props) => {
    const {classn,name,img,id} = props;
  return (
    <div className='tech-stack-image'>
        <img className={classn} id={name} title={name} src={img} alt={name} />
    </div>
  )
}

export default TechStackImage