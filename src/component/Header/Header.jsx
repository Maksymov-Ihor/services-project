import { useState } from "react";

import Box from "../Box/Box";

import {
    MenuWrapp,
    LogoLink,
    Navigation,
    ItemList,
    Item,
    ItemLink,
    ContactLink,
    ContactWrapp,
    CloseBtn,
    OpenBtn,
    Hamburger,
    Cross,
    Phone,
    Mail
} from './HeaderStyled';

const Header = () => {

    const [menuActive, setMenuActive] = useState(false);

    return (
        <Box
            width='100%'
            as='header'
            position='fixed'
            bg='rgba(0,0,0,0.5)'
            pt={4}
            pb={4}
        >
            <MenuWrapp>
                <LogoLink to='/' >Тут Лого</LogoLink>
                <Navigation open={menuActive}>
                    <ItemList>
                        <Item><ItemLink to='/services'>услуги</ItemLink></Item>
                        <Item><ItemLink to='/product'>товвары</ItemLink></Item>
                        <Item><ItemLink to='/'>дополнительно</ItemLink></Item>
                        <Item><ItemLink to='/contact'>контакты</ItemLink></Item>
                    </ItemList>
                    <ContactWrapp>
                        <ContactLink to="mailto:info@service.com"><Mail />info@service.com</ContactLink>
                        <ContactLink to="tel:+380961111111"><Phone />+38 096 111 11 11</ContactLink>
                    </ContactWrapp>
                    <CloseBtn type="button" onClick={() => setMenuActive(menuActive => !menuActive)}><Cross /></CloseBtn>
                </Navigation>
                <OpenBtn type="button" onClick={() => setMenuActive(menuActive => !menuActive)}><Hamburger /></OpenBtn>
            </MenuWrapp>
        </Box>
    )
}

export default Header;