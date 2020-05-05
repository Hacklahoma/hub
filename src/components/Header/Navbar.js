import React from "react";
import archive from "../../config/archive";
import general from "../../config/general";
import styled from "styled-components";

const StyledNavbar = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 100;
    .background {
        width: 100vw;
        height: 52px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
        background: white;
        ${(props) => (props.isScrolled ? "margin-top: 0;" : "margin-top: -52px;")}
        transition: margin-top 0.25s;
    }
    .container {
        position: fixed;
        top: 0;
        width: 100vw;
        .content {
            position: relative;
            height: 52px;
            margin: auto;
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            max-width: 850px;
            .logo {
                height: 100%;
                cursor: pointer;
                display: flex;
                align-items: center;
                ${(props) => (props.isScrolled ? "margin-top: 0" : "margin-top: -52px")};
                transition: margin-top 0.25s;
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
                    color: ${(props) => (props.isScrolled ? "#1d1d1d" : "white")};
                    transition: color 0.25s;
                }
                li:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`;

function Navbar() {
    var liveYear = "www";
    // Whether viewport is not at the top to reveal background of navbar
    const [isScrolled, setScrolled] = React.useState();

    // On load, add listener to handle scrolling and control scroll state
    React.useEffect(() => {
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    // Sets scrolled state if user is within 5px of top of window
    function onScroll() {
        if (window.pageYOffset >= 5) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    // Whether event is live
    function isLive() {
        Object.keys(archive).map((key) => (archive[key].live ? (liveYear = key) : null));
        return liveYear !== "www";
    }

    // Whether we are accepting applicants for exec
    function isJoin() {
        return general["joinButton"];
    }

    // Handles all smooth scrolling needs
    function smoothScrollTo(el) {
        // Scroll to top of window
        if (el === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            return;
        }
        // Get element and determine where to scroll
        var element = document.getElementById(el);
        var headerOffset = 50;
        if (el === "About") headerOffset = 100;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition - headerOffset;
        // Execute scrollTo!
        window.scrollTo({
            top: offsetPosition + window.pageYOffset,
            behavior: "smooth",
        });
    }

    return (
        <StyledNavbar isScrolled={isScrolled}>
            <div className="background" />
            <div className="container">
                <div className="content">
                    <div onClick={() => smoothScrollTo("#")} className="logo">
                        <img src={require("../../images/logo.png")} alt="" />
                    </div>
                    <ul className="nav">
                        <li onClick={() => smoothScrollTo("About")}>about</li>
                        <li onClick={() => smoothScrollTo("Archive")}>archive</li>
                        <li onClick={() => smoothScrollTo("Footer")}>contact</li>
                    </ul>
                </div>
            </div>
        </StyledNavbar>
    );
}

export default Navbar;
