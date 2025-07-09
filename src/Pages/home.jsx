import React from "react"
import Banner from "../components/UI/Banner"
import { useNavigate } from "react-router-dom"

function Home(){
    const navigate=useNavigate()
    const transfer=()=>{
        navigate('/about')
    }
    return(
        
        <div>
            <Banner title="Home" subtitle="It's a home page" description="It's a description"/>

        <button onClick={()=>{
            transfer()
        }}>
            About Us
        </button>
        </div>
    )
}

export default Home