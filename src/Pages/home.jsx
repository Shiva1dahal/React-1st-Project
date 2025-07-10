import React from "react"
import Banner from "../components/UI/Banner"
import { useNavigate } from "react-router-dom"
import Imagetwo from '../assets/card-1.avif'
import Imagethree from '../assets/card-2.jpg'
import Imagefour from '../assets/card-3.jpg'
import Imagefive from '../assets/card-4.jpg'
import Imagesix from '../assets/card-5.jpg'

import Card from "../components/UI/Card"

function Home(){
    const navigate=useNavigate()
    const transfer=()=>{
        navigate('/about')
    }

    const getData=()=>{
      try{
        axios.get('https://gastro-backend.e-aribt.com/api/services').then(res=>{console.log(res)}).catch(err=>{console.log(err)})
      }catch(error){
        console.log(error)
      }
    }

    const carddata=[
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
     ]

    return(
        
        <div>
            <Banner title="Home" subtitle="It's a home page" description="It's a description"/>

          <div className="grid grid-cols-5 gap-6 w-10/12 mx-auto mt-10">
            {
              carddata.map((val,i)=>{
                return <Card title={val.title} description={val.description} image={val.image} key={i} />
              })
            }
          </div>

        <button onClick={()=>{
            transfer()
        }}>
            About Us
        </button>


        </div>
    )
}

export default Home