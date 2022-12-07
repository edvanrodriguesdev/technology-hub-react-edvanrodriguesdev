import styled from "styled-components";

export const StyledRegister = styled.div`
  background-color: #000000;
  width: 100vw;
  height: 110vh;
  @media (max-width: 700px) {
    width: 320px;
    height: 869px;
  }
`;

export const StyledRegisterDiv = styled.div`
  width: 370px;
  height: 971px;
  margin: 0 auto;
  margin-top: 42px;
  @media (max-width: 700px) {
    width: 295.83px;
    height: 773.54px;
  }
`;
export const StyledRegisterDivTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 39.7px;
  align-items: center;
  img {
    width: 122.06px;
    height: 21.21px;
  }
  @media (max-width: 700px) {
    width: 295.83px;
    height: 31.95px;
    img {
      width: 97.59px;
      height: 16.9px;
    }
  }
`;

export const StyledRegisterBackButton = styled.button`
  width: 67.49px;
  height: 40.11px;
  background-color: var(--grey-3);
  border: transparent;
  border-radius: 4px;
  color: var(--grey-0);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  @media (max-width: 700px) {
    width: 79.54px;
    height: 31.95px;
    font-size: 9.59px;
  }
`;

export const StyledRegisterForm = styled.form`
  width: 370px;
  height: 891.19px;
  background-color: var(--grey-3);
  border: transparent;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  padding-left: 22.5px;
  @media (max-width: 700px) {
    width: 295.83px;
    height: 709.96px;
    padding-left: 17.99px;
  }
`;

export const StyledRegisterTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: var(--grey-0);
  padding-top: 42px;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 14.39px;
    padding-top: 33.58px;
    padding-right: 17.99px;
  }
`;

export const StyledRegisterSubtitle = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: var(--grey-1);
  padding-top: 28px;
  padding-bottom: 10px;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 9.59px;
    padding-right: 17.99px;
  }
`;

export const StyledRegisterLabel = styled.label`
  font-size: 12.18px;
  font-weight: 400;
  color: var(--grey-0);
  margin-bottom: 14px;
  margin-top: 20px;
  text-align: left;
  @media (max-width: 700px) {
    font-size: 9.74px;
    margin-top: 18px;
    margin-bottom: 10px;
  }
`;

export const StyledRegisterInput = styled.input`
  width: 329.93px;
  height: 48px;
  border: solid 1.22px var(--grey-2);
  border-radius: 4px;
  background-color: var(--grey-2);
  color: var(--grey-1);
  padding-left: 16px;
  font-size: 16.24px;
  font-weight: 400;
  @media(max-width: 700px) {
    width: 263.79px;
    height: 38.38px;
    padding-left: 12.99px;
}
  ::placeholder {
    color: var(--grey-1);
    font-size: 16.24px;
    font-weight: 400;
    @media(max-width: 700px) {
        font-size: 12.99px;
    }
  }
`;

export const StyledRegisterSelect = styled.select`
  width: 329.93px;
  height: 48px;
  border: solid 1.22px var(--grey-2);
  border-radius: 4px;
  background-color: var(--grey-2);
  color: var(--grey-1);
  padding-left: 16.44px;
  padding-right: 11.46px;
  font-size: 16.2426px;
  @media(max-width: 700px) {
    width: 263.79px;
    height: 38.38px;
    font-size: 12.99px;
    padding-left: 12.99px;
  }
`;

export const StyledRegisterButton = styled.button`
  margin-top: 20.21px;
  width: 326px;
  height: 48px;
  border: solid 1.22px var(--color-primary-negative);
  background-color: var(--color-primary-negative);
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  @media(max-width: 700px) {
    width: 260.65px;
    height: 38.38px;
    margin-top: 16px;
  }
`;

