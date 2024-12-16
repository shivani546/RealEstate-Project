import React from 'react'
import "./Location.css"
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import locationimg1 from "./../../assets/location_img_1.jpg"
import locationimg2 from "./../../assets/location_img_2.jpg"
import locationimg3 from "./../../assets/location_img_3.jpg"
import locationimg4 from "./../../assets/location_img_4.jpg"
import { Swiper, SwiperSlide } from 'swiper/react'
const Location = () => {
  return (
    <div className='location_wrapper section'>
        <h2 className='section_title'>Explore Popular<span>Location</span></h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <Swiper 
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          breakpoints={{
            0:{
              slidesPerView:1
            },
            768:{
              slidesPerView:2
            },
            1024:{
              slidesPerView:3
            },
            1200:{
              slidesPerView:4
            }
          }}
          className='swiper'
          modules={[Autoplay]}
        
        >
            <SwiperSlide>
                <div className='locationCard'>
                    <img src={locationimg1} alt='location-images'/>
                    <h2>Dhaka <span>105 Properties</span></h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='locationCard'>
                    <img src={locationimg2} alt='location-images'/>
                    <h2>Miami <span>115 Properties</span></h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='locationCard'>
                    <img src={locationimg3} alt='location-images'/>
                    <h2>California <span>99 Properties</span></h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='locationCard'>
                    <img src={locationimg4} alt='location-images'/>
                    <h2>California <span>99 Properties</span></h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='locationCard'>
                    <img src={locationimg1} alt='location-images'/>
                    <h2>Dhaka <span>105 Properties</span></h2>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
export default Location;