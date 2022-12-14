import {
  StyledLogin,
  StyledLoginDiv,
  StyledLoginForm,
  StyledLoginPTop,
  StyledLoginLabel,
  StyledLoginInput,
  StyledLoginEnterButton,
  StyledLoginPBot,
  StyledLoginRegButton,
} from "./styles";
import Logo from "../../assets/img/logo.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../provides/UserContext";


export const Login = () => {
  const navigate = useNavigate();
  const { userLogin } = useContext(UserContext)
  const { loading } = useContext(UserContext)

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .required("O e-mail é obrigatório!")
      .email("Um e-mail válido precisa ser informado"),
    password: yup.string().required("A senha é obrigatória!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });


  const submit = async (data) => {
    await userLogin(data) 
    reset()
    navigate("/dashboard")
  };

  return (
    <StyledLogin>
      <StyledLoginDiv>
        <img src={Logo} alt="Logo"></img>
        <StyledLoginForm onSubmit={handleSubmit(submit)} noValidate>
          <StyledLoginPTop>Login</StyledLoginPTop>
          <StyledLoginLabel>Email</StyledLoginLabel>
          <StyledLoginInput
            type="email"
            id="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          ></StyledLoginInput>
          {errors.email?.message && <p>{errors.email.message}</p>}
          <StyledLoginLabel>Senha</StyledLoginLabel>
          <StyledLoginInput
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          ></StyledLoginInput>
          {errors.password?.message && <p>{errors.password.message}</p>}
          <StyledLoginEnterButton type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </StyledLoginEnterButton>
          <StyledLoginPBot>Ainda não possui uma conta?</StyledLoginPBot>
          <Link to="/register">
            <StyledLoginRegButton>Cadastre-se</StyledLoginRegButton>
          </Link>
        </StyledLoginForm>
      </StyledLoginDiv>
    </StyledLogin>
  );
};
