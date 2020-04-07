import React from "react";
import styled from "styled-components";

const StyledCopyright = styled.div`
    font-size: 0.7em;
    padding-top: 60px;
    padding-bottom: 15px;
    span {
        font-weight: bolder;
    }
`;

function Copyright() {
    return <StyledCopyright>Copyright © 2020 Hacklahoma ~ Made with ♡ in Norman</StyledCopyright>;
}

export default Copyright;
