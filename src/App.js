import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importa Routes y Route si estás usando React Router
import './App.css';
import Menu from './Components/Menu'; // Corrige la ruta de importación
import Agencia from './Components/Modulos/Agencia'; // Corrige la ruta de importación
import SocialMedia from './Components/SocialMedia'; // Corrige la ruta de importación
import Banner from './Components/Banner'; // Corrige la ruta de importación
import FechaHora from './Components/FechaHora'; // Corrige la ruta de importación
import DeportesAccion from './Components/DeportesAccion'; // Corrige la ruta de importación
import AdrenalinaPura from './Components/AdrenalinaPura'; // Corrige la ruta de importación

function App() {
  return (
    <Routes>
      <Route path='/agencia' element={<Agencia/>}></Route>
      <Route path='/menu' element={<Menu/>}></Route>
      <Route path='/banner' element={<Banner/>}></Route>
      <Route path='/socialmedia' element={<SocialMedia/>}></Route>
      <Route path='/fechahora' element={<FechaHora/>}></Route>
      <Route path='/deportesaccion' element={<DeportesAccion/>}></Route>
      <Route path='/adrenalinapura' element={<AdrenalinaPura/>}></Route>
    </Routes>
  );
}

export default App;
