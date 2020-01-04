import React from 'react'
import './index.scss'
import Content from './Content'
import { CSSTransition } from 'react-transition-group'
import AnimateHeight from 'react-animate-height'
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
            <div className="Item" id={this.props.year}>
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
                <AnimateHeight
                    duration={500}
                    height={this.props.expanded === undefined ? 0 : this.props.expanded}
                    style={{
                        position: "relative",
                        marginBottom: this.props.expanded === "auto" ? "-100px" : "0",
                        transition: ".5s",
                        bottom: "130px"
                    }}
                >
                    <CSSTransition
                        in={(this.props.expanded === 0 ) ? false : true}
                        timeout={500}
                        classNames="item"
                        unmountOnExit
                    >
                        <Content ended={this.props.ended}
                                participants={this.props.participants} 
                                projects={this.props.projects} 
                                year={this.props.year} 
                                team={this.props.team}
                                devpost={this.props.devpost} />
                    </CSSTransition>
                </AnimateHeight>
            </div>
        );
    }
}

export default Item