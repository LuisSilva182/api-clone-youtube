import { ButtomIcon } from "../header/styles";
import { Container, MenuItem } from "./styles";
import NotificationIcon from '../../assets/sino_382bed4de97b4204abbd5eb05c8795d9.png'
import { useNavigate } from "react-router-dom";


const items = [{name: 'Inicio', link: '/'},{name: 'Biblioteca', link: '/library'},{name: 'Historico', link: '/history'}]


interface IProps {
    openMenu: boolean;

}
function Menu({ openMenu }: IProps) {

    const navigate = useNavigate();

    return(
        <Container openMenu={openMenu}>
            {items.map((items) => (
                <MenuItem openMenu={openMenu} onClick={() => navigate(items.link)}>
                    <ButtomIcon alt="" src={NotificationIcon} />
                    <span>{items.name}</span>
                </MenuItem>

            ))}

        </Container>
    )
}

export default Menu;