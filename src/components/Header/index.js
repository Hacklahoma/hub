import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import cloud from '../../images/cloud.png';
import Button from "../Button";

const StyledHeader = styled.div`
    height: 800px;
    color: white;
    position: relative;
    overflow: hidden;
    .cover {
        height: 100%;
        width: 100vw;
        position: absolute;
        left: 0;
        top: 0;
    }
    .content {
        width: 100vw;
        max-width: 800px;
        height: 0;
        display: inline-block;
        .brandContent {
            position: relative;
            bottom: 400px;
            display: inline-block;
            vertical-align: middle;
            margin-top: 70px;
            width: 100vw;
            max-width: 560px;
            position: relative;
            h1 {
                animation: fade 1s;
                position: absolute;
                left: 0;
                margin-left: 20px;
                top: 70px;
                font-size: 4.2em;
                font-family: "Bebas", "Avenir", "Helvetica Neue", sans-serif;
                font-weight: normal;
            }
            img {
                transform: rotate(-6deg);
                position: absolute;
                right: 0;
                vertical-align: middle;
                width: 300px;
                animation: plane 0.75s ease;
            }
            h2{
              animation: fade 1s;
              position: absolute;
              color: #19BB79;
              left: 0;
              margin-left: 20px;
              top: 150px;
              font-size: 1.5em;
              font-family: "Bebas", "Avenir", "Helvetica Neue", sans-serif;
              font-weight: lighter;
            }
            .buttons {
               .Button {
                 margin: 20px 5px 0 5px;
               }
          }
        }
    }

    /*
        Mobile 
     */
    @media only screen and (max-width: 500px) {
        .Header {
            height: 750px;
            .content {
                h1 {
                    position: relative !important;
                    margin: 0 !important;
                    top: -220px !important;
                    display: inline-block !important;
                }
                img {
                    position: relative !important;
                    margin: 0 !important;
                    display: inline-block !important;
                    opacity: 0.85;
                }
            }
        }
    }
    @keyframes fade {
        0% {
            left: -20px;
            opacity: 0;
        }
        100% {
            left: 0;
            opacity: 1;
        }
    }
    @keyframes plane {
        0% {
            opacity: 0;
            top: 100px;
            right: 100px;
        }
        100% {
            opacity: 1;
            top: 0;
            right: 0;
        }
    }
`;



const Clouds = styled.div`
    position: relative;
    margin-top: 102px; /* (constant * navbar height) */
    display: inline-block;
    height: 400px;
    max-width: 800px;
    width: 100vw;
    .cloudFade {
        animation: cloudFade 6s ease-in;
        .cloud {
            opacity: 0.85;
            height: 60px;
            width: 25vw;
            max-width: 172px;
            min-width: 115px;
            position: absolute;
            background: url(${cloud});
            background-repeat: no-repeat;
            background-size: contain;
        }
    }
    .cloudFade:nth-child(1) {
        animation-delay: 0;
        .cloud {
            transform: scaleX(-1) !important;
            animation: cloud1 4s infinite alternate ease-in-out;
            animation-delay: -2s;
            left: 15%;
            top: 20px;
            float: left;
        }
    }
    .cloudFade:nth-child(2) {
        animation-delay: -0.4s;
        .cloud {
            left: 74%;
            top: 200px;
            animation: cloud2 4s infinite alternate ease-in-out;
            float: right;
        }
    }
    .cloudFade:nth-child(3) {
        animation-delay: -0.2s;
        .cloud {
            left: 2%;
            animation: cloud3 4s infinite alternate ease-in-out;
            top: 350px;
            float: left;
        }
    }
    @keyframes cloud1 {
        0% {
            transform: rotate(0) translate(0, 0) rotate(0);
        }
        100% {
            transform: rotate(90deg) translate(10px, 5px) rotate(-90deg);
        }
    }
    @keyframes cloud2 {
        0% {
            transform: rotate(0) translate(0, 0) rotate(0);
        }
        100% {
            transform: rotate(45deg) translate(-10px, -5px) rotate(-45deg);
        }
    }
    @keyframes cloud3 {
        0% {
            transform: rotate(0) translate(0, 0) rotate(0);
        }
        100% {
            transform: rotate(90deg) translate(-10px, -5px) rotate(-90deg);
        }
    }
    @keyframes cloudFade {
        0% {
            opacity: 0;
        }
        20% {
            opacity: 0;
        }
        100% {
            opacity: 0.85;
        }
    }
`;

function Header() {
  return (
    <StyledHeader>
      <img className="cover" src={require('../../images/headerBackground.svg')} alt="" />
      <Navbar />
      <div className="content">
        <Clouds>
          <div className="cloudFade">
            <div className="cloud" />
          </div>
          <div className="cloudFade">
            <div className="cloud" />
          </div>
          <div className="cloudFade">
            <div className="cloud" />
          </div>
        </Clouds>
        <div className="brandContent">
          <img src={require('../../images/flyingLogo.png')} alt="logo" />
          <h1>Hacklahoma</h1>
          <h2><Button
              color="green">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfRXm-h0rIE5OLVswuKNgSEXTL4GrU-A3R088BGkN1MQ8zQug/viewform?usp=sf_link">Join our contact list!</a></Button></h2>
        </div>
      </div>

    </StyledHeader>
  );
}

export default Header;
