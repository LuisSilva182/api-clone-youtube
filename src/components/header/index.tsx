import { 
    ButtomContainer, 
    ButtomIcon, 
    Container, 
    HeaderButtom, 
    LogoContainer, 
    SearchButtom, 
    SearchContainer, 
    SearchInput, 
    SearchInputContainer } from "./styles";
import HamburgerIcon from '../../assets/hamburger_2e5c6c0eec5a49acb97201c3f1e16542.png'
import Logo from '../../assets/YouTube-Logo_2cad60d8881f48c099a2043ad35e0b4b.png'
import SearchIcon from '../../assets/search_117b78df834249fdb899e63f5f5a8aac.png'
import MicIcon from '../../assets/microfone-gravador_5aec03c3660f4d97b7d99219e43f0185.png'
import VideoIcon from '../../assets/video_1a3f517c18cd4d86ab8f61fabd033f5a.png'
import NotificationIcon from '../../assets/sino_382bed4de97b4204abbd5eb05c8795d9.png'

interface IProps {
    openMenu: boolean,
    setOpenMenu: (openMenu: boolean) => void
}

function Header({ openMenu, setOpenMenu }:IProps) {
    return(
        <Container>
            <LogoContainer>
                <ButtomContainer  onClick={() => setOpenMenu(!openMenu)} margin='0 10px 0 0'>
                    <ButtomIcon alt="" src={HamburgerIcon} />
                </ButtomContainer>
                <img 
                    style={{cursor: 'pointer', width: '100px'}}
                    alt=""
                    src={Logo}
                />
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer>
                   <SearchInput placeholder="Pesquisar" />
                </SearchInputContainer>
                <SearchButtom >
                    <ButtomIcon alt="" src={SearchIcon}/>
                </SearchButtom>
                <ButtomContainer margin='0 0 0 10px'>
                    <ButtomIcon alt="" src={MicIcon}/>
                </ButtomContainer>
            </SearchContainer>

            <HeaderButtom>
                <ButtomContainer margin='0 0 0 10px'>
                    <ButtomIcon alt="" src={VideoIcon}/>
                </ButtomContainer>
                <ButtomContainer margin='0 0 0 10px'>
                    <ButtomIcon alt="" src={NotificationIcon}/>
                </ButtomContainer>
                <ButtomContainer margin='0 0 0 10px'>
                    P
                </ButtomContainer>
                
            </HeaderButtom>

        </Container>
    )
}

export default Header;