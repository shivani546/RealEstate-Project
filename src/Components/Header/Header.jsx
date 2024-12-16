import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div className='Header_wrapper'>
            <h1>Get The Ideal Home For Your <span>Family</span></h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet eligendi unde sit?</p>
            <div className='Search'>
                <div className='search_content'>
                    <div className='searchBox'>
                        <small>I m looking to...</small>
                        <input type='text' placeholder='Search for homes' />
                    </div>
                    <div className='searchBox'>
                        <small>Location</small>
                        <select className='search_wrapper'>
                            <option value="NewYork">New York</option>
                            <option value="USA">USA</option>
                            <option value="Canada">Canada</option>
                            <option value="India">India</option>
                        </select>
                    </div>
                    <div className='searchBox'>
                        <small>Price Range</small>
                        <select className='search_wrapper'>
                            <option value="Prime">$1000 - $20000</option>
                            <option value="Middle">$20000 - $40000</option>
                            <option value="Gold">$40000 - $80000</option>
                            <option value="Premium">$80000 - $300000</option>
                        </select>
                    </div>
                    <div className='searchBox'>
                        <button>Search <i className='ri-search-line'></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;