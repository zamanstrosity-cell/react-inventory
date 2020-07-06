import React, { Component } from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

class UpdateModal extends Component {
    state = {
        quantity: '',
        isOpen: false
    }
    closeModal = e => {
        this.setState(
            { isOpen: false }
        )
    }
    handleChange = e => {
        this.setState({
            quantity: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
    }
    render() {
        return (
            <Modal show={this.state.isOpen}>
                <Modal.Header>
                <h5>Update Quantity</h5>
                <button onClick={this.closeModal} className="btn btn-danger">Cancel</button>
                </Modal.Header>
                <Modal.Body>
                    <form style={{ display: 'flex', justifyContent: 'space-around'}} onSubmit={this.handleSubmit} className="update-modal">
                        <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange}/>
                        <input type="submit" value="Update Quantity" className="btn btn-secondary" />
                    </form>
                </Modal.Body>
            </Modal>
        )
    }
}

export default UpdateModal
