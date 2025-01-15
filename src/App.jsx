import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Academy from "./pages/Academy";
import Navbar from "./components/Navbar";
import './App.css';


const App = () => {
  return (
    <div
      
    >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Academy' element={<Academy />} />
      </Routes>
    </div>
  );
};

export default App;