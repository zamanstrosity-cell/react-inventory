import React from 'react'
import Item from './Item';

const Inventory = props => {
    return (props.inventory.map(item => (
        <Item
        key={item.id}
        updateQuantity={props.updateQuantity}
        deleteItem={props.deleteItem}
        item={item}
        />)))
    }

    export default Inventory