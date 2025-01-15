import React from 'react';
import heroImage from '../assets/hola.jpg';

const HeroSection = () => {
  return (
    <section className="hero" style={{
        width: '100%',
        overflowX: 'hidden',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
        minHeight: '100vh', // Asegura que cubra toda la altura de la ventana
      }}>
      <h1 className='hero-text'>Un paso adelante de la moda</h1>
    </section>
  );
};

export default HeroSection;