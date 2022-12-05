import {
  StyledRegister,
  StyledRegisterDiv,
  StyledRegisterDivTop,
  StyledRegisterBackButton,
  StyledRegisterForm,
  StyledRegisterTitle,
  StyledRegisterSubtitle,
  StyledRegisterLabel,
  StyledRegisterInput,
  StyledRegisterSelect,
  StyledRegisterButton,
  StyledRegisterPErrors
} from "./styles";
import Logo from "../../assets/img/logo.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';


export const Register = () => {
  const navigate = useNavigate();

  const handleRegisterForm = (event) => {
    event.preventDefault();

    navigate("/");
  };

  const backButton = () => navigate(-1);

  const [selectValue, setSelectValue] = useState(1);
  const arr = [
    {
      id: 1,
      name: "Primeiro Módulo",
      course_module: "Primeiro módulo (Introdução ao Frontend)",
    },
    {
      id: 2,
      name: "Segundo Módulo",
      course_module: "Segundo módulo (Frontend Avançado)",
    },
    {
      id: 3,
      name: "Terceiro Módulo",
      course_module: "Terceiro módulo (Introdução ao Backend)",
    },
    {
      id: 4,
      name: "Quarto Módulo",
      course_module: "Quarto módulo (Backend Avançado)",
    },
  ];

  const registerSchema = yup.object().shape({
    name: yup.string().required("O nome é obrigatório!"),
    email: yup
      .string()
      .required("O e-mail é obrigatório!")
      .email("um e-mail válido precisa ser informado"),
    password: yup
      .string()
      .required("A senha é obrigatória!")
      .matches(/(?=.*?[a-z])/, "A senha precisa ter pelo menos uma letra minúscula.")
      .matches(/(?=.*?[0-9])/, "A senha precisa ter pelo menos um número.")
      .matches(
        /(?=.*?[#?!@$%^&*-])/,
        "A senha precisa ter pelo menos um caractere especial."
      )
      .min(8, "A senha deve contar no mínimo 8 (oito) caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const BaseURL = 'https://kenziehub.herokuapp.com/'
  const submit = (data) => {
    axios.post(BaseURL + 'users/')
    .then((response) => {
        
    })
  };

  return (
    <StyledRegister>
      <StyledRegisterDiv>
        <StyledRegisterDivTop>
          <img src={Logo} alt="Logo"></img>
          <StyledRegisterBackButton onClick={backButton}>
            Voltar
          </StyledRegisterBackButton>
        </StyledRegisterDivTop>
        <StyledRegisterForm onSubmit={handleSubmit(submit)} noValidate>
          <StyledRegisterTitle>Crie sua conta</StyledRegisterTitle>
          <StyledRegisterSubtitle>
            Rapido e grátis, vamos nessa
          </StyledRegisterSubtitle>
          <StyledRegisterLabel htmlFor="name">Nome</StyledRegisterLabel>
          <StyledRegisterInput
            type="text"
            id="name"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          ></StyledRegisterInput>
          <StyledRegisterPErrors>{errors.name?.message && <p>{errors.name.message}</p>}</StyledRegisterPErrors>
          <StyledRegisterLabel htmlFor="email">Email</StyledRegisterLabel>
          <StyledRegisterInput
            type="email"
            id="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          ></StyledRegisterInput>
          <StyledRegisterPErrors>{errors.email?.message && <p>{errors.email.message}</p>}</StyledRegisterPErrors>
          <StyledRegisterLabel htmlFor="password">Senha</StyledRegisterLabel>
          <StyledRegisterInput
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          ></StyledRegisterInput>
          <StyledRegisterPErrors>{errors.password?.message && <p>{errors.password.message}</p>}</StyledRegisterPErrors>
          <StyledRegisterLabel htmlFor="rptpassword">
            Confirmar Senha
          </StyledRegisterLabel>
          <StyledRegisterInput
            type="password"
            id="rptpassword"
            placeholder="Digite novamente sua senha"
            {...register("rptpassword")}
          ></StyledRegisterInput>
          <StyledRegisterPErrors>{errors.rptpassword?.message && <p>{errors.rptpassword.message}</p>}</StyledRegisterPErrors>
          <StyledRegisterLabel htmlFor="bio">Bio</StyledRegisterLabel>
          <StyledRegisterInput
            type="text"
            id="bio"
            placeholder="Fale sobre você"
            {...register("bio")}
          ></StyledRegisterInput>
          <StyledRegisterPErrors>{errors.bio?.message && <p>{errors.bio.message}</p>}</StyledRegisterPErrors>
          <StyledRegisterLabel htmlFor="contact">Contato</StyledRegisterLabel>
          <StyledRegisterInput
            type="text"
            id="contact"
            placeholder="Opção de contato"
            {...register("contact")}
          ></StyledRegisterInput>
          <StyledRegisterPErrors>{errors.contact?.message && <p>{errors.contact.message}</p>}</StyledRegisterPErrors>
          <StyledRegisterLabel htmlFor="module">
            Selecionar módulo
          </StyledRegisterLabel>
          <StyledRegisterSelect
            value={selectValue}
            {...register("course_module")}
            onChange={(e) => setSelectValue(e.target.value)}
          >
            {arr.map((item) => (
              <option key={item.id} value={item.course_module}>
                {item.name}
              </option>
            ))}
          </StyledRegisterSelect>
          <StyledRegisterButton type="submit">Cadastrar</StyledRegisterButton>
        </StyledRegisterForm>
      </StyledRegisterDiv>
    </StyledRegister>
  );
};

//const RegForm = () => {
//
//    const [name, setName] = useState('')
//
//    const handleChange = (e) => {
//      setName(e.target.value)
//    }
//
//    const submitRegForm = (e) => {
//      e.preventDefault()
//    }
//}
