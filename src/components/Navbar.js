import React from 'react'
import { Link } from 'react-router-dom';

const Navbar=() =>{
    return (
      <>
        <header id="header">
          {/* responsive navbar start */}
          <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">
          <a href="#">
            <img className="brand-img" src="images/logo.png" />
            </a>
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span />
            <span />
            <span />
          </label>
        </div>
        <div className="nav-links">
        <a  className="brighter-button space-bums-button" href="/#about">ABOUT</a>
        <a  className="brighter-button space-bums-button" href="/#mint">MINT</a>
             
              <a   className="blue-button  space-bums-button" href="/#skullversepopulation">SKULLS </a>
              <a  className="brighter-button space-bums-button" href="/#roadmap">ROAD MAP</a>
        </div>
      </div>
          {/* responsive navbar end */}
        {/* <div className="row">
            <div className="col-md-4 logo">
            <a href="#">
            <img src="https://spacebums.io/static/SBlogo-3c26840996cc14878d16dcd8e69cc073.png" width={80} />
            </a>
            </div>
            <div className="col-md-8">
            <nav id="nav">
          <ul>
              <li><a  className="brighter-button space-bums-button" href="#about">About</a></li>
              <li><Link  className="blue-button  space-bums-button" to="#">Mint</Link></li>
              <li><a   className="blue-button  space-bums-button" href="#creed">Creeds</a></li>
              <li><a  className="brighter-button space-bums-button" href="#roadmap">roadmap</a></li>
               </ul>
        </nav>
            </div>
        </div>
      */}
          
        
      </header>
      </>
    )
}
export default Navbar;
