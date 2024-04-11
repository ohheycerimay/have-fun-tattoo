// Footer.js
import React from 'react';

function Footer({user, setUser}) {
  const handleLogout = () => {
    fetch('/logout', {method: 'DELETE'})
    .then(r => {
        if (r.ok) {
            setUser(null)
        }
    })
  }

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Have Fun Tattoo. All rights reserved.</p>
      </div>
      {user? <button className="hover:text-gray-300" onClick={handleLogout}>Log Out</button> : null}
    </footer>
  );
}

export default Footer;

