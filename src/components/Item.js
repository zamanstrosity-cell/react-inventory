import React, { Component } from 'react'

export class Item extends Component {
    render() {
        return (
            <div className="card">
                <div>{ this.props.item.name }</div>
                <div>{ this.props.item.quantity }</div>
                <div>{ this.props.item.unit }</div>
                <div><button onClick={this.props.updateQuantity.bind(this, this.props.item)} className="btn btn-primary">Update Quantity</button></div>
                <div><button onClick={this.props.deleteItem.bind(this, this.props.item.id)} className="btn btn-danger">Delete Item</button></div>
            </div>
        )
    }
}

export default Item
