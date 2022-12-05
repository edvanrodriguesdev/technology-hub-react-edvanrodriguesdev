import { StyledHeader, StyledHeaderContainer, StyledHeaderButton   } from './styles'
import Logo from '../../assets/img/logo.svg'


export const Header = () => {
    return(
        <StyledHeader>
            <StyledHeaderContainer>
                <img src={Logo} alt="Logo"></img>
                <StyledHeaderButton>Sair</StyledHeaderButton>
            </StyledHeaderContainer>
        </StyledHeader>
    )
}