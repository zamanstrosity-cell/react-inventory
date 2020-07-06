import React from 'react';
import Header from './components/layout/Header';
import Inventory from './components/Inventory';
import AddItem from './components/AddItem';
import uuid from 'uuid/v4';
import UpdateModal from './components/layout/UpdateModal';
import './App.css';


class App extends React.Component {
  state = {
    inventory: [],
    pointer: ''
  }
  addProduct = (item) => {
    if(this.state.inventory.some(product => product.name === item.name)){
      this.setState({
        inventory: this.state.inventory.map(product => {
          if(product.name === item.name){
            product.quantity += parseInt(item.quantity);
            return product;
          } return product;
        })
      })
      return;
    }
    const newItem = {
      id: uuid(),
      name: item.name,
      quantity: parseInt(item.quantity),
      unit: item.unit
    }
    this.setState({
      inventory: [...this.state.inventory, newItem]
    })
  }
  updateQuantity = (item)=> {
      UpdateModal.setState({
        isOpen: true
      })
      this.setState({
        pointer: item.id,
      })
  }
  render() {
  return (
    <div className="App">
      <Header />
      <div className="container">
      <h1 style={{ width: '100%' }}>Inventory</h1>
      <AddItem addProduct={this.addProduct}/>
      <Inventory updateQuantity={this.updateQuantity} inventory= { this.state.inventory }> </Inventory>
      </div>
      <UpdateModal pointer={this.state.pointer}/>
    </div>
  );
}
}

export default App;
