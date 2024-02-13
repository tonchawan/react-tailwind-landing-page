import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Components
import Navbar from './components/Navbar'

import About from './components/About'

import Testimonials from './components/Testimonials'

import Hero from './components/Hero';
import singin  from './pages';




function App() {
  const [count, setCount] = useState(0)

  return (
    
      <Router>
        <header>
          <Navbar />
        </header>
        <body>
          <Hero />
          <About />
          <Testimonials />
        <Routes>
          <Route path='/' Component={singin} />
        </Routes>
        </body>
      </Router>
  )
}

export default App
