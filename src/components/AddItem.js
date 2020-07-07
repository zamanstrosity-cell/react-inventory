import React, { useState } from 'react';

const AddItem = props => {
    const [item, setItem] = useState({
        name: '',
        quantity: '',
        unit: ''
    })
    const handleInput = e => {
        const value = e.target.value;
        setItem({
            ...item,
            [e.target.name]: value
        })
    }
    const onSubmit = e => {
        e.preventDefault();
        props.addProduct(item);
        setItem({
            name: '',
            quantity: '',
            unit: ''
        })
    }
    return (
        <React.Fragment>
        <form className="add-product" onSubmit= {onSubmit} style={{ width: '100%' }}>
            <input type="text" onChange={ handleInput } value={item.name} name="name" placeholder="Name" required/>
            <input type="number" onChange={ handleInput } value={item.quantity} name="quantity" placeholder="Quantity" required/>
            <input type="text" onChange={ handleInput } value={item.unit} name="unit" placeholder="Units" required/>
            <button type="submit" className="btn btn-success">Add Item</button>
        </form>
        </React.Fragment>
    )
}

export default AddItem
