import styled from "styled-components";
import { NavLink } from "react-router-dom";


const FooterWrapp = styled.section`
    display: flex;
    position: fixed; 
    z-index: 99;
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
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    margin: auto;
`

const TelLink = styled(NavLink)`
    text-decoration: none;
    color: ${p => p.theme.colors.baseWhite};
`

const MailLink = styled(NavLink)`
    text-decoration: none;
    color: ${p => p.theme.colors.baseWhite};
`

const SocialLink = styled.a`
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid rgba(255,255,255,0.4);
    border-radius: ${p => p.theme.radii.extraLarge};
    margin-right: ${p => p.theme.space[3]}px;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: ${p => p.theme.radii.extraLarge};
`

export {
    FooterWrapp,
    Conteiner,
    TelLink,
    MailLink,
    SocialLink,
    Img
}