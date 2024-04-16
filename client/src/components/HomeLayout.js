// HomeLayout.js
import React from 'react';
import Logo from '../Photos/Logo.png';

function HomeLayout({ children }) {
  return (
    <div className="App bg-yellow-200">
      <div className="App-header relative text-center">
        <img src={Logo} alt="Logo" className="rounded-full h-24 mt-12 shadow-md z-10 mx-auto mb-12" />
        <div className="absolute top-0 left-0 right-0 text-cyan-600 font-custom font-bold text-5xl mb-12">
          Have Fun
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-cyan-600 font-custom font-bold text-5xl mt-4">
          Tattoo
        </div>
      </div>
      {children}
    </div>
  );
}

export default HomeLayout;
