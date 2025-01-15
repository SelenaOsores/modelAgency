import React from 'react'
import Modelos from '../components/Modelos'
import logo from "../assets/logo.jpg";
import ConocerM from '../components/ConocerM';
import conocerImage from "../assets/conocer.jpg"
const Academy = () => {
  return (
    <div>
      <div className="agency-container">
      <div className="agency-content">
        <div className="agency-logo">
          <img src={logo} alt="Word Models Agency Logo" className="a-logo" />
        </div>
        <div className="agency-text">
          <h1>Nuestra agencia.</h1>
          <p className='agency-descripsion'>
            En Word Models Agency nos caracterizamos por ser una de las agencias más fuertes a nivel nacional, 
            proyectando a consolidar nuestra imagen de manera internacional. En Word Models Agency todos aquellos 
            que nos elijan saben que vamos detrás de la excelencia, para lograr sucesivamente el éxito.
          </p>
          <button className="contact-button">Contáctanos</button>
        </div>
      </div>
      <hr />
      <div className="agency-footer">
        <p>Seguinos en las redes</p>
        <a href="https://instagram.com/hbmodelsportfolio" target="_blank" rel="noopener noreferrer">
          @hbmodelsportfolio
        </a>
      </div>
    </div>
      <div style={{
            width: '100%',
            overflowX: 'hidden',
            backgroundImage: `url(${conocerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
            minHeight: '30vh', // Asegura que cubra toda la altura de la ventana
          }}>
      <ConocerM/>
      <hr className='modelos-hr'/>
      <Modelos/>
      </div>
      
    </div>
  )
}

export default Academy