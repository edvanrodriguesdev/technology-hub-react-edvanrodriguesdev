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

export const Dashboard = ({ user, userLogout }) => {
  return (
    <>
      <Header userLogout={userLogout} />
      <StyledDashboard>
        <StyledDashboardContainer>
          <StyledDashboardProfile>Olá, {user.name}</StyledDashboardProfile>
          <StyledDashboardProfileInfo>{user.course_module}</StyledDashboardProfileInfo>
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
