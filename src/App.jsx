import './App.css'
import Axios from 'axios'
import { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom' 
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { Contact } from './pages/Contact'
import { Navbar } from './NavBar'




function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>}/>
        </Routes>
      </Router>
    </div>
  )
}




export default App
