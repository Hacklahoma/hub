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

    // closes all items when new one opens
    handleClick(keyParam) {        
        // copying state
        var temp = this.state.itemsExpanded;
        // setting to 0 if item is already open
        if (temp[keyParam]) {
            temp[keyParam] = 0;
        }
        // setting everything to 0 before we open item
        else {
            Object.keys(archive).map((key) => 
                temp[key] = 0
            );
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