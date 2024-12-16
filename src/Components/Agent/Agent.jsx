import React from 'react'
import "./Agent.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import { Autoplay } from 'swiper/modules'
import agentImg01 from "./../../assets/agent01.webp"
import agentImg02 from "./../../assets/agent02.webp"
import agentImg03 from "./../../assets/agent03.webp"
import agentImg04 from "./../../assets/agent04.webp"
import agentImg05 from "./../../assets/agent05.webp"
const Agent = () => {
  return (
    <div className='agent_wrapper section'>
        <h2 className='section_title'>Our<span>Agents</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quasi?</p>
    
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
                delay: 1500,
            }}
            breakpoints={{
                0:{
                    slidesPerView: 1,
                },
                768:{
                    slidesPerView: 2,
                },
                1200:{
                    slidesPerView: 3,
                }
            }}
            modules={[Autoplay]}
            className='swiper'
        >
            <SwiperSlide>
                <div className='card'>
                    <img src={agentImg01} alt='agent-img'/>
                    <h3>Chris Matial <span>Marketing Head</span></h3>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='card'>
                    <img src={agentImg02} alt='agent-img'/>
                    <h3>Mark Folio<span>SEO Specialist</span></h3>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='card'>
                    <img src={agentImg03} alt='agent-img'/>
                    <h3>Habjer Kali <span>Broker</span></h3>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='card'>
                    <img src={agentImg04} alt='agent-img'/>
                    <h3>Nancy <span>Broker</span></h3>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='card'>
                    <img src={agentImg05} alt='agent-img'/>
                    <h3>Folio Habjer<span>Broker</span></h3>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
export default Agent;
