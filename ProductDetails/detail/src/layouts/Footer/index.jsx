import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div className="about">

        <NavLink to={"/about"}></NavLink>
        </div>
        <div className="contact">

        <NavLink to={"/contact"}></NavLink>
        </div>

    </div>
  )
}

export default Footer