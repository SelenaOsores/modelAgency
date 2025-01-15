import React from 'react';
import model1 from '../assets/model1.jpg'; // Importa la imagen


const modelosData = [
  { name: 'Modelo 1', image: model1 },
  { name: 'Modelo 2', image: model1 },
  { name: 'Modelo 3', image: model1 },
  { name: 'Modelo 4', image: model1 },
  { name: 'Modelo 5', image: model1 },
  { name: 'Modelo 6', image: model1 },
  { name: 'Modelo 7', image: model1 },
  { name: 'Modelo 8', image: model1 },
  { name: 'Modelo 9', image: model1 },
  { name: 'Modelo 10', image: model1 },
  { name: 'Modelo 11', image: model1 },
  { name: 'Modelo 12', image: model1 },

];

const Modelos = () => {
  return (
    <div className="modelos-container">
      <div className="modelos-grid">
        {modelosData.map((modelo, index) => (
          <div className="modelo-item" key={index}>
            <img src={modelo.image} alt={modelo.name} className="modelo-image" />
            <h3 className="modelo-name">{modelo.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modelos;