import React from 'react';
import styled from 'styled-components';

const StyledMember = styled.div`
    .image {
        width: 100px;
        clip-path: circle(50% at 50% 50%);
    }
    .femalepng {
        transform: scaleX(-1);
    }
    .name {
        font-size: 0.85em;
        white-space: nowrap;
        font-weight: 600;
    }
    .position {
        margin-top: 1px;
        font-family: Menlo;
        font-size: 0.58em;
        line-height: 10px;
        height: 23px;
        /* white-space: nowrap; */
    }
    .social {
        img {
            height: 16px;
            margin: 0 3px;
        }
    }
`;

class Member extends React.Component {
  render() {
    return (
      <StyledMember>
        <img
          src={require(`../../images/headshots/${this.props.image}`)}
          className={`image ${this.props.image.split('.').join('')}`}
          alt="avatar"
        />
        <h3 className="name">{this.props.name}</h3>
        <p className="position">{this.props.position}</p>
        <div className="social">
          {this.props.instagram ? (
            <a target="_blank" rel="noopener noreferrer" href={this.props.instagram}>
              <img
                alt="instagram"
                src={require('../../images/instagram.png')}
              />
            </a>
          ) : null}
          {this.props.twitter ? (
            <a target="_blank" rel="noopener noreferrer" href={this.props.twitter}>
              <img
                alt="twitter"
                src={require('../../images/twitter.png')}
              />
            </a>
          ) : null}
          {this.props.linkedin ? (
            <a target="_blank" rel="noopener noreferrer" href={this.props.linkedin}>
              <img
                alt="linkedin"
                src={require('../../images/linkedin.png')}
              />
            </a>
          ) : null}
          {this.props.github ? (
            <a target="_blank" rel="noopener noreferrer" href={this.props.github}>
              <img
                alt="github"
                src={require('../../images/github.png')}
              />
            </a>
          ) : null}
        </div>
      </StyledMember>
    );
  }
}

export default Member;
