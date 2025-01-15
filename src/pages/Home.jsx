import React from 'react'
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import heroImage from '../assets/hola.jpg';

const Home = () => {
  return (
    <div style={{
      width: '100%',
      overflowX: 'hidden',
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
      minHeight: '100vh', // Asegura que cubra toda la altura de la ventana
    }}>
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
  )
}

export default Home