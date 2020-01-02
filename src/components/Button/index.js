import React from 'react'
import './index.scss'

class Button extends React.Component {
    render() {
        return(
            <a className={"Button " + this.props.color} target="_blank" rel="noopener noreferrer" href={this.props.href}>
                {this.props.children}
            </a>
        );
    }
}

export default Button