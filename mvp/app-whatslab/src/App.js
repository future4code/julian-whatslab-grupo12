import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ContainerConversa } from './components/ContainerConversa';
import { AdicionarMensagem } from './components/AdicionarMensagem';



function App() {
  return (
    <div className="App">
      <ContainerConversa/>
      <AdicionarMensagem/>
    </div>
  );
}

export default App;
