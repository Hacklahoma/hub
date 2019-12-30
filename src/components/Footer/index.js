import React from 'react'
import './index.scss'
import Contact from './Contact'
import Copyright from './Copyright'

class Footer extends React.Component {
    render() {
        return(
            <div className="Footer">
                <Contact />
                <img className="trees" src={require('../../images/footerTrees.png')} alt="trees" />
                <img className="flyingLogo" src={require('../../images/flyingLogo.png')} alt="logo" />
                <Copyright />
            </div>
        );
    }
}

export default Footer