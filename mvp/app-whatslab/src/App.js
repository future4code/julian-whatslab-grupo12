import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import { ConversaMensagem } from './components/ConversaMensagem';
import styled from "styled-components"

const ContainerPrincipal = styled.div`
  max-width: 600px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #e5ddd5;
  border-width: 1px;
  border-color: black;
  border-style: solid;
  flex: 1 1 0%;
`

function App() {
  return (
    <div>
      <ContainerPrincipal>
        <ConversaMensagem/> 
      </ContainerPrincipal>
    </div>
  );
}

export default App;
