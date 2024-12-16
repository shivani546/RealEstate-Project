import React from 'react'
import "./Testimonials.css"
import user1 from "./../../assets/user1.jpg"
import user2 from "./../../assets/user2.jpg"
import user3 from "./../../assets/user3.jpg"
import RatingImg from "./../../assets/rating_01.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Autoplay } from 'swiper/modules';
const Testimonials = () => {
    return (
        <div className='testimonials_wrapper'>
            <Swiper
                autoplay={
                    {
                    delay: 2500,
                    }
                }
                loop={true}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <div className='testimonials_card'>
                        <div className='userImg'>
                            <img src={user1} alt='' />
                            <h3>SHIVANI KALYANI<span>Ks Liquid pvt ltd</span></h3>
                        </div>
                        <div className='userContent'>
                        Exceptional Experience! The agents were knowledgeable and truly cared about finding the perfect home for our family. The website made it easy to explore properties and schedule viewings. Highly recommend!
                        </div>
                        <div className='userReview'>
                            <img src={RatingImg} alt='user-review' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='testimonials_card'>
                        <div className='userImg'>
                            <img src={user2} alt='' />
                            <h3>ANSTIN RAVISTEPHEN <span>Jerry Constructions pvt ltd</span></h3>
                        </div>
                        <div className='userContent'>
                        Top-Notch Service! Navigating the real estate market can be daunting, but this site made it a breeze. The listings were comprehensive and updated regularly. The customer support was always ready to assist. Five stars!
                        </div>
                        <div className='userReview'>
                            <img src={RatingImg} alt='user-review' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='testimonials_card'>
                        <div className='userImg'>
                            <img src={user3} alt='' />
                            <h3>DINESHWAR ANBARASU<span>Tom Constructions pvt ltd</span></h3>
                        </div>
                        <div className='userContent'>
                        Beyond Satisfied! From virtual tours to detailed property descriptions, this website provided all the tools we needed to make an informed decision. The buying process was smooth and hassle-free. Excellent platform!
                        </div>
                        <div className='userReview'>
                            <img src={RatingImg} alt='user-review' />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default Testimonials;
