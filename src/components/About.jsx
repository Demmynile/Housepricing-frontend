import React from 'react'
import './About.css'
// import '../../node_modules/react-vis/dist/style.css'
// import {XYPlot, LineSeries} from 'react-vis';


const About = () => {

    const data = [
        {x: 0, y: 8},
        {x: 1, y: 5},
        {x: 2, y: 4},
        {x: 3, y: 9},
        {x: 4, y: 1},
        {x: 5, y: 7},
        {x: 6, y: 6},
        {x: 7, y: 3},
        {x: 8, y: 2},
        {x: 9, y: 0}
      ];

    return (

        <div className = "aboutContainer">
           
         <div className = "aboutMain">
           
           <div className = "aboutLeft">
               <h3 className = "aboutLeftWords">House cost is a very good application for predicting house prices.</h3><br/>
               <button className = "aboutLeftWordsButton"> Read More</button>
           </div>
           {/* <div className = "aboutRight">
               
                <XYPlot height={300} width={600}  >
                <LineSeries data={data} color ="White"/>
                </XYPlot>
                <center className = "aboutRightAnalytics" > Analytics</center>
           </div> */}


         </div>



        </div>
    )
}

export default About
