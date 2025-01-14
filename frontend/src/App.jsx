import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Contact from "./pages/Contact"
import Academy from "./pages/Academy"
import Navbar from "./components/Navbar"
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:-[7vw] lg:-[9vw]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Academy' element={<Academy/>}/>
      </Routes>
    </div>
  )
}

export default App