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
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { TechContext } from "../../provides/TechContext";



export const AddModal = () => {
  const [selectValue, setSelectValue] = useState(1);
  const { loading, createTech, setAddModal, setUser, user } = useContext(TechContext);


  const arr = [
    {
      id: 1,
      status: "Iniciante",
    },
    {
      id: 2,
      status: "Intermediário",
    },
    {
      id: 3,
      status: "Avançado",
    },
  ];

  const modalSchema = yup.object().shape({
    title: yup.string().required("A tecnologia é obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur", resolver: yupResolver(modalSchema) });

  const submit = async (data) => {
    await createTech(data);

    reset();
    closeModal()
    
  };

  function closeModal() {
    setAddModal(false)
  }

  return (
    <StyledModal>
      <StyledModalTop>
        <StyledModalAddTech>Cadastrar Tecnologia</StyledModalAddTech>
        <StyledModalCloseButton type="button" onClick={() => closeModal()}>X</StyledModalCloseButton>
      </StyledModalTop>
      <StyledModalForm onSubmit={handleSubmit(submit)} noValidate>
        <StyledModalNameLabel>Nome</StyledModalNameLabel>
        <StyledModalNameInput
          type="text"
          id="title"
          placeholder="Digite a tecnologia aqui"
          {...register("title")}
        ></StyledModalNameInput>
        {errors.title?.message && <p>{errors.title.message}</p>}
        <StyledModalStatusLabel>Selecionar status</StyledModalStatusLabel>
        <StyledModalStatusSelect
          value={selectValue}
          {...register("status")}
          onChange={(e) => setSelectValue(e.target.value)}
        >
          {arr.map((item) => (
            <option key={item.id} value={item.status}>
              {item.status}
            </option>
          ))}
          
        </StyledModalStatusSelect>
        <StyledModalStatusRegButton type="submit" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar Tecnologia"}
        </StyledModalStatusRegButton>
      </StyledModalForm>
    </StyledModal>
  );
};
