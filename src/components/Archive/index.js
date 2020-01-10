import React from 'react'
import './index.scss'
import Item from './Item'
import archive from '../../archive';

class Archive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // controls all active items
            itemsExpanded: {}
        };
        this.handleClick = this.handleClick.bind(this);
    }

    // helper function to check if element is in the view port
    elementInViewport(el) {
        var top = el.offsetTop + 130;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        while (el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }

        return (
            top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset
        );
    }

    // closes all items when new one opens
    handleClick(keyParam) {        
        // copying state
        var temp = this.state.itemsExpanded;
        // checking if any other archives are opened
        var othersOpened = false;
        Object.keys(archive).map((key) =>
            temp[key] !== 0 ? othersOpened = true : null
        );
        // setting to 0 if item is already open
        if (temp[keyParam]) {
            temp[keyParam] = 0;
        }
        // setting everything to 0 before we open item
        else if (othersOpened) {
            var closed;
            // going through array and getting opened archive
            Object.keys(archive).map((key) => 
                temp[key] !== 0 ? (temp[key] = 0, closed = key) : null 
            );
            // opening desired archive
            temp[keyParam] = "auto";
            // Fixing scrolling proplem while other archive is closing
            if (parseInt(keyParam) < parseInt(closed)) {
                // checking if element content being closed is in the viewport
                if (this.elementInViewport(document.getElementById(closed + "Content"))) {
                    // OLD METHOD
                    // var node = document.getElementById(keyParam);
                    // setTimeout(() => node.scrollIntoView({ behavior: "smooth"}), 500);

                    // NEW METHOD

                    // scrollToPosition = [top position of item pressed] - [height of previous item content] + [offset]
                    var scrollToPosition = document.getElementById(keyParam).offsetTop - document.getElementById(closed + "Content").offsetHeight + 100
                    window.scrollTo({ 
                        top: scrollToPosition, 
                        behavior: "smooth"
                    })
                }
            }
        }
        else {
            temp[keyParam] = "auto";
        }

        // setting state
        this.setState({
            itemsExpanded: temp
        });
    }

    componentDidMount() {
        var temp = {};
        // populating state with items
        Object.keys(archive).map((key) =>
            temp[key] = 0
        );

        this.setState({
            itemsExpanded: temp
        })
    }

    render() {
        return(
            <div className="Archive">
                {/* Spawning items */}
                {Object.keys(archive).reverse().map((key) =>
                    <Item 
                        year={key} 
                        color={archive[key].color}
                        participants={archive[key].participants}
                        projects={archive[key].projects}
                        ended={archive[key].ended}
                        live={archive[key].live}
                        devpost={archive[key].devpost}
                        team={archive[key].team}
                        // handles click
                        click={this.handleClick}
                        // controls whether it is expanded or not
                        expanded={this.state.itemsExpanded[key]}
                        // passing over key (useless but clears warnings)
                        key={key} />
                )}
            </div>
        );
    }
}

export default Archive