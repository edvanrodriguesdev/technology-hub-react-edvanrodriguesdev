import styled from "styled-components";


export const StyledLogin = styled.div`
width: 100vw;
height: 100vh;
background-color: #000000;
display: flex;
align-items: center;
@media(max-width: 700px) {
   width: 320px;
   height: 568px;
}
`

export const StyledLoginDiv = styled.div`
width: 369px;
height: 557.67px;
margin: 0 auto;
text-align: center;
img{
    width: 101px;
    height: 14px;
}
@media(max-width: 700px) {
   margin-top: 81px;
}
`

export const StyledLoginForm = styled.form`
background-color: var(--grey-3);
width: 369px;
height: 502px;
margin-top: 30px;
border: transparent;
border-radius: 4px;
box-shadow: rgba(0, 0, 0, 0.25);
@media(max-width: 700px) {
   width: 296px;
   height: 402.69px;
   margin-left: 12px;
   margin-top: 18px;
}
`

export const StyledLoginPTop = styled.p`
font-size: 18px;
font-weight: 700;
color: var(--grey-0);
padding-top: 42px;
padding-bottom: 6px;
@media(max-width: 700px) {
   padding-top: 33.69px;
   padding-bottom: 0;
   font-size: 14.44px;
}
`

export const StyledLoginLabel = styled.label`
font-size: 12.18px;
font-weight: 400;
color: var(--grey-0);
padding-left: 22px;
display: flex;
justify-content: flex-start;
margin-top: 20px;
@media(max-width: 700px) {
   padding-top: 0;
   padding-left: 17.65px;
   font-size: 9.77px;
}
`

export const StyledLoginInput = styled.input`
padding-left: 16.24px;
padding-right: 13.79px;
width: 329.93px;
height: 48px;
border: solid 1.22px var(--grey-0);
color: var(--grey-0);
background-color: var(--grey-2);
margin-top: 22.33px;
border-radius: 4px;
font-size: 16.2426px;
font-weight: 400;
@media(max-width: 700px) {
   width: 264.66px;
   height: 38.5px;
   margin-top: 12px;
}
`

export const StyledLoginEnterButton = styled.button`
width: 324px;
height: 48px;
margin-top: 24.21px;
background-color: var(--color-primary);
border: solid 1px var(--color-primary);
border-radius: 4.06066px;
color: #FFFFFF;
font-size: 16px;
font-weight: 500;
cursor: pointer;
@media(max-width: 700px) {
   width: 259.9px;
   height: 38.5px;
   margin-top: 14px;
}
`

export const StyledLoginPBot = styled.p`
font-size: 12px;
font-weight: 600;
color: var(--grey-1);
margin-top: 34px;
@media(max-width: 700px) {
   margin-top: 27.27px;
}
`

export const StyledLoginRegButton = styled.button`
width: 324px;
height: 48px;
margin-top: 24.21px;
background-color: var(--grey-1);
border: solid 1px var(--grey-1);
border-radius: 4.06066px;
color: #FFFFFF;
font-size: 16px;
font-weight: 500;
cursor: pointer;
@media(max-width: 700px) {
   width: 259.9px;
   height: 38.5px;
   margin-top: 16px;
}
`