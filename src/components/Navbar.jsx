import React from 'react'
import './Navbar.css'






const Navbar = () => {

  return(
    <>

    <div className = "navbarContainer">
      <div className = "navbarMain">


        <div className = "navHomeLink">
          <h3 className = "navbarHomeLink">HouseCost</h3>
        </div>

        <div className = "navOtherLink">
          <h3 className = "navbarLink">About</h3><span></span>
          <h3 className = "navbarLink">Details</h3><span></span>
          <h3 className = "navbarLink">Download</h3><span></span>
          <h3 className = "navbarLink">Contact</h3><span></span>
        </div>
        
      </div>

    </div>
    
    
    </>

  )
}

export default Navbar