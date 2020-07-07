// import React from 'react';
// import Header from './components/layout/Header';
// import Inventory from './components/Inventory';
// import AddItem from './components/AddItem';
// import uuid from 'uuid/v4';
// import UpdateModal from './components/layout/UpdateModal';
// import './App.css';


// class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.Modal = React.createRef()
//   }
//   state = {
//     inventory: [],
//     pointer: ''
//   }
//   addProduct = (item) => {
//     if(this.state.inventory.some(product => product.name === item.name)){
//       this.setState({
//         inventory: this.state.inventory.map(product => {
//           if(product.name === item.name){
//             product.quantity += parseInt(item.quantity);
//             return product;
//           } return product;
//         })
//       })
//       return;
//     }
//     const newItem = {
//       id: uuid(),
//       name: item.name,
//       quantity: parseInt(item.quantity),
//       unit: item.unit
//     }
//     this.setState({
//       inventory: [...this.state.inventory, newItem]
//     })
//   }
//   updateQuantity = (item)=> {
//       this.Modal.current.toggleModal();
//       this.setState({
//         pointer: item.id,
//       })
//   }
//   confirmUpdate = (quantity, pointer) => {
//     this.setState({
//       inventory: this.state.inventory.map(item => {
//         if(item.id === pointer){
//           item.quantity = quantity;
//           console.log(quantity);
//           return item;
//         }
//         return item;
//       })
//     })
//   }
//   deleteItem = (id) => {
//     this.setState({
//       inventory: this.state.inventory.filter(item => item.id !== id)
//     })
//   }
//   render() {
//   return (
//     <div className="App">
//       <Header />
//       <div className="container">
//       <h1 style={{ width: '100%' }}>Inventory</h1>
//       <AddItem addProduct={this.addProduct}/>
//       <Inventory updateQuantity={this.updateQuantity} deleteItem={this.deleteItem} inventory= { this.state.inventory }> </Inventory>
//       </div>
//       <UpdateModal confirmUpdate={this.confirmUpdate} ref={this.Modal} pointer={this.state.pointer}/>
//     </div>
//   );
// }
// }

// export default App;

import React, { useState } from 'react';
import Header from './components/layout/Header';
import Inventory from './components/Inventory';
import AddItem from './components/AddItem';
import uuid from 'uuid/v4';
import UpdateModal from './components/layout/UpdateModal';
import './App.css';

const App = () => {
  const [inventory, setInventory] = useState([]);
  const [pointer, setPointer] = useState('')
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
  const updateQuantity = (item)=> {
      setPointer(item.id)
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
      <UpdateModal confirmUpdate={confirmUpdate} pointer={pointer}/>
    </div>
  )
}

export default App;
