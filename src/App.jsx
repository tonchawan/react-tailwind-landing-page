import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  

// Components
import Navbar from './components/Navbar'
import singin  from './pages';
import Home from './components/Home';




function App() {
  const [count, setCount] = useState(0)

  return (
    
      <Router>
        <header>
          <Navbar />
        </header>
        <body>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/sigin' Component={singin} />
        </Routes>
        </body>
      </Router>
  )
}

export default App
