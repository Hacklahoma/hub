import React from 'react'
import './index.scss'
import Item from './Item'

class Archive extends React.Component {
    render() {
        return(
            <div className="Archive">
                <Item year="2020" color="#B8DCEC" />
                <Item year="2019" color="#FFEED0" />
                <Item year="2018" color="#333333" />
            </div>
        );
    }
}

export default Archive