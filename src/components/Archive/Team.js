import React from "react";
import Member from "./Member";
import styled from "styled-components";

const StyledTeam = styled.div`
    h1 {
        font-weight: 900;
        text-align: left;
        color: #2c3655;
        margin-bottom: 12px;
        margin-top: 60px;
        font-size: 1.5em;
        display: inline-block;
    }
    .team {
        display: grid;
        padding: 0 10px;
        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
        grid-gap: 1rem;
        justify-items: center;
        width: auto;
        margin: auto;
        max-width: 715px;
        padding-bottom: 60px;
        .member {
            width: 100px;
            height: 100px;
            background: rgb(231, 231, 231);
            border-radius: 8px;
            display: inline-block;
            .image {
                background: red;
                height: 30px;
                width: 100%;
            }
        }
    }
`;

class Team extends React.Component {
    render() {
        return (
            <StyledTeam>
                <h1>Meet the Team</h1>
                <div className="team">
                    {Object.keys(this.props.team).map((key) => (
                        <Member
                            key={key}
                            name={key}
                            image={this.props.team[key].image}
                            position={this.props.team[key].position}
                            instagram={this.props.team[key].instagram}
                            twitter={this.props.team[key].twitter}
                            linkedin={this.props.team[key].linkedin}
                            github={this.props.team[key].github}
                        />
                    ))}
                </div>
            </StyledTeam>
        );
    }
}

export default Team;
