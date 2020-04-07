import React from 'react';
import Editor from './Editor';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>TESTE DE IMPLEMENTAÇÃO</h1>
        <p> Escreva seu texto abaixo, estilize e gere uma string HTML </p>
      </header>
      <Editor width='70vw' />
    </div>
    
  );
}

export default App;
