import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Artists from './components/Artists';
import Booking from './components/Booking';
import NavBar from './components/NavBar';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null)

  return (
   
      <div className="App">
        <div className="App-header">
          <div className="font-custom">Have Fun Tattoo</div>
        </div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
        </Routes>
      </div>
    
  );
}

export default App;

