import React from 'react'
import './index.scss'
import Navbar from './Navbar'

class Header extends React.Component {
    render() {
        return(
            <div className="Header">
                <Navbar />
                <div class="cloud"></div>
                <div class="cloud"></div>
                <div class="cloud"></div>
                <div class="content">
                    <h1>Hacklahoma</h1>
                    <img src='./images/flying-logo.png' alt="logo" />
                </div>
            </div>
        );
    }
}

export default Header