import React, { useRef } from 'react'
import "./Nav.css";

const Nav = () => {
  const Menu = useRef();
  const Menuhandler = () => {
    Menu.current.classList.toggle("showNav");
  }
  return (
    <div className={"Nav_wrapper"}>
        <div className={'logo'}>
            <a href='#'>Home4u</a>
        </div>
        <ul ref={Menu}>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Advantage</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Location</a></li>
            <li><a href='#'>New Listing</a></li>
            <li><a href='#'>Agents</a></li>
            <li><a href='#'>Estimate</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>
        <div className={"nav_btns"}>
            <button>Login</button>
            <button>Add Listing</button>
            <i className='ri-menu-2-line' id='bars' onClick={Menuhandler}></i>
        </div>
    </div>
  )
}

export default Nav;