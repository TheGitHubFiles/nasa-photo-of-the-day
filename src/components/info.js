import React from 'react'
import styled from 'styled-components'

const StyledInfo = styled.div`
background-color:${pr => pr.theme.black};
color:${pr => pr.theme.white};
padding-left:${pr => pr.theme.padding.medium};
padding-right:${pr => pr.theme.padding.medium};
margin-top:${pr => pr.theme.margin.medium};
margin-bottom:${pr => pr.theme.margin.medium};
box-shadow:${pr => pr.theme.boxShadow.small};
display:flex;
text-align:center;
flex-direction:column;
align-self:center;
max-width:1024px;
height:100%;
font-size:1.6rem;
@media ${pr => pr.theme.breakpoints.tablet}{
  order:2;
}
`
export default function Info(props) {
    const { copyright, date, explanation } = props

    return (
        <StyledInfo>

            <h3>{date}</h3>
            <p className='copyright'>{copyright}</p>
            <p>{explanation}</p>

        </StyledInfo>
    );


}