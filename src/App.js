import React from 'react';
import logo from './shelves.png';
import Inventory from './components/Inventory';
import './App.css';

class App extends React.Component {
  state = {
    inventory: [
      {
        name: 'Tomatoes',
        quantity: '45',
        units: 'kilo'
      },
      {
        name: 'Tomatoes',
        quantity: '45',
        units: 'kilo'
      },
      {
        name: 'Tomatoes',
        quantity: '45',
        units: 'kilo'
      },
      {
        name: 'Potato',
        quantity: '45',
        units: 'kilo'
      }
    ]
  }
  render() {
  return (
    <React.Fragment>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Inventory System</p>
      </header>
      <div className="container">
      <h1 style={{ width: '100%'}}>Inventory</h1>
      <Inventory inventory={this.state.inventory} />
      </div>
    </div>
    </React.Fragment>
  );
}
}

export default App;
