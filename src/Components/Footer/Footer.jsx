import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='Footer_Wrapper section'>
        <div className='top_Container'>
            <h2 className='section_title'> Any Enquiry Feel <br></br>Free To <span>Contact Us</span></h2>
        </div>
        <div className='bottom_Container'>
            <div className='footer_links'>
                <div className='footer_content'>
                    <h2>Home4u</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <div className='social'>
                        <i className='ri-facebook-line'></i>
                        <i className='ri-instagram-line'></i>
                        <i className='ri-twitter-x-line'></i>
                        <i className='ri-youtube-line'></i>
                    </div>
                </div>
            </div>
            <div className='footer_links'>
                <h3>Quick Links</h3>
                <p>Home</p>
                <p>MemberShop</p>
                <p>About Us</p>
                <p>Blog</p>
                <p>Pricing</p>
            </div>
            <div className='footer_links'>
                <h3>Legal</h3>
                <p>Terms & Conditions</p>
                <p>Cookie Policy</p>
                <p>Privacy Policy</p>
            </div>
            <div className='footer_links'>
                <h3>New Listing</h3>
                <p>New Houses</p>
                <p>New Vilas</p>
                <p>New Industrial</p>
            </div>
        </div>
    </div>
  )
}
export default Footer;
