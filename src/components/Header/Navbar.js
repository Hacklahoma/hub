import React from "react";
import Button from "../Button";
import archive from "../../config/archive";
import general from "../../config/general";
import styled from "styled-components";

const StyledNavbar = styled.div`
    position: relative;
    animation: slide-down 1s;
    li {
        cursor: pointer;
        display: inline-block;
        margin: 18px;
        font-weight: bold;
        font-size: 0.9em;
        color: white;
    }
    li:nth-child(1) {
        margin-left: 0;
    }
    li:nth-last-child(1) {
        margin-right: 0;
    }
    .live {
        position: relative;
        // top: 2px;
        font-weight: 900;
        font-size: 0.8em;
        margin-left: 14px;
        animation: pulse 1.5s linear alternate infinite;
        a {
            text-decoration: none;
            color: white;
        }
    }
    .live:hover {
        animation-play-state: paused;
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
        var headerOffset = 0;
        if (el === "About") headerOffset = 50;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    }

    return (
        <StyledNavbar>
            <ul>
                <li
                    onClick={() => {
                        smoothScrollTo("About");
                    }}
                >
                    About
                </li>
                <li
                    onClick={() => {
                        smoothScrollTo("Archive");
                    }}
                >
                    Archive
                </li>
                <li
                    onClick={() => {
                        smoothScrollTo("Footer");
                    }}
                >
                    Contact
                </li>
                {showLive() ? (
                    <Button href={"https://" + liveYear + ".hacklahoma.org"} color="live red">
                        LIVE
                    </Button>
                ) : null}
                {showJoin() ? (
                    <Button href={"https://join.hacklahoma.org"} color="live green">
                        Join the Team
                    </Button>
                ) : null}
            </ul>
        </StyledNavbar>
    );
}

export default Navbar;
