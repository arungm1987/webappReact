import React from 'react';
import logo from './logo.svg';
import bimage from './assets/images/suppimg.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bimage} className="App-logo" alt="logo" />   
        <p className="App-text" >
          Hello Suppi 
      </p>    
      </header>
     
       
    </div>
  );
}

export default App;
