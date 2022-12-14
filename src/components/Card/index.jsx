import {
  StyledDashboardDevli,
  StyledDashboardDevliTech,
  StyledDashboardDevliDiv,
  StyledDashboardDevliModule,
  StyledDashboardDevliTrash,
  StyledDashboardDevliEdit
} from "./styles";
import Trash from "../../assets/img/trash.svg";
import Edit from "../../assets/img/edit.svg";
import { useContext } from "react";
import { TechContext } from "../../provides/TechContext";

export const Card = ({ id, title, status }) => {
  const { setIdTech, setEditModal, setTitleTech, setDeleteModal, setStatusTech } = useContext(TechContext)

  async function openEditModal() {
    setEditModal(true)
    await setIdTech(id)

    await setTitleTech(title)
  }

  async function openDeleteModal() {
    setDeleteModal(true)
    await setIdTech(id)

    await setTitleTech(title)

    await setStatusTech(status)
  } 


  return (
      <StyledDashboardDevli>
      <StyledDashboardDevliTech>{title}</StyledDashboardDevliTech>
      <StyledDashboardDevliDiv>
        <StyledDashboardDevliModule>{status}</StyledDashboardDevliModule>
        <StyledDashboardDevliEdit type="button" onClick={() => openEditModal()}>
        <img src={Edit} alt="ícone do botão"></img>
        </StyledDashboardDevliEdit>
        <StyledDashboardDevliTrash type="button" onClick={() => openDeleteModal()}>
          <img src={Trash} alt="ícone do botão"></img>
        </StyledDashboardDevliTrash>
      </StyledDashboardDevliDiv>
      </StyledDashboardDevli>
  );
};

