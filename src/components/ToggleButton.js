import React from 'react'

const ToggleButton = (props) => {
  const {darkMode , toggleButtonFunction} = props; 
  let heading ="Light Mode";
  if(darkMode === false) heading = "Dark Mode"
  // isDark = true;
  return (
    <button className="toggle-button" onClick={()=>toggleButtonFunction()}>{heading}</button>
  )
}

export default ToggleButton