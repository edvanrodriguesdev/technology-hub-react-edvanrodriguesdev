import styled from "styled-components";


export const StyledDashboard = styled.div`
width: 100vw;
height: 118px;
border: solid 1px var(--grey-4);
@media(max-width: 700px) {
    width: 320px;
    height: 131px;
}
`

export const StyledDashboardContainer = styled.div`
width: 770.30px;
height: 118px;
margin: 0 auto;
align-items: center;
display: flex;
justify-content: space-between;
@media(max-width: 700px) {
 width: 320px;
 height: 131px;
 flex-direction: column;
 justify-content: center;
 align-items: flex-start;
 gap: 10px;
 padding-left: 12px;
}
`

export const StyledDashboardDev = styled.div`
width: 770.30px;
height: 80vh;
margin: 0 auto;
@media(max-width: 700px) {
    width: 320px;
    height: 30vh;
    margin: 0;
}
`

export const StyledDashboardProfile = styled.p`
font-size: 18px;
font-weight: 700;
color: var(--grey-0);
`

export const StyledDashboardProfileInfo = styled.p`
font-size: 12px;
font-weight: 400;
color: var(--grey-1);
`

export const StyledDashboardInfo = styled.p`
font-size: 18px;
font-weight: 700;
color: var(--grey-0);
text-align: left;
padding-top: 37px;
@media(max-width: 700px) {
 display: none;
}
`

export const StyledDashboardSubInfo = styled.p`
font-size: 16px;
font-weight: 400;
color: #FFFFFF;
text-align: left;
padding-top: 23px;
@media(max-width: 700px) {
 display: none;
}
`