import React from "react"
import { useNavigate } from "react-router-dom"

function Card({title,description,image}) {
    const navigate=useNavigate()

  return (
    <div className="flex flex-col justify-center gap-6 p-6 bg-gray-100 rounded-2xl overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-green-500">

        <img className="rounded-2xl h-fit w-full md:w-80 " src={image}/>
        <div className="p-5">
            <h1 className="text-xl font-bold mb-2">{title}</h1>
            <div className="text-gray-600 line-clamp-3">{description}</div>
            <div onClick={()=>{
                navigate(`/card/${title}`)
            }} className="border border-blue-500 w-fit text-blue-400 h-fit px-10 py-2 rounded-md">Read More</div>
        </div>

    {/* <div className="flex flex-col md:flex-row justify-center gap-6 p-6 bg-gray-100 rounded-2xl">
      {cards.map((card, idx) => (
        <div
          key={idx}className="rounded-2xl shadow-lg overflow-hidden w-full md:w-80 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
          <img src={card.image} alt={card.title} className="h-48 w-full object-cover" />
          <div className="p-5">
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        </div>
      ))}
    </div> */}
      
    </div>
  )
}

export default Card