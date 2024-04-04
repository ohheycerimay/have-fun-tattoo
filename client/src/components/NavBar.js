// NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="bg-cyan-400 text-white font-custom py-4 text-center">
      <div className="container mx-auto">
        <ul className="text-center">
          <li><NavLink to="/" className="hover:text-gray-300">Home</NavLink></li>
          <li><NavLink to="/about" className="hover:text-gray-300">About</NavLink></li>
          <li><NavLink to="/artists" className="hover:text-gray-300">Artists</NavLink></li>
          <li><NavLink to="/booking" className="hover:text-gray-300">Booking Policies</NavLink></li>
          <li><NavLink to="/aftercare" className="hover:text-gray-300">Aftercare</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
