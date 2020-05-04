import React from "react";
import Button from "../Button";
import archive from "../../config/archive";
import general from "../../config/general";
import styled from "styled-components";

const StyledNavbar = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 100;
    animation: slide-down 1s;
    box-shadow: 0 2px 12px rgba(0,0,0,0.15);
    background: white;
    color: #1d1d1d;
    .container {
        position: relative;
        height: 52px;
        margin: auto;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        max-width: 850px;
        .logo {
            height: 100%;
            display: flex;
            align-items: center;
            img {
                height: 90%;
            }
        }
        .nav {
            li {
                list-style: none;
                display: inline-block;
                cursor: pointer;
                padding: 15px 20px;
                font-size: 1em;
            }
            li:hover {
                text-decoration: underline;
            }
        }
    }

    @keyframes slide-down {
        0% {
            top: -50px;
            opacity: 0;
        }
        100% {
            top: 0px;
            opacity: 1;
        }
    }
`;

function Navbar() {
    var liveYear = "www";
    function showLive() {
        Object.keys(archive).map((key) => (archive[key].live ? (liveYear = key) : null));

        return liveYear !== "www";
    }

    function showJoin() {
        return general["joinButton"];
    }

    function smoothScrollTo(el) {
        var element = document.getElementById(el);
        var headerOffset = 50;
        if (el === "About") headerOffset = 100;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition + window.pageYOffset,
            behavior: "smooth",
        });
    }

    return (
        <StyledNavbar>
            <div className="container">
                <div className="logo">
                    <img src={require("../../images/logo.png")} alt="" />
                </div>
                <ul className="nav">
                    <li
                        onClick={() => {
                            smoothScrollTo("About");
                        }}
                    >
                        about
                    </li>
                    <li
                        onClick={() => {
                            smoothScrollTo("Archive");
                        }}
                    >
                        archive
                    </li>
                    <li
                        onClick={() => {
                            smoothScrollTo("Footer");
                        }}
                    >
                        contact
                    </li>
                </ul>
            </div>
        </StyledNavbar>
    );
}

export default Navbar;
