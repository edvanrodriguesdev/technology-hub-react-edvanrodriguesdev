import styled from "styled-components";


export const StyledHeader = styled.div`
width: 100vw;
height: 72px;
@media(max-width: 700px) {
    width: 322px;
    height: 73px;
}
`

export const StyledHeaderContainer = styled.div`
width: 770.31px;
height: 72px;
display: flex;
justify-content: space-between;
margin: 0 auto;
align-items: center;
img{
    width: 105.53px;
    height: 14.63px;
}
@media(max-width: 700px) {
    width: 298.3px;
}
`

export const StyledHeaderButton = styled.button`
width: 55.49px;
height: 32px;
background-color: var(--grey-3);
color: var(--grey-0);
font-size: 12px;
font-weight: 600;
border: transparent;
border-radius: 4px;
cursor: pointer;
`