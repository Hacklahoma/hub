import React from 'react'
import './index.scss'
import Item from './Item'
import archive from '../../archive';

class Archive extends React.Component {
    render() {
        return(
            <div className="Archive">
                {Object.keys(archive).reverse().map((key) =>
                    <Item 
                        year={key} 
                        color={archive[key].color}
                        devpost={archive[key].devpost}
                        team={archive[key].team}
                        key={key} />
                )}
            </div>
        );
    }
}

export default Archive