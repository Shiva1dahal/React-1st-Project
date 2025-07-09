import React, { useState } from 'react'

export default function PageNotFound() {
    let a = 10
    const changed =()=>{
        a=a+1
    }

    const[b,setb]=useState(0)
    
    const[show,setshow]=useState(false)
    const handleClick=()=>{
        setshow(true)
    }

  return (
    <div>
      {a}
      <br />
      {console.log(a)}
      <button onClick={()=>changed()}>change data</button>

      <br />
      {b}
      <div onClick={()=>{
        setb(b+1)
      }}>Change b</div>

      <div className='p-4' >
        <button onClick={handleClick} >Click ME</button>

        {show && (
        <div className="mt-4 p-4 border border-gray-400 rounded shadow">
          Here
        </div>
      )}
      </div>
    </div>
  )
}
