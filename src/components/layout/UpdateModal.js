import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";


const UpdateModal = props => {

    const [quantity, quantitySet] = useState('')

    const handleChange = e => {
        quantitySet(parseInt(e.target.value))
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.confirmUpdate(quantity, props.pointer);
        props.toggleModal();
        quantitySet('');
    }

    return (
        <Modal show={props.showModal}>
            <Modal.Header>
                <h5>Update Quantity</h5>
                <button onClick={props.toggleModal} className="btn btn-danger">Cancel</button>
            </Modal.Header>
            <Modal.Body>
                <form style={{ display: 'flex', justifyContent: 'space-around'}} onSubmit={handleSubmit} className="update-modal">
                    <input type="number" name="quantity" value={quantity} onChange={handleChange}/>
                    <input type="submit" value="Update Quantity" className="btn btn-secondary" />
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default UpdateModal
