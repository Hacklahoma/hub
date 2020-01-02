import React from 'react'
import './index.scss'
import Button from '../../../Button'

class Content extends React.Component {

    renderInfo() {
        if(this.props.ended)
            return (
                <p className="info">This year we had <code>{this.props.participants} participants</code> and <code>{this.props.projects} projects</code> submitted.</p>
            );
        else
            return (
                <p className="info">This year we expect <code>{this.props.participants} participants</code> and <code>{this.props.projects} project</code> submissions.</p>
            );
    }

    renderButtons() {
        if (this.props.devpost !== null)
            return (
                <p className="buttons">
                    <Button href={"https://" + this.props.year + ".hacklahoma.org"} color="green">Website</Button>
                    <Button href={this.props.devpost} color="blue">Devpost</Button>
                </p>
            );
        else
            return (
                <p className="buttons">
                    <Button href={"https://" + this.props.year + ".hacklahoma.org"} color="green">Website</Button>
                </p>
            );
    }

    render() {
        return(
            <div className="Content">
                <div className="container">
                    {this.renderInfo()}
                </div>
                <div className="container">
                    {this.renderButtons()}
                </div>
            </div>
        );
    }

    // componentDidUpdate() {
    //     document.getElementsByClassName("Content")[0].style.animation = "spawn .5s reverse";
    //     setTimeout(
    //         () => null,
    //         5000
    //     );
    // }
}

export default Content