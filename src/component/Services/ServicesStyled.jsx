import styled from "styled-components";
import bgImage from '../../image/pexels-huỳnh-ân-12705635.jpg';
import { NavLink } from "react-router-dom";
import { FaTruckMoving } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';


const ServicesWrapp = styled.section`
    width: 100%;
    height: 600px;
    background-image: linear-gradient(to right,
        rgba(47,48,58,0.4),
        rgba(47,48,58,0.4)), 
        url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const Conteiner = styled.div`
    max-width: 1200px;
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
    margin: auto;
`

const ServicesInfo = styled.div`
    display: flex;
    flex-direction: column;
    color: ${p => p.theme.colors.baseWhite};
    padding-top: ${p => p.theme.space[6]}px;
    padding-bottom: ${p => p.theme.space[6]}px;
    @media screen and (max-width: 767px) {
        align-items: center;
    }
    @media screen and (min-width: 768px) {
        width: 50%;
    }
`

const SubTitil = styled.h2`
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.middle};
    margin-bottom: ${p => p.theme.space[4]}px;
`

const Text = styled.p`
    margin-bottom: ${p => p.theme.space[4]}px;
`

const ItemList = styled.ul`
    margin-bottom: ${p => p.theme.space[4]}px;
`
const Item = styled.li`
    margin-bottom: ${p => p.theme.space[3]}px;
`
const ItemLink = styled(NavLink)`
    display: flex;
    align-items: center;
    color: ${p => p.theme.colors.baseWhite};
    text-decoration: none;
    font-size: ${p => p.theme.fontSizes.s};
    text-transform: uppercase;
    padding: ${p => p.theme.space[1]}px;
`

const LinkBtn = styled(NavLink)`
    display: flex;
    align-items: center;
    color: ${p => p.theme.colors.baseWhite};
    text-decoration: none;
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.normal};
    padding: ${p => p.theme.space[3]}px;
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: ${p => p.theme.radii.small};
    text-transform: uppercase;
    box-shadow: inset 0px 0px 30px -15px rgba(255,255,255,1);
    @media screen and (min-width: 768px) {
        width: max-content;
    }
`
const TruckIcon = styled(FaTruckMoving)`
    color: ${p => p.theme.colors.baseWhite};
    margin-right: ${p => p.theme.space[3]}px;
`

const ArrowIcon = styled(BsArrowRight)`
    color: ${p => p.theme.colors.baseWhite};
    margin-left: ${p => p.theme.space[3]}px;
`

export {
    ServicesWrapp,
    Conteiner,
    ServicesInfo,
    SubTitil,
    Text,
    ItemList,
    Item,
    ItemLink,
    LinkBtn,
    TruckIcon,
    ArrowIcon,
}