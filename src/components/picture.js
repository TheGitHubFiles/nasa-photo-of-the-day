import React from 'react'
import styled from 'styled-components'

const StyledPicture = styled.div`
box-shadow:${pr => pr.theme.boxShadow.small};
margin:0;
@media ${pr => pr.theme.breakpoints.tablet}{
    
    order:0;
};
`
export default function Picture(props) {
    const { source } = props

    return (
        <StyledPicture>
            <img alt="space" src={source}></img>
        </StyledPicture>
    );

}