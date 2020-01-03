import React from 'react'
import './index.scss'

class Member extends React.Component {
    render() {
        return(
            <div className="Member">
                <img src={require("../../../../../../images/headshots/" + this.props.image)} 
                    className={"image " + this.props.image.split(".").join("")} 
                     alt="avatar"/>
                <h3 className="name">{this.props.name}</h3>
                <p className="position">{this.props.position}</p>
                <div className="social">

                </div>
            </div>
        );
    }
}

export default Member