import React from 'react'
import './index.scss'
import Content from './Content'
import { CSSTransition } from 'react-transition-group'
import Button from '../../Button'

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
                <div className="container">
                    {/* year and live if applicable */}
                    <h1>{this.props.year} {this.props.live ? (<Button href={"https://" + this.props.year + ".hacklahoma.org"} color="live">LIVE</Button>) : null}</h1>
                    {/* card */}
                    <div onClick={this.handleClick} style={{background: this.props.color}} className="card">
                        {/* logo */}
                        <img src={require('../../../images/logo' + this.props.year + '.png')} alt={this.props.year + ' logo'} />
                    </div>
                </div>

                {/* Transition function to show if expanded is true and animate */}
                <CSSTransition
                    in={this.props.expanded}
                    timeout={1000}
                    classNames="item"
                    unmountOnExit
                >
                    <Content ended={this.props.ended}
                             participants={this.props.participants} 
                             projects={this.props.projects} 
                             year={this.props.year} 
                             devpost={this.props.devpost} />
                </CSSTransition>
            </div>
        );
    }
}

export default Item