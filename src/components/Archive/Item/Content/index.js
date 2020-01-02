import React from 'react'
import './index.scss'

class Content extends React.Component {

    render() {
        return(
            <div className="Content">
                Content
            </div>
        );
    }

    // componentDidUpdate() {
    //     document.getElementsByClassName("Content")[0].style.animation = "spawn .5s reverse";
    //     setTimeout(
    //         () => null,
    //         5000
    //     );
    // }
}

export default Content