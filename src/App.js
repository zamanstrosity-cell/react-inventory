import React from 'react';
import logo from './shelves.png';
import Inventory from './components/Inventory'
import './App.css';

function App() {

  let state = {
    inventory: [
      {
        id: 1,
        title: 'Tomatoes',
        quantity: '45',
        units: 'kilo'
      },
      {
        id: 2,
        title: 'Tomatoes',
        quantity: '45',
        units: 'kilo'
      },
      {
        id: 3,
        title: 'Tomatoes',
        quantity: '45',
        units: 'kilo'
      },
      {
        id: 4,
        title: 'Potto',
        quantity: '45',
        units: 'kilo'
      }
    ]
  }
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
