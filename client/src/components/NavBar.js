// NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom'

function NavBar({user, setUser}) {
  const handleLogout = () => {
    fetch('/logout', {method: 'DELETE'})
    .then(r => {
        if (r.ok) {
            setUser(null)
        }
    })
  }

  return (
    <nav className="bg-cyan-400 text-white font-custom py-4">
      <div className="container mx-auto">
        <ul className="flex space-x-4">
          <li><NavLink to="/" className="hover:text-gray-300">Home</NavLink></li>
          <li><NavLink to="/about" className="hover:text-gray-300">About</NavLink></li>
          <li><NavLink to="/artists" className="hover:text-gray-300">Artists</NavLink></li>
          <li><NavLink to="/booking" className="hover:text-gray-300">Booking</NavLink></li>
          {user? <li><button className="hover:text-gray-300" onClick={handleLogout}>Log Out</button></li> : null}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
