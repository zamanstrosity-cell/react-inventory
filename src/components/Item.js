import React from 'react'

export default function Item(props) {
    return (
        <div className="card">
            <div>{ props.item.name }</div>
            <div>{ props.item.quantity }</div>
            <div>{ props.item.unit }</div>
            <div><button onClick={props.updateQuantity.bind(this, props.item)} className="btn btn-primary">Update Quantity</button></div>
            <div><button onClick={props.deleteItem.bind(this, props.item.id)} className="btn btn-danger">Delete Item</button></div>
        </div>
    )
}
