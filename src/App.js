import React from 'react';
import Menu from '/components/Menu';
import SocialMedia from '/components/SocialMedia';
import Banner from '/components/Banner';
import FechaHora from '/components/FechaHora';
import DeportesAccion from '/components/DeportesAccion';
import AdrenalinaPura from '/components/AdrenalinaPura';
import './App.css';

function App() {
  return (
    <div className="app">
      <Menu />
      <SocialMedia />
      <Banner />
      <FechaHora />
      <DeportesAccion />
      <AdrenalinaPura />
    </div>
  );
}

export default App;
