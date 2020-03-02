import React from 'react'
import './index.scss'

class Loading extends React.Component {
    render() {
        return (
            <div className="Loading">
                <div className="container">
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                </div>
            </div>
        );
    }
}

export default Loading