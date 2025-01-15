import React from 'react';
import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" className="logo" />
      <ul className='nav-links'>
        <NavLink to="/" className="nav-item">
          <p>Home</p>
          <hr className='nav-underline' />
        </NavLink>
        <NavLink to="/academy" className="nav-item">
          <p>Agencia</p>
          <hr className='nav-underline' />
        </NavLink>
        <NavLink to="/contact" className="nav-item">
          <p>Contact</p>
          <hr className='nav-underline' />
        </NavLink>
        <NavLink to="/login" className="nav-item">
          <p>Login</p>
          <hr className='nav-underline' />
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;