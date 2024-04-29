import React from 'react';
import Menu from '../Menu';
import FechaHora from '../FechaHora';
import Banner from '../Banner';
import SocialMedia from '../SocialMedia';
import DeportesAccion from '../DeportesAccion';
import AdrenalinaPura from '../AdrenalinaPura';
import './agencia.css'; 
const Agencia = () => {
    return (
        <div>
        <SocialMedia/>
        <Menu/>
        <h1 className="agencia-title">Agencia de Turismo el Condor</h1>
        </div>
    );
};
export default Agencia;