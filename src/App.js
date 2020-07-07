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
    pointer: '',
    showModal: false
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

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  updateQuantity = (item)=> {
      this.toggleModal();
      this.setState({
        pointer: item.id,
      })
  }

  confirmUpdate = (quantity) => {
    this.setState({
      inventory: this.state.inventory.map(item => {
        if(item.id === this.state.pointer){
          item.quantity = quantity;
          return item;
        }
        return item;
      })
    })
  }

  deleteItem = (id) => {
    this.setState({
      inventory: this.state.inventory.filter(item => item.id !== id)
    })
  }

  render() {
  return (
    <div className="App">
      <Header />
      <div className="container">
      <h1 style={{ width: '100%' }}>Inventory</h1>
      <AddItem addProduct={this.addProduct}/>
      <Inventory updateQuantity={this.updateQuantity} deleteItem={this.deleteItem} inventory= { this.state.inventory }> </Inventory>
      </div>
      <UpdateModal confirmUpdate={this.confirmUpdate} toggleModal={this.toggleModal} showModal={this.state.showModal} />
    </div>
  );
}
}

export default App;
