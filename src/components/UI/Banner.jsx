import React from 'react'
import { useLocation } from 'react-router-dom';
import Imageone from '../../assets/Books.jpg'
import Imagetwo from '../../assets/card-1.avif'
import Imagethree from '../../assets/card-2.jpg'
import Imagefour from '../../assets/card-3.jpg'
function Banner({title,subtitle,description}) {
    const location=useLocation()
    console.log(location)

    const cards = [
  {
    image: Imagetwo,
    title: "Mountain View",
    description: "Experience breathtaking views and fresh air in the mountains."
  },
  {
    image: Imagethree,
    title: "City Lights",
    description: "Explore the vibrant life and energy of the city at night."
  },
  {
    image: Imagefour,
    title: "Desert Adventure",
    description: "Discover the beauty and silence of the vast desert."
  }
];

  return (
    <div className='h-screen bg-red-500 '>

      <div className='h-full relative'>
        <img src={Imageone} className='h-full w-full object-cover' />
        <div className='absolute top-0 w-full h-full flex justify-center  items-center flex-col left-0 right-0 bg-black/30 z-10' >
          <div className='text-red-500'>Welcome to {title}</div>
          <div className='text-red-500' >{subtitle}</div>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 p-6 bg-gray-100 rounded-2xl ">
      {cards.map((card, idx) => (
        <div
          key={idx}className="rounded-2xl shadow-lg overflow-hidden w-full md:w-80">
          <img src={card.image} alt={card.title} className="h-48 w-full object-cover" />
          <div className="p-5">
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        </div>
      ))}
    </div>


        </div>
      </div>
        
    </div>
  )
}

export default Banner
