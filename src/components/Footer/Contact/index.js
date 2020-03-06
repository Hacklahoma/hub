import React from 'react'
import './index.scss'

class Contact extends React.Component {
    render() {
        return(
            <div className="Contact">
                <h1>Contact Our Team</h1>
                <p>We'd love to hear from you! Contact us at <a href="mailto:team@hacklahoma.org">team@hacklahoma.org</a> or through social media.
                {/* If you plan on sponsoring us, please visit our <a href="sponsorPacket.pdf" target="_blank">Sponsor Packet</a>. */}
                We look forward to hearing from you!</p>
                <div className="social">
                    <a href="https://www.facebook.com/Hacklahoma/" rel="noopener noreferrer" target="_blank"><img src={require('../../../images/facebook.svg')} alt="facebook" /></a>
                    <a href="https://twitter.com/hacklahoma/" rel="noopener noreferrer" target="_blank"><img src={require('../../../images/twitter.svg')} alt="twitter" /></a>
                    <a href="https://www.instagram.com/hacklahoma/" rel="noopener noreferrer" target="_blank"><img src={require('../../../images/instagram.svg')} alt="instagram" /></a>
                </div>
            </div>
        );
    }
}

export default Contact