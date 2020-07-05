import React from 'react';
import logo from './shelves.png';
import Inventory from './components/Inventory'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Inventory System</p>
      </header>
      <div className="container">
      <Inventory />
      </div>
    </div>
  );
}

export default App;
