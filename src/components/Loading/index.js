import React from 'react'
import './index.scss'

class Loading extends React.Component {
    render() {
        return (
            <div className="Loading">
                <div class="container">
                    <div class="ball"></div>
                    <div class="ball"></div>
                    <div class="ball"></div>
                    <div class="ball"></div>
                    <div class="ball"></div>
                    <div class="ball"></div>
                    <div class="ball"></div>
                </div>
            </div>
        );
    }
}

export default Loading