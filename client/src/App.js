import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Artists from './components/Artists';
import Booking from './components/Booking';
import NavBar from './components/NavBar';
import Aftercare from './components/Aftercare';

function App() {
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
          <Route path="/aftercare" element={<Aftercare />} />
        </Routes>
      </div>
    
  );
}

export default App;

