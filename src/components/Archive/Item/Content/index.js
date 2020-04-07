import React from "react";
import "./index.scss";
import Button from "../../../Button";
import Team from "./Team";

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
            <div className="Content" id={this.props.year + "Content"}>
                <div className="container">{this.renderInfo()}</div>
                <div className="container">{this.renderButtons()}</div>
                <div className="container">
                    <Team team={this.props.team} />
                </div>
            </div>
        );
    }
}

export default Content;
