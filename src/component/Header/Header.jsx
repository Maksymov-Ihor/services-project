import { useState } from "react";

import scrollController from "../../helpers/hidden";

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
            zIndex='999'
        >
            <MenuWrapp>
                <LogoLink to='/' >Тут Лого</LogoLink>
                <Navigation open={menuActive}>
                    <ItemList>
                        <Item><ItemLink to='/services' onClick={() => { setMenuActive(menuActive => !menuActive); scrollController.enabledScroll() }}>послуги</ItemLink></Item>
                        <Item><ItemLink to='/product' onClick={() => { setMenuActive(menuActive => !menuActive); scrollController.enabledScroll() }}>товари</ItemLink></Item>
                        <Item><ItemLink to='/' onClick={() => { setMenuActive(menuActive => !menuActive); scrollController.enabledScroll() }}>додаткова інформація</ItemLink></Item>
                        <Item><ItemLink to='/contact' onClick={() => { setMenuActive(menuActive => !menuActive); scrollController.enabledScroll() }}>контакти</ItemLink></Item>
                    </ItemList>
                    <ContactWrapp>
                        <ContactLink to="mailto:info@service.com"><Mail />info@service.com</ContactLink>
                        <ContactLink to="tel:+380675067025"><Phone />+38 067 506 70 25</ContactLink>
                    </ContactWrapp>
                    <CloseBtn type="button" onClick={() => { setMenuActive(menuActive => !menuActive); scrollController.enabledScroll() }}><Cross /></CloseBtn>
                </Navigation>
                <OpenBtn type="button" onClick={() => { setMenuActive(menuActive => !menuActive); scrollController.disabledScroll(); }}><Hamburger /></OpenBtn>
            </MenuWrapp>
        </Box>
    )
}

export default Header;