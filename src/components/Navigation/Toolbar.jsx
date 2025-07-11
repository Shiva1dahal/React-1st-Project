import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Toolbar() {

  const location=useLocation()

  const nav_items=[
    {title:"home",path:'/'},
    {title:"About",path:'/about'},
    {title:"Contact",path:'##'},
    {title:"Blog",path:'##'},
    {title:"Event",path:'##'},
  ]
  return (
    <div className='flex justify-between px-10 fixed top-10 left-0 right-0 mx-auto w-11/12 py-4 shadow-2xl bg-[#2c1ee8] z-15 rounded-2xl'>
      <div className='font-bold text-orange-600 text-xl'>Training</div>
      <div className='flex gap-6'>
        {
          nav_items.map((val,i)=>{
            return <div className='relative'>
              <Link key={i} to ={val.path} className={`capitalize ${location.pathname==val.path?"text-red-600":"text-white"}`} >{val.title}</Link>
              <div className={`h-1 bg-white ${location.pathname==val.path?"w-full":"w-0"} transition-all duration-500 delay-75 ease-in-out`}></div>
            </div>
          })
        }
      </div>
    </div>
  )
}
