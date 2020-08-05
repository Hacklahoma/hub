import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Team from './Team';

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
            .Button {
                margin: 20px 5px 0 5px;
            }
        }
    }
`;

class Content extends React.Component {
  renderInfo() {
    if (this.props.ended) {
      return (
        <p className="info">
          This year we had <code>{this.props.participants} participants</code> and{' '}
          <code>{this.props.projects} projects</code> submitted.
        </p>
      );
    }
    return (
      <p className="info">
        This year we expect <code>{this.props.participants} participants</code> and{' '}
        <code>{this.props.projects} project</code> submissions.
      </p>
    );
  }

  renderButtons() {
    const result = [];
    if (this.props.website !== null) {
      result.push(
        <Button href={this.props.website} color="green">
          Website
        </Button>,
      );
    }
    if (this.props.devpost !== null) {
      result.push(
        <Button href={this.props.devpost} color="blue">
          Devpost
        </Button>,
      );
    }
    return <div className="buttons">{result}</div>;
  }

  renderTeam() {
    return (
      <div className="team">
        {Object.keys(this.props.team).map((key) => this.renderMember(key))}
      </div>
    );
  }

  renderMember(key) {
    const image = <div className="image" />;
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
      <StyledContent id={`${this.props.year}Content`}>
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
