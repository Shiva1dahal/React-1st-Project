import React from 'react'
import { Link } from 'react-router-dom'

export default function Toolbar() {
  return (
    <div className='flex justify-between px-10 py-10 shadow-2x1'>
      <div className='font-bold text-x1'>Training</div>
      <div className='flex gap-6'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
    </div>
  )
}
