import React from 'react';
import img2 from '../assets/img2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faChalkboardTeacher, faBuilding, faHandshake } from '@fortawesome/free-solid-svg-icons';

const servicesData = [
  {
    icon: faCamera,
    title: 'NUESTROS TRABAJOS',
    description: 'Trabajamos enfocados en lograr eventos fuera de serie. Nos caracteriza el compromiso, la fuerza de trabajo y el grupo humano ante todo.',
  },
  {
    icon: faChalkboardTeacher,
    title: 'FORMACIÓN',
    description: 'Ofrecemos talleres y cursos para el desarrollo de modelos profesionales.',
  },
  {
    icon: faBuilding,
    title: 'REPRESENTACIÓN',
    description: 'Representamos a modelos en eventos y campañas de alto nivel.',
  },
  {
    icon: faHandshake,
    title: 'COLABORACIONES',
    description: 'Fomentamos colaboraciones con marcas y diseñadores de renombre.',
  },
];

const Services = () => {
  return (
    <div
      className="services"
      style={{
        width: '100%',
        overflowX: 'hidden',
        backgroundImage: `url(${img2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '90vh',
        maxHeight: '90vh',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '40px',
        padding: '60px',
      }}
    >
      {servicesData.map((service, index) => (
        <div className="service-item" key={index}>
          <div className="service-circle">
            <FontAwesomeIcon icon={service.icon} className="service-icon" />
          </div>
          <h3 className="service-title">{service.title}</h3>
          <hr className="service-underline" />
          <p className="service-description">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;