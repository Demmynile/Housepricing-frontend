import React from 'react'
import './Home.css'
import logo from '../Assets/house.png'
import {useSpring , animated} from 'react-spring'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import About from './About'








 const Home = () => {

    const navigate = useNavigate()

   

    const fade = useSpring({
        
        from : {
            opacity : 0,
            marginRight : -900,
        },
        to : {
            opacity : 1,
            marginRight : 0,
        }
    })

    const housePricePage = () => {
        navigate("/houseprice")
    }
   
    return (
        <div className = "overallContainer">
        
        <Navbar/>
        <div className = "homeContainer">
            <div className = "homeMain">
                <animated.div className = "homeMessage" style = {fade}>
                   <animated.h2 className = "homeInfo">Get House Pricing prediction <br/> based on Information given. </animated.h2>
                   <button className = "homeGetStartedButton" onClick = {housePricePage} >START NOW</button>
                </animated.div>
                <div className = "homeAvatar">
                  <img src={logo} className ="homeImage" alt =""></img>
                </div>
                
            </div>
           
        </div>
        <About/>
        
        </div>
    )
}

export default Home
