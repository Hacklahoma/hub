import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
    display: inline-block;
    .Button {
        font-weight: 900;
        padding: 3px 0;
        cursor: pointer;
        border-width: 3px;
        border-style: solid;
        border-radius: 5px;
        transition: 0.5s;
        a {
            padding: 6px 27px;
            color: white;
            text-decoration: none;
        }
    }

    /**
    * Green button
    */
    .Button.green {
        background: rgb(90, 192, 115);
        border: 3px solid rgb(84, 177, 107);
    }
    .Button.green:hover {
        background: rgb(84, 177, 107);
    }

    /**
    * Blue button
    */
    .Button.blue {
        background: rgb(62, 121, 197);
        border: 3px solid rgb(50, 105, 177);
    }
    .Button.blue:hover {
        background: rgb(50, 105, 177);
    }

    /**
    * Red button
    */
    .Button.red {
        background: rgb(192, 90, 90);
        border: 3px solid rgb(177, 84, 84);
    }
    .Button.red:hover {
        background: rgb(177, 84, 84);
    }

    /**
    * Live button
    */
    .Button.live {
        padding: 2px 0;
        transform: scale(2);
        a {
            padding: 4px 16px;
        }
    }
`;

function Button({ color, children, href }) {
  return (
    <StyledButton>
      <div className={`Button ${color}`}>
        <a target="_blank" rel="noopener noreferrer" href={href}>
          {children}
        </a>
      </div>
    </StyledButton>
  );
}

export default Button;
