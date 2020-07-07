import React from 'react'
import logo from '../../shelves.png'
const Header = () => {
    return (
        <React.Fragment>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Inventory System</p>
        </header>
        </React.Fragment>
    )
}

export default Header
