import styled from "styled-components";


export const StyledModal = styled.div`
width: 369px;
height: 342px;
border: transparent;
border-radius: 4px;
box-shadow: 0 4px 40px -10px rgba(0, 0, 0, 0.25);
position: absolute;
left: 200px;
`

export const StyledModalTop = styled.div`
width: 369px;
height: 50px;
background-color: var(--grey-2);
display: flex;
justify-content: space-between;
border: solid 1px var(--grey-2);
border-radius: 4px 4px 0 0;
`

export const StyledModalAddTech = styled.p`
font-size: 14px;
font-weight: 700;
color: var(--grey-0);
padding-left: 20px;
display: flex;
align-items: center;
`

export const StyledModalCloseButton = styled.button`
font-size: 16px;
font-weight: 600;
width: 11px;
height: 50px;
background-color: transparent;
border: transparent;
display: flex;
align-items: center;
margin-right: 12px;
cursor: pointer;
color: var(--grey-1);
`

export const StyledModalForm = styled.form`
width: 369px;
height: 292px;
background-color: var(--grey-3);
padding-left: 22px;
padding-top: 22px;
display: flex;
flex-direction: column;
border: 1px solid var(--grey-3);
border-radius: 0 0 4px 4px;
`

export const StyledModalNameLabel = styled.label`
font-size: 12.18px;
font-weight: 400;
color: var(--grey-0);
`

export const StyledModalNameInput = styled.span`
width: 329.93px;
height: 48px;
border: 1.22px solid var(--grey-0);
border-radius: 4px;
margin-top: 20px;
background-color: var(--grey-2);
padding-left: 16.24px;
display: flex;
align-items: center;
color: var(--grey-0);
`

export const StyledModalStatusLabel = styled.label`
font-size: 12.18px;
font-weight: 400;
color: var(--grey-0);
margin-top: 24px;
`

export const StyledModalStatusSelect = styled.select`
width: 329.93px;
height: 48px;
border: 1.22px solid var(--grey-0);
border-radius: 4px;
margin-top: 20px;
padding-left: 16.24px;
padding-right: 12px;
background-color: var(--grey-2);
color: var(--grey-0);
`
export const StyledModalStatusOption = styled.option`

display: flex;
align-items: center;
font-size: 16.24px;
font-weight: 400;

`

export const StyledModalStatusRegButton = styled.button`
width: 324px;
height: 48px;
background-color: var(--color-primary);
border: 1px solid var(--color-primary);
border-radius: 4px;
font-size: 16px;
font-weight: 500;
color: #FFFFFF;
margin-top: 20.21px;
cursor: pointer;
margin-left: 2px;
`