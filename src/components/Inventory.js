import React from 'react'
import Item from './Item';

export default function Inventory(props){
    return (props.inventory.map(item => (
        <Item
        key={item.id}
        updateQuantity={props.updateQuantity}
        deleteItem={props.deleteItem} 
        item={item} 
        />)))
    }
