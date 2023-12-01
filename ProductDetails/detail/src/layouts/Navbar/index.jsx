import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.css"


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <h5>Logo</h5>
        </div>
        <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/products"}>Products</NavLink></li>
            <li><NavLink to={"/about"}>About</NavLink></li>
            <li><NavLink to={"/contact"}>Contact</NavLink></li>
            <li><NavLink to={"/login"}>Login</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar