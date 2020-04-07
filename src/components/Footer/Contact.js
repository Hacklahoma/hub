import React from "react";
import styled from "styled-components";

const StyledContact = styled.div`
    margin-top: 200px;
    width: 90vw;
    max-width: 560px;
    display: inline-block;
    h1 {
        text-align: left;
        font-size: 2.09em;
        font-weight: 900;
    }
    p {
        text-align: left;
        font-size: 1em;
    }
    a {
        color: #4474f7;
        font-weight: bold;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
    @media only screen and (max-width: 700px) {
        margin-top: 160px;
    }
`;

const Social = styled.div`
    margin-top: 10px;
    img {
        filter: invert(1);
        cursor: pointer;
        height: 26px;
        margin: 10px;
    }
`;

function Contact() {
    return (
        <StyledContact>
            <h1>Contact Our Team</h1>
            <p>
                We'd love to hear from you! Contact us at{" "}
                <a href="mailto:team@hacklahoma.org">team@hacklahoma.org</a> or through social
                media.
                {/* If you plan on sponsoring us, please visit our <a href="sponsorPacket.pdf" target="_blank">Sponsor Packet</a>. */}
                We look forward to hearing from you!
            </p>
            <Social>
                <a
                    href="https://www.facebook.com/Hacklahoma/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <img src={require("../../images/facebook.svg")} alt="facebook" />
                </a>
                <a href="https://twitter.com/hacklahoma/" rel="noopener noreferrer" target="_blank">
                    <img src={require("../../images/twitter.svg")} alt="twitter" />
                </a>
                <a
                    href="https://www.instagram.com/hacklahoma/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <img src={require("../../images/instagram.svg")} alt="instagram" />
                </a>
            </Social>
        </StyledContact>
    );
}

export default Contact;
