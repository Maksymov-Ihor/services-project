import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ContactWrapp = styled.section`
    width: 100%;
    height: 100vh;
    background-color: ${p => p.theme.colors.bgPrimeryColor};
    
    padding-top: ${p => p.theme.space[6]}px;
    padding-bottom: ${p => p.theme.space[6]}px;
`

const Conteiner = styled.div`
    display: flex;
    max-width: 1200px;
    margin: auto;
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
    @media screen and (max-width: 767px) {
        flex-direction: column;
        align-items: center;
    }
    @media screen and (min-width: 768px) {
        align-items: center;
        justify-content: space-between;
        height: 100%;
    }
`

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: ${p => p.theme.space[3]}px;
    @media screen and (max-width: 767px) {
        padding-top: ${p => p.theme.space[6]}px;
        margin-bottom: ${p => p.theme.space[6]}px;
    }
`

const SubTitle = styled.h2`
    color: ${p => p.theme.colors.textPrimery};
    font-size: ${ p => p.theme.fontSizes.m};
    margin-bottom: ${p => p.theme.space[3]}px;
`

const Text = styled.p`
    color: ${p => p.theme.colors.textPrimery};
    font-size: ${ p => p.theme.fontSizes.s};
    margin-bottom: ${p => p.theme.space[3]}px;
    text-align: center;
`

const MailLink = styled(NavLink)`
    color: ${p => p.theme.colors.textPrimery};
    font-size: ${ p => p.theme.fontSizes.s};
    margin-bottom: ${p => p.theme.space[3]}px;
    text-decoration: none;
`

const TellLink = styled(NavLink)`
    color: ${p => p.theme.colors.textPrimery};
    font-size: ${ p => p.theme.fontSizes.s};
    margin-bottom: ${p => p.theme.space[3]}px;
    text-decoration: none;
`



const ContactMaps = styled.div`
    @media screen and (max-width: 767px) {
        width: 100%;
    }
    @media screen and (min-width: 768px) {
        width: 65%;
    }
`

const Maps = styled.iframe`
    width: 100%;
    height: 350px;
    border: 1px solid ${p => p.theme.colors.bgAccentColor};
    border-radius: ${p => p.theme.radii.normal};
`

export {
    ContactWrapp,
    Conteiner,
    ContactInfo,
    SubTitle,
    Text,
    MailLink,
    TellLink,
    ContactMaps,
    Maps
}