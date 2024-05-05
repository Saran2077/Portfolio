import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to="/" className="h-10 w-10 rounded-lg shadow-md flex justify-center items-center bg-white font-bold">
            <p className='blue-gradient_text'>SS</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-500" : "text-black-500"}>
                About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "text-blue-500" : "text-black-500"}>
                Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar