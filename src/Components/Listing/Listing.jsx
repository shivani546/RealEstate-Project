import React from 'react'
import "./Listing.css"
import listing_img1 from "./../../assets/Listing_img_1.webp"
import listing_img2 from "./../../assets/Listing_img_2.webp"
import listing_img3 from "./../../assets/Listing_img_3.webp"
import listing_img4 from "./../../assets/Listing_img_4.webp"
import listing_img5 from "./../../assets/Listing_img_5.webp"
import listing_img6 from "./../../assets/Listing_img_6.webp"
const Listing = () => {
  return (
    <div className='Listing_wrapper section'>
        <h2 className='section_title'>New <span>Listings</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='Listing_Cards'>
            <div className='Listing_Card'>
                <div className='Img_wrapper' propertyType='For Rent'>
                    <img src={listing_img1} alt='listing-img'/>
                </div>
                <h2>BlueBerry Vila <span>mirpur 10, Dhaka</span></h2>
                
                <div className='features'>
                    <p><i className='ri-expand-diagonal-line'></i>1300 Sq Ft</p>
                    <p><i className='ri-hotel-bed-line'></i>3 Beds</p>
                    <p><i className='ri-showers-line'></i>3 Showers</p>
                </div>
                <div className='buyBtn'>
                    <h3>$ 1300/- </h3>
                    <i className='ri-arrow-right-line'></i>
                </div>
            </div>
            <div className='Listing_Card'>
                <div className='Img_wrapper' propertyType='For Rent'>
                    <img src={listing_img2} alt='listing-img'/>
                </div>
                <h2>White House Vila <span>mirpur 10, Dhaka</span></h2>
                
                <div className='features'>
                    <p><i className='ri-expand-diagonal-line'></i>1300 Sq Ft</p>
                    <p><i className='ri-hotel-bed-line'></i>3 Beds</p>
                    <p><i className='ri-showers-line'></i>3 Showers</p>
                </div>
                <div className='buyBtn'>
                    <h3>$ 1500/- </h3>
                    <i className='ri-arrow-right-line'></i>
                </div>
            </div>
            <div className='Listing_Card'>
                <div className='Img_wrapper' propertyType='For Rent'>
                    <img src={listing_img3} alt='listing-img'/>
                </div>
                <h2>Grey Berry Vila <span>mirpur 10, Dhaka</span></h2>
                
                <div className='features'>
                    <p><i className='ri-expand-diagonal-line'></i>1300 Sq Ft</p>
                    <p><i className='ri-hotel-bed-line'></i>3 Beds</p>
                    <p><i className='ri-showers-line'></i>3 Showers</p>
                </div>
                <div className='buyBtn'>
                    <h3>$ 999/- </h3>
                    <i className='ri-arrow-right-line'></i>
                </div>
            </div>
            <div className='Listing_Card'>
                <div className='Img_wrapper' propertyType='For Rent'>
                    <img src={listing_img4} alt='listing-img'/>
                </div>
                <h2>Ocean Vila <span>mirpur 10, Dhaka</span></h2>
                
                <div className='features'>
                    <p><i className='ri-expand-diagonal-line'></i>1300 Sq Ft</p>
                    <p><i className='ri-hotel-bed-line'></i>3 Beds</p>
                    <p><i className='ri-showers-line'></i>3 Showers</p>
                </div>
                <div className='buyBtn'>
                    <h3>$ 1900/- </h3>
                    <i className='ri-arrow-right-line'></i>
                </div>
            </div>
            <div className='Listing_Card'>
                <div className='Img_wrapper' propertyType='For Rent'>
                    <img src={listing_img5} alt='listing-img'/>
                </div>
                <h2>Spice Vila <span>mirpur 10, Dhaka</span></h2>
                
                <div className='features'>
                    <p><i className='ri-expand-diagonal-line'></i>1300 Sq Ft</p>
                    <p><i className='ri-hotel-bed-line'></i>3 Beds</p>
                    <p><i className='ri-showers-line'></i>3 Showers</p>
                </div>
                <div className='buyBtn'>
                    <h3>$ 1890/- </h3>
                    <i className='ri-arrow-right-line'></i>
                </div>
            </div>
            <div className='Listing_Card'>
                <div className='Img_wrapper' propertyType='For Rent'>
                    <img src={listing_img6} alt='listing-img'/>
                </div>
                <h2>Straw Berry Vila <span>mirpur 10, Dhaka</span></h2>
                
                <div className='features'>
                    <p><i className='ri-expand-diagonal-line'></i>1300 Sq Ft</p>
                    <p><i className='ri-hotel-bed-line'></i>3 Beds</p>
                    <p><i className='ri-showers-line'></i>3 Showers</p>
                </div>
                <div className='buyBtn'>
                    <h3>$ 1500/- </h3>
                    <i className='ri-arrow-right-line'></i>
                </div>
            </div>
        </div>
        <div className='Banner_wrapper'>
            <div className='bannerContent'>
                <h2 className='section_title'>New <span>Listings</span> </h2>
            </div>
            <div className='bannerImage'></div>
        </div>
    </div>
  )
}
export default Listing;
