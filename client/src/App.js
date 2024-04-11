import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'daisyui/dist/full.css';
import './index.css';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Artists from './components/Artists';
import Booking from './components/Booking';
import Aftercare from './components/Aftercare';
import Logo from './Photos/Logo.png';
import Footer from './components/Footer'

function App() {
  return (
    <div classname= "App bg-yellow-200">
      <div className="App-header relative ">
        <img src={Logo} alt="Logo" className="rounded-full h-32 mt-4 shadow-md z-10 mx-auto mb-4" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
          <div className="font-custom text-3xl">Have Fun Tattoo</div>
        </div>
      </div>

      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/aftercare" element={<Aftercare />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


