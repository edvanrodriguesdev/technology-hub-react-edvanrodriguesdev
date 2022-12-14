import {
    StyledModal,
    StyledModalTop,
    StyledModalAddTech,
    StyledModalCloseButton,
    StyledModalForm,
    StyledModalNameLabel,
    StyledModalNameInput,
    StyledModalStatusLabel,
    StyledModalStatusSelect,
    StyledModalStatusRegButton,
  } from "./styles";
  import { useContext, useState } from "react";
  import { TechContext } from "../../provides/TechContext";

  
  
  export const DeleteModal = () => {
    const { loading, setDeleteModal, deleteTech, titleTech, statusTech } = useContext(TechContext);
  
  
    const submit = async () => {
        await deleteTech()   
        
        
        closeModal()
      };
    
  
    function closeModal() {
      setDeleteModal(false)
    }
  
    return (
      <StyledModal>
        <StyledModalTop>
          <StyledModalAddTech>Deletar Tecnologia</StyledModalAddTech>
          <StyledModalCloseButton type="button" onClick={() => closeModal()}>X</StyledModalCloseButton>
        </StyledModalTop>
        <StyledModalForm>
          <StyledModalNameLabel>Nome</StyledModalNameLabel>
          <StyledModalNameInput>{titleTech}</StyledModalNameInput>
          <StyledModalStatusLabel>Status</StyledModalStatusLabel>
          <StyledModalStatusSelect>{statusTech}</StyledModalStatusSelect>
          <StyledModalStatusRegButton type="button" onClick={() => submit()} disabled={loading}>
            {loading ? "Deletando..." : "Deletar Tecnologia"}
          </StyledModalStatusRegButton>
        </StyledModalForm>
      </StyledModal>
    );
  };