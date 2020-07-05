import React from 'react';

class AddItem extends React.Component {
    render() {
        return (
            <div className="card">
                <div>{ this.props.item.name }</div>
                <div>{ this.props.item.quantity}</div>
                <div>{ this.props.item.units}</div>
                <div><button className="btn btn-primary">Update Quantity</button></div>
                <div><button className="btn btn-danger">Delete Item</button></div>
            </div>
        )
    }
}

export default AddItem
