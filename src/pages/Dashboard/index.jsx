import {
  StyledDashboard,
  StyledDashboardContainer,
  StyledDashboardDev,
  StyledDashboardProfile,
  StyledDashboardProfileInfo,
  StyledDashboardDevTop,
  StyledDashboardSubTech,
  StyledDashboardSubAddTech,
  StyledDashboardDevUl,
} from "./styles";
import Plus from "../../assets/img/plus.svg";
import { Header } from "../../components/Header/";
import { useContext, useState } from "react";
import { UserContext } from "../../provides/UserContext";
import { Card } from "../../components/Card";
import { AddModal } from "../../components/AddModal";
import { EditModal } from "../../components/EditModal";
import { DeleteModal } from "../../components/DeleteModal";
import { TechContext } from "../../provides/TechContext";


export const Dashboard = () => {
  const { user, userLogout } = useContext(UserContext);
  const { addModal, setAddModal, editModal, techs, deleteModal } = useContext(TechContext)

  function openModal() {
    setAddModal(true)
  }

  return (
    <>
      <Header userLogout={userLogout} />
      <StyledDashboard>
        <StyledDashboardContainer>
          {user === null ? (
            <p>Carregando...</p>
          ) : (
            <>
              <StyledDashboardProfile>Olá, {user.name}</StyledDashboardProfile>
              <StyledDashboardProfileInfo>
                {user.course_module}
              </StyledDashboardProfileInfo>
            </>
          )}
        </StyledDashboardContainer>
      </StyledDashboard>
      <StyledDashboardDev>
        {
        addModal === true ? (<AddModal />): ""
        }
        {
        editModal === true ? (<EditModal />): ""
        }
        {
        deleteModal === true ? (<DeleteModal />): ""
        }
        <StyledDashboardDevTop>
          <StyledDashboardSubTech>Tecnologias</StyledDashboardSubTech>
          <StyledDashboardSubAddTech type="button" onClick={() => openModal()}>
            <img src={Plus} alt="ícone do botão"></img>
          </StyledDashboardSubAddTech>
        </StyledDashboardDevTop>
        <StyledDashboardDevUl>
          {user === null ? (
            <p>Carregando...</p>
          ) : (
            techs.map((list) => (
              <Card
                key={list.id}
                id={list.id}
                title={list.title}
                status={list.status}
              />
            ))
          )}
        </StyledDashboardDevUl>
      </StyledDashboardDev>
    </>
  );
};
