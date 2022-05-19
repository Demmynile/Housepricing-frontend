import React , {useState} from 'react'
import './Houseprice.css'
import logo from '../Assets/estate.png'
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {AiOutlineLoading3Quarters} from 'react-icons/ai'



 const Houseprice = () => {

     // router between pages useNavigate
    const navigate = useNavigate()

    // function that route to another page
    const navigateToHome = () => {
        navigate('/')
    }

    // declare each state 
   const [newprice , setNewPrice] = useState()
   const [serviceprice , setServicePrice] = useState()
   const [estateprice , setEstatePrice] = useState()
   const [locationrank , setLocationRank] = useState()
   const [toilets , setToilets] = useState()
   const [bathrooms , setBathrooms] = useState()
   const [bedrooms , setBedrooms] = useState()
   const [location , setLocation] = useState()
   const [executive , setExecutive] = useState()
   const [terrace , setTerrace] = useState()
   const [results , setResults] = useState()


   // function that will trigger all inputs
   const deletePrice = () => {
    setNewPrice("")
    setServicePrice("")
    setEstatePrice("")
    setLocationRank("")
    setToilets("")
    setBathrooms("")
    setBedrooms("")
    setLocation("")
    setExecutive("")
    setTerrace("")
    setResults(null)
   }

   const predict = async() => {
       try{

        let data = {
            new_price : newprice,
            estate_price : estateprice,
            location_rank : locationrank,
            serviced_price : serviceprice,
            toilets : toilets,
            bathrooms : bathrooms,
            bedrooms : bedrooms,
            location : location == "gbagada" ? 0 : location == "surulere" ? 1 : location == "yaba" ? 2 : location == "ikorodu" ? 3 : location == "ogba" ? 4 : location == "iyana-ipaja" ? 5 :location == "ikeja" ? 6 :  location == "ikoyi" ? 7 : location == "ajah" ? 8 : 9,
            exec_flag : executive == "Yes"  ? 1: 0,
            terrace_flag : terrace == "Yes" ? 1: 0
        }
        console.log(data)
        const response = await axios.post("https://housepricingbackend.herokuapp.com/api/houseprice/" , data)
        console.log(response)
        setResults(response.data.response)
       
      
        
       }
       catch(error){
          console.log(error)
       }
   }

    return (
       <> 
        
        <div className = "housepriceContainer">
            <div className = "housepriceMain">
               <HiArrowLeft onClick = {navigateToHome} size = {30} style={{color : 'rgb(20, 112, 182)', pointer : 'cursor', }}/>
                <div className ="houseAvatar">
                <img src = {logo} alt = "" className = "houseImage"/>   
                </div>
                <div className ="houseForms">
                    <div className = "houseMainForms">
                        <header>Predict Your House price now...</header><br/><br/>

                        <input type = "number" placeholder = "new price" value = {newprice} className = "houseNewPrice1" onChange = {(e) => setNewPrice(e.target.value)} />
                        <input type = "number" placeholder = "service price" value = {serviceprice} className = "houseNewPrice2" onChange = {(e) => setServicePrice(e.target.value)}  />
                        <input type = "number" placeholder = "estate price" value = {estateprice} className = "houseNewPrice3"  onChange = {(e) => setEstatePrice(e.target.value)} />
                        <input type = "text" placeholder = "location rank" value = {locationrank} className = "houseNewPrice4" onChange = {(e) => setLocationRank(e.target.value)}  />
                        <input type = "number" placeholder = "toilets" value = {toilets} className = "houseNewPrice2" onChange = {(e) => setToilets(e.target.value)} />
                        <input type = "number" placeholder = "bathrooms" value = {bathrooms} className = "houseNewPrice3" onChange = {(e) => setBathrooms(e.target.value)} />
                        <input type = "text" placeholder = "bedrooms" value = {bedrooms} className = "houseNewPrice4" onChange = {(e) => setBedrooms(e.target.value)} />
                        <select className = "housePriceSelect" value = {location} onChange = {(e) => setLocation(e.target.value)} >
                            <option> Where is the location of the house</option>
                            <option>gbagada</option>
                            <option>surulere</option>
                            <option>yaba</option>
                            <option>ikorodu</option>
                            <option>ogba</option>
                            <option>iyanaipaja</option>
                            <option>ikeja</option>
                            <option>ikoyi</option>
                            <option>ajah</option>
                            <option>lekki</option>
                           
                        </select>
                        <select className = "housePriceSelect" value = {executive} onChange = {(e) => setExecutive(e.target.value)}>
                            <option> Do you want an Executive Suit</option>
                            <option>Yes</option>
                            <option>No</option>
                           
                        </select>

                        <select className = "housePriceSelect" value = {terrace} onChange = {(e) => setTerrace(e.target.value)}>
                            <option> Do you want a Terrace</option>
                            <option>Yes</option>
                            <option>No</option>
                           
                        </select>

                   
                        <button className = "housePriceButton" onClick = {predict}>Predict</button>

                       <div className ="houseContainer">

                        <div className = "housePriceReveal">
                          {results}
                        </div>
                        <div className = "houseDelete">
                        <AiOutlineLoading3Quarters color = "blue" style = {{marginTop : '20px'}} onClick = {deletePrice}/>
                        </div>
                      </div>
                      
                  
                        

                      

                    </div>
                </div>

            </div>
        </div>


     </>
    )
}

export default Houseprice