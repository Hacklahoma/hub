import React from 'react'
import './index.scss'

class Navbar extends React.Component {

    // **************
    // CONFIG
    // **************
    showLive = true; // show live in navbar
    liveLink = "https://2020.hacklahoma.org"; // live website

    scrollToTargetAdjusted(el) {
        var element = document.getElementsByClassName(el)[0];
        var headerOffset = 0;
        if(el === "About") 
            headerOffset = 50;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    render() {
        return(
            <div className="Navbar">
                <ul>
                    <li onClick={() => {this.scrollToTargetAdjusted('About')}}>About</li>
                    <li onClick={() => {this.scrollToTargetAdjusted('Archive')}}>Archive</li>
                    <li onClick={() => {this.scrollToTargetAdjusted('Footer')}}>Contact</li>
                    {this.showLive ? <li className="live"><a target="_blank" rel="noopener noreferrer" href={this.liveLink}>LIVE</a></li> : null}
                </ul>
            </div>
        );
    }
}

export default Navbar