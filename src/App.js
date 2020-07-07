import React, { useState } from 'react';
import Header from './components/layout/Header';
import Inventory from './components/Inventory';
import AddItem from './components/AddItem';
import uuid from 'uuid/v4';
import UpdateModal from './components/layout/UpdateModal';
import './App.css';

const App = () => {
  const [inventory, setInventory] = useState([]);
  const [pointer, setPointer] = useState('');
  const [showModal, setModal] = useState(false)

  const addProduct = (item) => {
    if(inventory.some(product => product.name === item.name)){
      setInventory(inventory =>
        inventory.map(product => {
          if(product.name === item.name){
            product.quantity += parseInt(item.quantity);
            return product;
          } return product;
        })
      )
      return;
    }
    const newItem = {
      id: uuid(),
      name: item.name,
      quantity: parseInt(item.quantity),
      unit: item.unit
    }
    setInventory(inventory => [...inventory, newItem])
  }

  const toggleModal = () => {
    setModal(!showModal)
  }

  const updateQuantity = (item)=> {
      setPointer(item.id)
      toggleModal();
  }

  const confirmUpdate = (quantity, pointer) => {
    setInventory(inventory => inventory.map(item => {
        if(item.id === pointer){
          item.quantity = quantity;
          return item;
        }
        return item;
      })
    )

  }
  const deleteItem = (id) => {
    setInventory(inventory=>
      inventory.filter(item => item.id !== id)
    )
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <h1 style={{ width: '100%' }}>Inventory</h1>
        <AddItem addProduct={addProduct}/>
        <Inventory updateQuantity={updateQuantity} deleteItem={deleteItem} inventory={inventory} />
      </div>
      <UpdateModal toggleModal={toggleModal} confirmUpdate={confirmUpdate} showModal={showModal} pointer={pointer}/>
    </div>
  )
}

export default App;
