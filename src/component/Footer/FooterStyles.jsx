import styled from "styled-components";
import { NavLink } from "react-router-dom";


const FooterWrapp = styled.section`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    background-color: ${p => p.theme.colors.bgAccentColor};
    color: ${p => p.theme.colors.baseWhite};
    &::before {
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        background-color: rgba(255,255,255,0.4);
    }
`

const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: auto;
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
`

const TelLink = styled(NavLink)`
    text-decoration: none;
    color: ${p => p.theme.colors.baseWhite};
`

const MailLink = styled(NavLink)`
    text-decoration: none;
    color: ${p => p.theme.colors.baseWhite};
`

export {
    FooterWrapp,
    Conteiner,
    TelLink,
    MailLink
}