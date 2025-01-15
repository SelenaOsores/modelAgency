import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; // Importa desde el paquete de marcas
import IntroSection from '../components/IntroSection';

const Contacto = () => {
  return (
    <div className="contact-info">
      <IntroSection/>
      <div className="contact-item">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
        <h3>DIRECCIÓN</h3>
        <p>Mariquita Sanchez de Thompson 373<br />Barrio Norte, San Miguel de Tucuman, Argentina</p>
      </div>
      <div className="contact-item">
        <FontAwesomeIcon icon={faPhone} className="contact-icon" />
        <h3>TELÉFONO</h3>
        <p>Whatsapp: +54 9 11 5320-0723</p>
      </div>
      <div className="contact-item">
        <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
        <h3>EMAIL</h3>
        <p>info@WMA.com.ar</p>
      </div>
      <div className="contact-item">
        <FontAwesomeIcon icon={faInstagram} className="contact-icon" />
        <h3>INSTAGRAM</h3>
        <p>@patrydelalva</p>
      </div>
    </div>
  );
};

export default Contacto;