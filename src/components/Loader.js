import React from 'react'

const Loader = () => {
  return (
    <div className='loaderElement h-full w-screen fixed top-0 left-0 flex justify-center items-center bg-black z-[500]'>
      <div className="loader"></div>
    </div>
  )
}

export default Loader