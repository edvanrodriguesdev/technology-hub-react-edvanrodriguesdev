import {
  StyledDashboard,
  StyledDashboardContainer,
  StyledDashboardDev,
  StyledDashboardInfo,
  StyledDashboardSubInfo,
  StyledDashboardProfile,
  StyledDashboardProfileInfo
} from "./styles";
import { Header } from "../Header";

export const Dashboard = () => {
  return (
    <>
      <Header></Header>
      <StyledDashboard>
        <StyledDashboardContainer>
          <StyledDashboardProfile>Olá, Samuel Leão</StyledDashboardProfile>
          <StyledDashboardProfileInfo>Primeiro módulo  (Introdução ao Frontend)</StyledDashboardProfileInfo>
        </StyledDashboardContainer>
      </StyledDashboard>
      <StyledDashboardDev>
        <StyledDashboardInfo>
          Que pena! Estamos em desenvolvimento :(
        </StyledDashboardInfo>
        <StyledDashboardSubInfo>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </StyledDashboardSubInfo>
      </StyledDashboardDev>
    </>
  );
};
