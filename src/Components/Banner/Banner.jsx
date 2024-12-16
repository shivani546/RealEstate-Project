import React from 'react'
import "./Banner.css"
const Banner = () => {
  return (
    <div className='banner_Wrapper'>
        <div className='banner_content'>
            <h2 className='section_title'> Exclusive Monthly <br></br><span>Deal For You</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quasi?</p>
            <button>More Details</button>
        </div>
        <div className='banner_image'>
            <div className='top_Container'>
                <div className='left_Container'>
                    <span>For Sale</span>
                    <h3>Luxury Fisa <br></br>Villa Orkit</h3>
                    <div className='icons'>
                        <i className='ri-heart-line'></i>
                        <i className='ri-bookmark-line'></i>
                        <i className='ri-add-circle-line'></i>
                    </div>
                </div>
                <div className='right_Container'>
                    <p>mirapur 10, Stadium Dhaka</p>
                    <div className='price'>
                        <h2>$2,00,999</h2>
                    </div>
                    <div className='feature'>
                        <p>2135 <span>sqft</span></p>
                        <p>03 <span>Bed</span></p>
                        <p>03 <span>Bath</span></p>
                    </div>
                </div>
            </div>
            <div className='bottom_Container'>
                <p>Check Full Details</p>
                <p><i className='ri-arrow-right-line'></i></p>
            </div>
        </div>
    </div>
  )
}
export default Banner;
