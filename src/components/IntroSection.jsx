import React from 'react';
import IntroImage from '../assets/facility.jpg'; // Asegúrate de que la ruta sea correcta

const IntroSection = () => {
  return (
    <div className="intro-section" style={{ backgroundImage: `url(${IntroImage})` }}>
      <div className="intro-content">
        <h1>DA EL PRIMER PASO</h1>
        <p>Escribinos o llamanos, estamos esperando tu contacto.</p>
        <hr className="intro-underline" />
      </div>
    </div>
  );
};

export default IntroSection;