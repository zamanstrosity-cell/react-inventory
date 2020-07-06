import React, { Component } from 'react'
import logo from '../../shelves.png'

class Header extends Component {
    render() {
        return (
            <React.Fragment>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Inventory System</p>
            </header>
            </React.Fragment>
        )
    }
}


export default Header