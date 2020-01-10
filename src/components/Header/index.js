import React from 'react'
import './index.scss'
import Navbar from './Navbar'

class Header extends React.Component {
    render() {
        return(
            <div className="Header">
                <Navbar />
                <div className="content">
                    <div className="cloudContent">
                        <div className="cloudFade">
                            <div className="cloud"></div>
                        </div>
                        <div className="cloudFade">
                            <div className="cloud"></div>
                        </div>
                        <div className="cloudFade">
                            <div className="cloud"></div>
                        </div>
                    </div>
                    <div className="brandContent">
                        <img src={require('../../images/flyingLogo.png')} alt="logo" />
                        <h1>Hacklahoma</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header