import React from 'react'
import './index.scss'

class Item extends React.Component {
    render() {
        return(
            <div className="Item">
                <div className="container">
                    <h1>{this.props.year}</h1>
                    <div style={{background: this.props.color}} className="card">
                        <img src={require('../../../images/logo' + this.props.year + '.png')} alt={this.props.year + ' logo'} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Item