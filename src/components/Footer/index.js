import React from "react";
import "./index.scss";
import Contact from "./Contact";
import Copyright from "./Copyright";
import footerGrass from "../../images/footerGrass1.png";
import styled from "styled-components";

const StyledFooter = styled.div`
    margin-top: 150px;
    position: relative;
    background: url(${footerGrass});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: auto;
    color: white;
    z-index: 3;
    .trees {
        position: absolute;
        top: -70px;
        left: -20px;
        min-width: 200px;
        width: 50vw;
        max-width: 600px;
    }
    .flyingLogo {
        position: absolute;
        top: -70px;
        right: -55px;
        min-width: 210px;
        width: 40vw;
        max-width: 400px;
        z-index: 1;
        transform: scaleX(-1);
        filter: grayscale(0.4) brightness(1.15);
        margin-left: calc(100% - 400px);
    }

    @media only screen and (max-width: 700px) {
        .trees {
            top: -20px;
        }
        .flyingLogo {
            top: -40px;
        }
    }
`;

function Footer() {
    return (
        <StyledFooter>
            <Contact />
            <img className="trees" src={require("../../images/footerTrees.png")} alt="trees" />
            <img className="flyingLogo" src={require("../../images/flyingLogo.png")} alt="logo" />
            <Copyright />
        </StyledFooter>
    );
}

export default Footer;
