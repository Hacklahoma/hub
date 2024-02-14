import React from 'react';
import styled from 'styled-components';

const StyledLoading = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    background: rgb(79, 130, 204);
    .container {
        position: absolute;
        opacity: 0.75;
        width: 200px;
        height: 100px;
        top: calc(50vh - 100px);
        left: calc(50vw - 100px);
        .ball {
            width: 10px;
            height: 10px;
            margin: 10px auto;
            border-radius: 50px;
        }

        .ball:nth-child(1) {
            background: #ffffff;
            -webkit-animation: right 1s infinite ease-in-out;
            -moz-animation: right 1s infinite ease-in-out;
            animation: right 1s infinite ease-in-out;
        }

        .ball:nth-child(2) {
            background: #ffffff;
            -webkit-animation: left 1.1s infinite ease-in-out;
            -moz-animation: left 1.1s infinite ease-in-out;
            animation: left 1.1s infinite ease-in-out;
        }

        .ball:nth-child(3) {
            background: #ffffff;
            -webkit-animation: right 1.05s infinite ease-in-out;
            -moz-animation: right 1.05s infinite ease-in-out;
            animation: right 1.05s infinite ease-in-out;
        }

        .ball:nth-child(4) {
            background: #ffffff;
            -webkit-animation: left 1.15s infinite ease-in-out;
            -moz-animation: left 1.15s infinite ease-in-out;
            animation: left 1.15s infinite ease-in-out;
        }

        .ball:nth-child(5) {
            background: #ffffff;
            -webkit-animation: right 1.1s infinite ease-in-out;
            -moz-animation: right 1.1s infinite ease-in-out;
            animation: right 1.1s infinite ease-in-out;
        }

        .ball:nth-child(6) {
            background: #ffffff;
            -webkit-animation: left 1.05s infinite ease-in-out;
            -moz-animation: left 1.05s infinite ease-in-out;
            animation: left 1.05s infinite ease-in-out;
        }

        .ball:nth-child(7) {
            background: #ffffff;
            -webkit-animation: right 1s infinite ease-in-out;
            -moz-animation: right 1s infinite ease-in-out;
            animation: right 1s infinite ease-in-out;
        }
    }

    @keyframes right {
        0% {
            transform: translate(-15px);
        }
        50% {
            transform: translate(15px);
        }
        100% {
            transform: translate(-15px);
        }
    }

    @keyframes left {
        0% {
            transform: translate(15px);
        }
        50% {
            transform: translate(-15px);
        }
        100% {
            transform: translate(15px);
        }
    }
`;

function Loading() {
  return (
    <StyledLoading>
      <div className="container">
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
      </div>
    </StyledLoading>
  );
}

export default Loading;
