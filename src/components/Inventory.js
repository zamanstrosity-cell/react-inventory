import React, { Component } from 'react'
import Item from './Item';

class Inventory extends Component {
    render() {
        return this.props.inventory.map(item => (
            <Item
            key={item.id}
            updateQuantity={this.props.updateQuantity}
            deleteItem={this.props.deleteItem}
            item={item}
            />
        ))
    }
}

export default Inventory
