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

    // collapseSection(element) {
    //     // get the height of the element's inner content, regardless of its actual size
    //     var sectionHeight = element.scrollHeight;

    //     // temporarily disable all css transitions
    //     var elementTransition = element.style.transition;
    //     element.style.transition = '';

    //     // on the next frame (as soon as the previous style change has taken effect),
    //     // explicitly set the element's height to its current pixel height, so we 
    //     // aren't transitioning out of 'auto'
    //     requestAnimationFrame(function () {
    //         element.style.height = sectionHeight + 'px';
    //         element.style.transition = elementTransition;

    //         // on the next frame (as soon as the previous style change has taken effect),
    //         // have the element transition to height: 0
    //         requestAnimationFrame(function () {
    //             element.style.height = 0 + 'px';
    //         });
    //     });

    //     // mark the section as "currently collapsed"
    //     element.setAttribute('data-collapsed', 'true');
    // }

    // expandSection(element) {
    //     // get the height of the element's inner content, regardless of its actual size
    //     var sectionHeight = element.scrollHeight;

    //     // have the element transition to the height of its inner content
    //     element.style.height = sectionHeight + 'px';

    //     // when the next css transition finishes (which should be the one we just triggered)
    //     element.addEventListener('transitionend', function (e) {
    //         // remove this event listener so it only gets triggered once
    //         element.removeEventListener('transitionend', arguments.callee);

    //         // remove "height" from the element's inline styles, so it can return to its initial value
    //         element.style.height = null;
    //     });

    //     // mark the section as "currently not collapsed"
    //     element.setAttribute('data-collapsed', 'false');
    // }

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
                    timeout={500}
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