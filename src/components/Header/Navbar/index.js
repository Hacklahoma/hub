import React from 'react'
import './index.scss'

class Navbar extends React.Component {
    render() {
        return(
            <div className="Navbar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Archive</li>
                    <li>Contact</li>
                </ul>
            </div>
        );
    }
}

export default Navbar