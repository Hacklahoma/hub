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
                    {this.props.instagram ? <a target="_blank" rel="noopener noreferrer" href={this.props.instagram}><img alt="instagram" src={require('../../../../../../images/instagram.png')} /></a> : null }
                    {this.props.twitter ? <a target="_blank" rel="noopener noreferrer" href={this.props.twitter}><img alt="twitter" src={require('../../../../../../images/twitter.png')} /></a> : null }
                    {this.props.linkedin ? <a target="_blank" rel="noopener noreferrer" href={this.props.linkedin}><img alt="linkedin" src={require('../../../../../../images/linkedin.png')} /></a> : null}
                    {this.props.github ? <a target="_blank" rel="noopener noreferrer" href={this.props.github}><img alt="github" src={require('../../../../../../images/github.png')} /></a> : null}
                </div>
            </div>
        );
    }
}

export default Member