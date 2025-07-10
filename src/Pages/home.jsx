import React from "react"
import Banner from "../components/UI/Banner"
import { useNavigate } from "react-router-dom"
import Imagetwo from '../assets/card-1.avif'
import Imagethree from '../assets/card-2.jpg'
import Imagefour from '../assets/card-3.jpg'
import Imagefive from '../assets/card-4.jpg'
import Imagesix from '../assets/card-5.jpg'

function Home(){
    const navigate=useNavigate()
    const transfer=()=>{
        navigate('/about')
    }
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
      },
      {
        image: Imagefive,
        title: "Into the Light",
        description: " A lone adventurer stands before a mighty waterfall as the golden sun pierces through the cliffs, symbolizing awe, solitude, and the raw power of nature."
      },
      {
        image: Imagesix,
        title: "Silent Skyline",
        description: "Towering skyscrapers emerge from a sea of clouds in a monochrome cityscape, blending human achievement with nature's mystery in serene contrast."
      }
    ];

    return(
        
        <div>
            <Banner title="Home" subtitle="It's a home page" description="It's a description"/>

        <button onClick={()=>{
            transfer()
        }}>
            About Us
        </button>

        <div className="flex flex-col md:flex-row justify-center gap-6 p-6 bg-gray-100 rounded-2xl">
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
    </div>

        </div>
    )
}

export default Home