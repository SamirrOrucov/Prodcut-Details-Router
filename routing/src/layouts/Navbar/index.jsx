import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.css"
const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='navUl'>
            <li><NavLink to={"/"} activeClassName="black">Home</NavLink></li>
            <li><NavLink to={"/about"}>About</NavLink></li>
            <li><NavLink to={"/contact"}>Contact</NavLink></li>

        </ul>
    </div>
  )
}

export default Navbar