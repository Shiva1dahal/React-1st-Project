import React from 'react'
import { useLocation } from 'react-router-dom';
import Imageone from '../../assets/Books.jpg'

function Banner({title,subtitle,description}) {
    const location=useLocation()
    console.log(location)

    

  return (
    <div className='h-screen bg-red-500 '>

      <div className='h-full relative'>
        <img src={Imageone} className='h-full w-full object-cover' />
        <div className='absolute top-0 w-full h-full flex justify-center  items-center flex-col left-0 right-0 bg-black/30 z-10' >
          <div className='text-red-500'>Welcome to {title}</div>
          <div className='text-red-500' >{subtitle}</div>
        </div>
      </div>
        
    </div>
  )
}

export default Banner
