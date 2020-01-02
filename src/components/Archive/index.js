import React from 'react'
import './index.scss'
import Item from './Item'
import archive from '../../archive';

class Archive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // controls all active items
            itemsExpanded: {},
            inMotion: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    // closes all items when new one opens
    handleClick(keyParam) {        
        // copying state
        var temp = this.state.itemsExpanded;
        // setting to false if item is already open
        if (temp[keyParam]) {
            temp[keyParam] = false;
        }
        // setting everything to false before we open item
        else {
            Object.keys(archive).map((key) => 
                temp[key] = false
            );
            temp[keyParam] = true;
        }

        // setting state
        this.setState({
            itemsExpanded: temp,
            inMotion: false
        });
    }

    componentDidMount() {
        var temp = {};
        // populating state with items
        Object.keys(archive).map((key) =>
            temp[key] = false
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