import React from 'react'
import "./Map.css"
import mapIcon1 from "./../../assets/map_icon01.svg"
import mapIcon2 from "./../../assets/map_icon02.svg"
import mapIcon3 from "./../../assets/map_icon03.svg"
const Map = () => {
  return (
    <div className='Map_wrapper'>
        <h2 className='section_title'> We Are To <br></br>
        Get You <span>Your Dream House</span></h2>
        <p> We are here to help you find your dream house. Browse our listings, use filters to narrow down your options, and get in touch with our agents to make your dream a reality. Your perfect home is just a few clicks away! </p>
        <div className='cards'>
            <div className='card'>
                <img src={mapIcon1} alt='Map-icon'/>
                <h3>Create Your Account <span> Creating an account on our real estate platform is a breeze. Simply visit our website, click "Sign Up," and fill in your name, email address, and a strong password. Verify your email through the link we send you, and then log in to complete your profile. </span></h3>
            </div>
            <div className='card'>
                <img src={mapIcon2} alt='Map-icon'/>
                <h3>Find Home <span> Looking for a home? Start by browsing our online listings to find properties that suit your needs and budget. Use filters to narrow down options by location, price, size, and amenities. Schedule visits to your favorite picks, and once you find the right one, contact the agent to proceed with the next steps. Happy house hunting! </span></h3>
            </div>
            <div className='card'>
                <img src={mapIcon3} alt='Map-icon'/>
                <h3>Quick Process <span> Finding your dream home is easy with us. Simply browse our listings, use filters to narrow down your options by location, price, and size, and schedule visits to the properties you like. Once you've found the perfect home, contact the agent to start the buying or renting process. </span></h3>
            </div>
        </div>
    </div>
  )
}
export default Map;
