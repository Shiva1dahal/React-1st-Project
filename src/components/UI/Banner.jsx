import React from 'react'
import { useLocation } from 'react-router-dom';

function Banner({title,subtitle,description}) {
    const location=useLocation()
    console.log(location)
  return (
    <div>
        
      {title}
      {subtitle}
      {description}
    </div>
  )
}

export default Banner
