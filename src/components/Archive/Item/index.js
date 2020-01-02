import React from 'react'
import './index.scss'
import Content from './Content'
import { CSSTransition } from 'react-transition-group'

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // calls parent component to set expanded to false
        this.props.click(this.props.year)
    }

    render() {
        return(
            <div className="Item">
                <div onClick={this.handleClick} className="container">
                    <h1>{this.props.year}</h1>
                    <div style={{background: this.props.color}} className="card">
                        <img src={require('../../../images/logo' + this.props.year + '.png')} alt={this.props.year + ' logo'} />
                    </div>
                </div>

                {/* Transition function to show if expanded is true and animate */}
                <CSSTransition
                    in={this.props.expanded}
                    timeout={500}
                    classNames="item"
                    unmountOnExit
                >
                    <Content />
                </CSSTransition>
            </div>
        );
    }
}

export default Item