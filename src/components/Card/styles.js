import styled from "styled-components";

export const StyledDashboardDevli = styled.li`
width: 732px;
height: 49px;
border: solid 1px var(--grey-4);
border-radius: 4px;
background-color: var(--grey-4);
display: flex;
justify-content: space-between;
@media(max-width: 700px) {
 width: 279px;
 height: 48.73px;
}
`

export const StyledDashboardDevliTech = styled.p`
font-size: 14.21px;
font-weight: 700;
color: #FFFFFF;
padding-left: 22.22px;
display: flex;
align-items: center;
`

export const StyledDashboardDevliDiv = styled.div`
display: flex;
align-items: center;
padding-right: 18.51px;
gap: 25.31px;
`

export const StyledDashboardDevliModule = styled.p`
font-size: 12.18px;
font-weight: 400;
color: var(--grey-1);
`

export const StyledDashboardDevliEdit = styled.button`
width: 13.17px;
height: 12px;
display: flex;
align-items: center;
cursor: pointer;
background-color: transparent;
border: transparent;
img{
width: 13.17px;
height: 12px;
filter: invert(50%);
}
`

export const StyledDashboardDevliTrash = styled.button`
width: 13.17px;
height: 12px;
display: flex;
align-items: center;
cursor: pointer;
background-color: transparent;
`