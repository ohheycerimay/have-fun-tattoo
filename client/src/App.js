import React from 'react'
import { Route, Routes } from 'react-router-dom'
import 'daisyui/dist/full.css'
import './index.css'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Artists from './components/Artists'
import Booking from './components/Booking'
import Aftercare from './components/Aftercare'
import Logo from './Photos/Logo.png'
import Footer from './components/Footer'

function App() {
  return (
    <div classname="App bg-yellow-200">
      <NavBar />
      <div className="App-header relative text-center mt-8">
        <img
          src={Logo}
          alt="Logo"
          className="rounded-full h-28 mt-12 shadow-md z-10 mx-auto mb-12"
        />
        <div className="absolute top-0 left-0 right-0 text-cyan-600 font-custom font-bold text-5xl mb-12 ">
          Have Fun
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-cyan-600 font-custom font-bold text-5xl mt-4">
          Tattoo
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/aftercare" element={<Aftercare />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
