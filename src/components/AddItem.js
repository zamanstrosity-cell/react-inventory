import React from 'react';
import uuid from 'uuid';


class AddItem extends React.Component {
    state = {
        item: {
            name: '',
            quantity: '',
            unit: ''
        }
    }
    handleInput = e => {
        const value = e.target.value;
        this.setState({
            item: {
                ...this.state.item,
                [e.target.name]: value
            }
        })
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.addProduct(this.state.item);
        this.setState({
            item: {
                name: '',
                quantity: '',
                unit: ''
            }
        })
    }
    render() {
        return (
            <React.Fragment>
                <form className="add-product" onSubmit= {this.onSubmit} style={{ width: '100%' }}>
                    <input type="text" onChange={ this.handleInput } value={this.state.item.name} name="name" placeholder="Name" required/>
                    <input type="number" onChange={ this.handleInput } value={this.state.item.quantity} name="quantity" placeholder="Quantity" required/>
                    <input type="text" onChange={ this.handleInput } value={this.state.item.unit} name="unit" placeholder="Units" required/>
                    <button type="submit" className="btn btn-success">Add Item</button>
                </form>
            </React.Fragment>
        )
    }
}

export default AddItem
