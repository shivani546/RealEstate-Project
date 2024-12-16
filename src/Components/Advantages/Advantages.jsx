import React from 'react'
import "./Advantages.css"
import icon1 from "./../../assets/icon_01.svg"
import icon2 from "./../../assets/icon_02.svg"
import icon3 from "./../../assets/icon_03.svg"
import imgusers from "../../assets/screen_01.webp"
const Advantages = () => {
  return (
    <div className='advantages_wrapper section'>
        <h2 className='section_title'>
            Unlock Home4u's<span> Advantage</span>
        </h2>
        <p>Real Homes, Real Values, Real People, Real Deals.</p>
        <div className='cards'>
            <div className='card'>
                <img src={icon1} alt='' />
                <h3>Buy A Home</h3>
                <p>Whether the home can accommodate your plans for family or lifestyle changes.</p>
            </div>
            <div className='card'>
                <img src={icon2} alt='' />
                <h3>Rent A Home</h3>
                <p>Consider your income, savings, and monthly expenses.</p>
            </div>
            <div className='card'>
                <img src={icon3} alt='' />
                <h3>Sell Property</h3>
                <p>Ensure the buyer's inspection and appraisal go smoothly.</p>
            </div>
        </div>
        <div className='About_wrapper'>
            <div className='About_img'>
                <h2>Secure Your Family's<br></br> Dream Home</h2>
                <i className='ri-play-fill'></i>
                <img src={imgusers} alt='' />
            </div>
            <div className='About_content'>
                <div className='Content_wrapper'>
                    <h3>Who We Are ??</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor inventore rerum assumenda culpa aperiam accusantium, hic debitis aspernatur.</p>
                    <div className='Experience'>
                        <h2>8+ <span>Years of Experience</span></h2>
                        <h2>8+ <span>Projects Completed</span></h2>
                    </div>
                    <p><i className='ri-check-line'>Loan And Interest Facility</i></p>
                    <p><i className='ri-check-line'>Over 10k+ Property Upgrade Regularly</i></p>
                    <p><i className='ri-check-line'>Expert Agent Consultation</i></p>
                    <div className='about_btns'>
                        <button>Get Started</button>
                        <button>Request A Callback</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Advantages;
