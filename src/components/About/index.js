import React from 'react'
import './index.scss'
import { Parallax } from 'react-parallax';

class About extends React.Component {
    render() {
        return(
            <div className="About">
                <div className="imageContent">
                    <Parallax
                        className="image"
                        bgImage={require('../../images/about.jpg')}
                        bgImageAlt="hacklahoma team"
                        strength={-50}
                    />
                </div>
                <div className="content">
                    <h1>We Organize Hackathons</h1>
                    <p>Our mission is to kindle creativity and innovation in our Oklahoma community. We invite students from across the country to collaborate, develop, and share their projects with us through a 24 hour hackathon at the University of Oklahoma.</p>
                </div>
            </div>
        );
    }
}

export default About