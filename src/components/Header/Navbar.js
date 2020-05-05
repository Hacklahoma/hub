import React from "react";
import archive from "../../config/archive";
import general from "../../config/general";
import styled from "styled-components";
import animateScrollTo from "animated-scroll-to";
import { FiBarChart2 } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { CSSTransition } from "react-transition-group";

const StyledNavbar = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 100;
    a {
        text-decoration: none;
    }
    .banner {
        position: relative;
        animation: slide-down 0.5s;
        z-index: 101;
        width: 100vw;
        height: 24px;
        ${(props) => !(props.isJoin || props.isLive) && "display: none;"};
        background: ${(props) => (props.isLive ? "rgb(192, 90, 90)" : "#19BB79")};
        display: flex;
        transition: background 0.25s;
        p {
            color: white;
            margin: auto;
            font-size: 0.8em;
            font-weight: bold;
        }
    }
    .banner:hover {
        background: ${(props) => (props.isLive ? "rgb(177,84,84)" : "#16AA6E")};
    }
    .background {
        width: 100vw;
        height: 52px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
        background: white;
        ${(props) => (props.isScrolled ? "margin-top: 0;" : "margin-top: -72px;")};
        transition: margin-top 0.3s;
    }
    .container {
        position: fixed;
        top: ${(props) => (props.isJoin || props.isLive ? "24px" : "0")};
        width: 100vw;
        .content {
            position: relative;
            height: 52px;
            margin: auto;
            padding: 0 20px;
            width: calc(100% - 40px);
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 850px;
            .logo {
                height: 100%;
                cursor: pointer;
                display: flex;
                align-items: center;
                ${(props) => (props.isScrolled ? "margin-top: 0;" : "margin-top: -150px;")};
                transition: margin-top 0.35s;
                img {
                    height: 90%;
                }
            }
            .icon {
                transform: rotate(-90deg) scaleY(1.4);
                animation: slide-down 1s;
                cursor: pointer;
                padding: 0 10px;
                color: ${(props) => (props.isScrolled ? "#1d1d1d" : "white")};
                transition: color 0.25s;
                height: 100%;
                width: 30px;
            }
            .nav {
                animation: slide-down 1s;
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
            .menu-enter {
                margin-right: -170px;
            }
            .menu-enter-active {
                margin-right: 0;
                transition: margin-right 500ms;
            }
            .menu-exit {
                margin-right: 0;
            }
            .menu-exit-active {
                margin-right: -170px;
                transition: margin-right 500ms;
            }
            .mobileMenu {
                position: fixed;
                box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
                right: 0;
                top: 0;
                background: white;
                height: 100vh;
                width: 170px;
                .close {
                    margin-top: 26px;
                    color: rgb(192, 90, 90);
                    cursor: pointer;
                    height: 50px;
                    width: 50px;
                }
                .nav {
                    animation: none;
                    margin-top: 20px;
                    li {
                        color: #1d1d1d;
                        display: block;
                        transition: 0.25s;
                    }
                    li:hover {
                        background: #f6f6f6;
                    }
                }
            }
        }
    }

    @keyframes slide-down {
        0% {
            opacity: 0;
            margin-top: -50px;
        }
        30% {
            opacity: 0;
        }
        100% {
            opacity: 1;
            margin-top: 0px;
        }
    }
`;

function Navbar() {
    var liveYear = "www";
    // Whether viewport is not at the top to reveal background of navbar
    const [isScrolled, setScrolled] = React.useState(false);
    const [isMobile, setMobile] = React.useState(true);
    const [isExpanded, setExpanded] = React.useState(false);

    // On load, add listener to handle scrolling and resizing
    React.useEffect(() => {
        onScroll();
        onResize();
        window.addEventListener("scroll", onScroll);
        window.addEventListener("resize", onResize);

        document.body.style.transition = "margin .5s";

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    React.useEffect(() => {
        if (isExpanded) {
            document.body.style.margin = "0 0 0 -170px";
        } else {
            document.body.style.margin = "0";
        }
    }, [isExpanded]);

    // Sets scrolled state if user is within 5px of top of window
    function onScroll() {
        if (window.pageYOffset >= 5) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    // Sets mobile state on resize
    function onResize() {
        if (window.innerWidth < 500) {
            setMobile(true);
        } else {
            setExpanded(false);
            setMobile(false);
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

    // Renders the banner to join or to live site
    function renderBanner() {
        if (isLive()) {
            return (
                <a
                    href={`https://${liveYear}.hacklahoma.org`}
                    rel="noopener noreferrer"
                    target="_blank"
                    alt=""
                >
                    <div className="banner">
                        <p>Hacklahoma {liveYear} is LIVE!</p>
                    </div>
                </a>
            );
        } else if (isJoin())
            return (
                <a
                    href="https://join.hacklahoma.org"
                    rel="noopener noreferrer"
                    target="_blank"
                    alt=""
                >
                    <div className="banner">
                        <p>Apply to join the team!</p>
                    </div>
                </a>
            );
        else {
            return;
        }
    }

    // Handles all smooth scrolling needs
    function smoothScrollTo(el) {
        setExpanded(false);
        // Scroll to top of window
        if (el === "#") {
            animateScrollTo(0, {
                maxDuration: 500,
                minDuration: 500,
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
        animateScrollTo(offsetPosition + window.pageYOffset, {
            maxDuration: 500,
            minDuration: 500,
        });
    }

    function renderMenu() {
        return (
            <ul className="nav">
                <li onClick={() => smoothScrollTo("About")}>about</li>
                <li onClick={() => smoothScrollTo("Archive")}>archive</li>
                <li onClick={() => smoothScrollTo("Footer")}>contact</li>
            </ul>
        );
    }

    return (
        <StyledNavbar isJoin={isJoin()} isLive={isLive()} isScrolled={isScrolled}>
            {renderBanner()}
            <div className="background" />
            <div className="container">
                <div className="content">
                    <div onClick={() => smoothScrollTo("#")} className="logo">
                        <img src={require("../../images/logo.png")} alt="" />
                    </div>
                    {isMobile ? (
                        <div>
                            <CSSTransition
                                in={!isExpanded}
                                timeout={100}
                                classNames="menu"
                                unmountOnExit
                            >
                                <FiBarChart2
                                    className="icon"
                                    onClick={() => setExpanded(!isExpanded)}
                                />
                            </CSSTransition>
                            <CSSTransition
                                in={isExpanded}
                                timeout={500}
                                classNames="menu"
                                unmountOnExit
                            >
                                <div className="mobileMenu">
                                    <IoIosClose
                                        className="close"
                                        onClick={() => setExpanded(!isExpanded)}
                                    />
                                    {renderMenu()}
                                </div>
                            </CSSTransition>
                        </div>
                    ) : (
                        renderMenu()
                    )}
                </div>
            </div>
        </StyledNavbar>
    );
}

export default Navbar;
