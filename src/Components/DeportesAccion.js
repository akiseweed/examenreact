import React from 'react';
import './DeportesAccion.css';
import banner1 from '../img/banner1.jpg';
import banner2 from '../img/banner2.jpg';
import banner3 from '../img/banner3.jpg';  
import banner4 from '../img/banner4.jpg';

const DeportesAccion = () => {
  return (
    <div className="deportes-accion">
      <h2>Deportes de Acción</h2>
      <div className="images-container">
        <img src="ciclismo1.jpg" alt="Ciclismo de montaña" />
        <img src="ciclismo2.jpg" alt="Ciclismo de montaña" />
        <img src="ciclismo3.jpg" alt="Ciclismo de montaña" />
      </div>
    </div>
  );
};

export default DeportesAccion;
