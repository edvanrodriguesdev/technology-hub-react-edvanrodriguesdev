import { StyledLogin, StyledLoginDiv, StyledLoginForm, StyledLoginPTop, StyledLoginLabel, 
StyledLoginInput, StyledLoginEnterButton, StyledLoginPBot, StyledLoginRegButton } from './styles'
import Logo from '../../assets/img/logo.svg'
import { useNavigate } from 'react-router-dom'


export const Login = () => {

    const navigate = useNavigate()

    const handleLoginForm = event => {
        event.preventDefault()

        navigate("/dashboard")
    }

    return(
        <StyledLogin>
            <StyledLoginDiv>
                <img src={Logo} alt="Logo"></img>
                <StyledLoginForm onSubmit={handleLoginForm}>
                    <StyledLoginPTop>Login</StyledLoginPTop>
                    <StyledLoginLabel>Email</StyledLoginLabel>
                    <StyledLoginInput type="email"></StyledLoginInput>
                    <StyledLoginLabel>Senha</StyledLoginLabel>
                    <StyledLoginInput type="password"></StyledLoginInput>
                    <StyledLoginEnterButton>Entrar</StyledLoginEnterButton>
                    <StyledLoginPBot>Ainda não possui uma conta?</StyledLoginPBot>
                    <StyledLoginRegButton>Cadastre-se</StyledLoginRegButton>
                </StyledLoginForm>
            </StyledLoginDiv>
        </StyledLogin>
    )
}