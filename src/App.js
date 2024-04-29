import React from 'react';
import './App.css';
import Menu from '/components/Menu';
import Agencia from './components/Modulos/Agencia';
import SocialMedia from '/components/SocialMedia';
import Banner from '/components/Banner';
import FechaHora from './components/FechaHora';
import DeportesAccion from './components/DeportesAccion';
import AdrenalinaPura from '/components/AdrenalinaPura';

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