import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import './App.css';
import 'daisyui/dist/full.css'
import Home from './components/Home';
import About from './components/About';
import Artists from './components/Artists';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Footer from './components/Footer';
import Aftercare from './components/Aftercare';
import Header from './components/Header'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/auth')
    .then(r => {
      if (r.ok) {
        r.json().then(setUser)
      }
    })
  }, [])

  useEffect(() => {
    // Disable bounce effect on mount
    document.body.style.overscrollBehavior = 'none'

    return () => {
      document.body.style.overscrollBehavior = ''
    };
  }, [])
  return (
    <div className='App'>
     
      <NavBar />
      <Header />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/artists" element={<Artists user={user} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/aftercare" element={<Aftercare />} />
        </Routes>
        <Footer user={user} setUser={setUser} />
  </div>
 
  )
}

export default App
