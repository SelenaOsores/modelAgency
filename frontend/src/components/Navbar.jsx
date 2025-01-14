import React from 'react';
import logo from "../assets/logo.jpg";
import userIcon from "../assets/icon.jpg"; // Asegúrate de que esta ruta sea correcta
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src={logo} alt="" style={{ width: '140px' }} />
      <ul className='sm:flex gap-5 text-lg text-gray-700 hidden'>
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to="/academy" className="flex flex-col items-center gap-1">
          <p>Academy</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to="/login" className="flex flex-col items-center gap-1">
          <p>Login</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-6'>
        {/*<div className='group relative'>
          <img src={userIcon} alt="User Icon" className='cursor-pointer w-8 h-8 rounded-full' />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My account</p>
              <p className='cursor-pointer hover:text-black'>My courses</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default Navbar;