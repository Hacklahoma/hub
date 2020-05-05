import React from "react";
import Button from "../Button";
import Team from "./Team";
import styled from "styled-components";

const StyledContent = styled.div`
    position: relative;
    z-index: 2;
    width: 100vw;
    background: white;
    box-shadow: 0px 3px 30px -15px rgba(0, 0, 0, 0.2);
    overflow: visible;
    .content-container {
        width: 100%;
        max-width: 100%;
        margin: 0;
        .info {
            font-size: 1.1em;
            display: inline-block;
            max-width: 350px;
            margin-top: 150px;
            code {
                font-weight: bold;
                word-spacing: -5px;
            }
        }
        .buttons {
            margin-top: 20px;
            .Button {
                margin: 0 5px;
            }
        }
    }
`;

class Content extends React.Component {
    renderInfo() {
        if (this.props.ended)
            return (
                <p className="info">
                    This year we had <code>{this.props.participants} participants</code> and{" "}
                    <code>{this.props.projects} projects</code> submitted.
                </p>
            );
        else
            return (
                <p className="info">
                    This year we expect <code>{this.props.participants} participants</code> and{" "}
                    <code>{this.props.projects} project</code> submissions.
                </p>
            );
    }

    renderButtons() {
        if (this.props.devpost !== null)
            return (
                <div className="buttons">
                    <Button href={"https://" + this.props.year + ".hacklahoma.org"} color="green">
                        Website
                    </Button>
                    <Button href={this.props.devpost} color="blue">
                        Devpost
                    </Button>
                </div>
            );
        else
            return (
                <div className="buttons">
                    <Button href={"https://" + this.props.year + ".hacklahoma.org"} color="green">
                        Website
                    </Button>
                </div>
            );
    }

    renderTeam() {
        return (
            <div className="team">
                {Object.keys(this.props.team).map((key) => this.renderMember(key))}
            </div>
        );
    }

    renderMember(key) {
        var image = <div className="image"></div>;
        return (
            <div key={key} className="member">
                {image}
                <br />
                {key}
                <br />
                {this.props.team[key].position}
            </div>
        );
    }

    render() {
        return (
            <StyledContent id={this.props.year + "Content"}>
                <div className="content-container">{this.renderInfo()}</div>
                <div className="content-container">{this.renderButtons()}</div>
                <div className="content-container">
                    <Team team={this.props.team} />
                </div>
            </StyledContent>
        );
    }
}

export default Content;
