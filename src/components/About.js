import React from "react";
import { Parallax } from "react-parallax";
import styled from "styled-components";

const StyledAbout = styled.div`
    position: relative;
    margin-top: -200px;
    .imageContent {
        width: 100vw;
        animation: slide-up 1s;
        .image {
            position: relative;
            display: inline-block;
            overflow: hidden;
            min-height: 200px;
            height: 30vw;
            max-height: 340px;
            width: 80vw;
            max-width: 850px;
            border-radius: 8px;
            user-select: none;
            pointer-events: none;
            z-index: 2;
        }
    }
    .content {
        text-align: left;
        display: inline-block;
        width: 80vw;
        max-width: 450px;
        margin-top: 20px;
        h1 {
            margin: 15px 0;
            color: #2c3655;
            font-weight: 900;
        }
    }

    /* 
        Animations
     */
    @keyframes slide-up {
        0% {
            opacity: 0;
            margin-top: 100px;
        }
        20% {
            opacity: 0;
        }
        100% {
            opacity: 1;
            margin-top: 0;
        }
    }

    /* 
        Mobile
     */
    @media only screen and (max-width: 800px) {
        .image {
            img {
                margin-top: 30px;
            }
        }
    }
    @media only screen and (max-width: 500px) {
        margin-top: -170px;
        .image {
            width: 93vw !important;
        }
    }
`;

function About() {
    return (
        <StyledAbout>
            <div className="imageContent">
                <Parallax
                    className="image"
                    bgImage={require("../images/about.jpg")}
                    bgImageStyle={{
                        borderRadius: "8px",
                        width: "100%",
                        overflow: "hidden",
                        userSelect: "none",
                    }}
                    bgImageAlt="hacklahoma team"
                    strength={-50}
                />
            </div>
            <div className="content">
                <h1>We Organize Hackathons</h1>
                <p>
                    Our mission is to kindle creativity and innovation in our Oklahoma community. We
                    invite students from across the country to collaborate, develop, and share their
                    projects with us through a 24 hour hackathon at the University of Oklahoma.
                </p>
            </div>
        </StyledAbout>
    );
}

export default About;
