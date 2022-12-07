import { StyledHeader, StyledHeaderContainer, StyledHeaderButton   } from './styles'
import Logo from '../../assets/img/logo.svg'


export const Header = ({ userLogout }) => {
    return(
        <StyledHeader>
            <StyledHeaderContainer>
                <img src={Logo} alt="Logo"></img>
                <StyledHeaderButton type='button' onClick={() => userLogout()}>Sair</StyledHeaderButton>
            </StyledHeaderContainer>
        </StyledHeader>
    )
}