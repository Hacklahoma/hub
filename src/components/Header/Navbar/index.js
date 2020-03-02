import React from 'react'
import './index.scss'
import Button from '../../Button'
import archive from '../../../config/archive';
import general from "../../../config/general";

class Navbar extends React.Component {
    liveYear = "www";
    showLive() {
        Object.keys(archive).map(key => (archive[key].live ? (this.liveYear = key) : null));

        return this.liveYear !== "www";
    }

    showJoin() {
        return general['joinButton'];
    }

    smoothScrollTo(el) {
        var element = document.getElementsByClassName(el)[0];
        var headerOffset = 0;
        if (el === "About") headerOffset = 50;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    render() {
        return (
            <div className="Navbar">
                <ul>
                    <li
                        onClick={() => {
                            this.smoothScrollTo("About");
                        }}
                    >
                        About
                    </li>
                    <li
                        onClick={() => {
                            this.smoothScrollTo("Archive");
                        }}
                    >
                        Archive
                    </li>
                    <li
                        onClick={() => {
                            this.smoothScrollTo("Footer");
                        }}
                    >
                        Contact
                    </li>
                    {/* {this.showLive ? <li className="live"><a target="_blank" rel="noopener noreferrer" href={this.liveLink}>LIVE</a></li> : null} */}
                    {this.showLive() ? (
                        <Button href={"https://" + this.liveYear + ".hacklahoma.org"} color="live red">
                            LIVE
                        </Button>
                    ) : null}
                    {this.showJoin() ? (
                        <Button href={"https://join.hacklahoma.org"} color="live green">
                            Join the Team
                        </Button>
                    ) : null}
                    {/* <Button href={"https://" + this.liveYear + ".hacklahoma.org"} color="live">LIVE</Button> */}
                </ul>
            </div>
        );
    }
}

export default Navbar