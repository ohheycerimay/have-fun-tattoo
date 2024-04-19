import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-2 left-2 z-50 bg-red-500 h-24 w-24 flex items-center justify-center rounded-full">
      <button className="focus:outline-none" onClick={toggleMenu}>
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-20 left-0 z-50 bg-white shadow-lg py-2 w-40 rounded">
          <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={closeMenu}>About</Link>
          <Link to="/artists" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={closeMenu}>Artists</Link>
          <Link to="/aftercare" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={closeMenu}>Aftercare</Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
