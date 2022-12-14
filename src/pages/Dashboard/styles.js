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
position: relative;
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
 
}
`

export const StyledDashboardSubInfo = styled.p`
font-size: 16px;
font-weight: 400;
color: #FFFFFF;
text-align: left;
padding-top: 23px;
@media(max-width: 700px) {
 
}
`
export const StyledDashboardDevTop = styled.div`
display: flex;
justify-content: space-between;
`

export const StyledDashboardSubTech = styled.p`
font-size: 16px;
font-weight: 600;
color: var(--grey-0);
padding-top: 18px;
@media(max-width: 700px) {
 padding-left: 12px;
 padding-top: 22px;
}
`

export const StyledDashboardSubAddTech = styled.button`
width: 32.49px;
height: 32px;
border-radius: 4px;
background-color: var(--grey-3);
border: solid 1px var(--grey-3);
margin-top: 11px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
@media(max-width: 700px) {
 margin-right: 13.8px;
 margin-top: 19px;
}
`

export const StyledDashboardDevUl = styled.ul`
width: 780px;
height: 416px;
max-height: 100vh;
border: solid 1px var(--grey-3);
border-radius: 4px;
background-color: var(--grey-3);
margin-top: 28px;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 23px;
padding-bottom: 24px;
gap: 16px;
@media(max-width: 700px) {
 width: 296px;
 height: 416.37px;
 margin: 0 auto;
 margin-top: 28px;
}
`

