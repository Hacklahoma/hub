import React from "react";
import Content from "./Content";
import { CSSTransition } from "react-transition-group";
import AnimateHeight from "react-animate-height";
import Button from "../Button";
import styled from "styled-components";

const StyledItem = styled.div`
    position: relative;
    width: 100vw;
    overflow: visible;
    .item-container {
        z-index: 2;
        display: inline-block;
        width: 80vw;
        max-width: 600px;
        margin: 30px 0;
        h1 {
            .live {
                position: relative;
                font-size: 0.5em;
                bottom: 6px;
                animation: pulse 1.5s linear infinite alternate;
            }
            .live:hover {
                animation-play-state: paused;
            }
            font-weight: 900;
            text-align: left;
            color: #2c3655;
            margin-bottom: 12px;
        }
        .card {
            z-index: 3;
            cursor: pointer;
            box-shadow: 2px 3px 30px -10px rgba(0, 0, 0, 0.2);
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            background: white;
            border-radius: 20px;
            height: 220px;
            img {
                height: 70%;
            }
        }
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.1);
        }
    }

    @keyframes contentFix {
        0% {
            margin-bottom: 0;
        }
        100% {
            margin-bottom: -100px;
        }
    }

    @media only screen and (max-width: 700px) {
        .Item {
            .card {
                height: 160px !important;
            }
        }
    }
`;

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // calls parent component to set expanded to false
        this.props.click(this.props.year);
    }

    render() {
        return (
            <StyledItem id={this.props.year}>
                <div className="item-container">
                    {/* year and live if applicable */}
                    <h1>
                        {this.props.year}{" "}
                        {this.props.live ? (
                            <Button
                                href={"https://" + this.props.year + ".hacklahoma.org"}
                                color="live"
                            >
                                LIVE
                            </Button>
                        ) : null}
                    </h1>
                    {/* card */}
                    <div
                        onClick={this.handleClick}
                        style={{ background: this.props.color }}
                        className="card"
                    >
                        {/* logo */}
                        <img
                            src={require("../../images/logo" + this.props.year + ".png")}
                            alt={this.props.year + " logo"}
                        />
                    </div>
                </div>

                {/* Transition function to show if expanded is true and animate */}
                <AnimateHeight
                    duration={500}
                    height={this.props.expanded === undefined ? 0 : this.props.expanded}
                    easing="ease"
                    style={{
                        position: "relative",
                        marginBottom: this.props.expanded === "auto" ? "-100px" : "0",
                        transition: ".5s",
                        bottom: "130px",
                    }}
                >
                    <CSSTransition
                        in={this.props.expanded === 0 ? false : true}
                        timeout={500}
                        classNames="item"
                        unmountOnExit
                    >
                        <Content
                            ended={this.props.ended}
                            participants={this.props.participants}
                            projects={this.props.projects}
                            year={this.props.year}
                            team={this.props.team}
                            devpost={this.props.devpost}
                        />
                    </CSSTransition>
                </AnimateHeight>
            </StyledItem>
        );
    }
}

export default Item;
