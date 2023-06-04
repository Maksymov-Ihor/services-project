import styled from "styled-components";
import { NavLink } from "react-router-dom";
import bgImage from '../../image/pexels-derek-sutton-16806202.jpg';

const HeroWrapp = styled.section`
    width: 100%;
    background-image: linear-gradient(to right,
        rgba(47,48,58,0.4),
        rgba(47,48,58,0.4)), 
        url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* padding-top: ${p => p.theme.space[8]}px; */
    @media screen and (max-width: 1199px) {
        height: 100vh;
    }
    @media screen and (min-width: 1200px) {
        height: 100vh;
    }
`
const Conteiner = styled.div`
    display: flex;
    align-items: center;
    max-width: 1200px;
    height: 100%;
    padding-left: ${p => p.theme.space[5]}px;
    padding-right: ${p => p.theme.space[5]}px;
    margin: auto;
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    color: ${p => p.theme.colors.baseWhite};
    @media screen and (max-width: 767px) {
        max-width: 450px;
        align-items: center;
        margin: auto;
    }
    @media screen and (min-width: 768px) and (max-width: 1199px) {
        max-width: 550px;
    }
    @media screen and (min-width: 1200px) {
        width: 600px;
    }
`

const Title = styled.h1`
    margin-bottom: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.average};
    @media screen and (max-width: 767px) {
        text-align: center;
    }
    @media screen and (min-width: 768px) {
        margin-left: ${p => p.theme.space[4]}px;
    }
`

const Text = styled.p`
    margin-bottom: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.normal};
    @media screen and (max-width: 767px) {
        text-align: center;
    }
`

const LinkBtn = styled(NavLink)`
    display: flex;
    align-items: center;
    width: max-content;
    color: ${p => p.theme.colors.baseWhite};
    padding: ${p => p.theme.space[3]}px;
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: ${p => p.theme.radii.small};
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.normal};
    text-decoration: none;
    text-transform: uppercase;
    box-shadow: inset 0px 0px 30px -15px rgba(255,255,255,1);
    @media screen and (min-width: 768px) {
        margin-left: auto;
    }
`

export { 
    HeroWrapp,
    Conteiner,
    Description,
    Title,
    Text,
    LinkBtn
}