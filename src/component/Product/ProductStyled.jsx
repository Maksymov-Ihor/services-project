import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaTruckMoving } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const ProductWrapp = styled.section`
    width: 100%;
    height: 100%;
    background-color: ${p => p.theme.colors.bgPrimeryColor};
    padding-top: ${p => p.theme.space[6]}px;
    padding-bottom: ${p => p.theme.space[6]}px;
`

const Conteiner = styled.div`
    display: flex;
    flex-direction: row-reverse;
    max-width: 1200px;
    margin: auto;
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
    padding-top: ${p => p.theme.space[6]}px;
    padding-bottom: ${p => p.theme.space[6]}px;
    color: ${p => p.theme.colors.textPrimery};
    @media screen and (max-width: 767px) {
        flex-direction: column;
        align-items: center;
        padding-bottom: ${p => p.theme.space[5]}px;
    }
`

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 767px) {
        align-items: center;
        margin-bottom: ${p => p.theme.space[6]}px;
    }
    @media screen and (min-width: 768px) {
        width: 50%;
        margin-left: auto;
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
    color: ${p => p.theme.colors.textPrimery};
    text-decoration: none;
    font-size: ${p => p.theme.fontSizes.s};
    text-transform: uppercase;
    padding: ${p => p.theme.space[1]}px;
`

const LinkBtn = styled(NavLink)`
    display: flex;
    align-items: center;
    color: ${p => p.theme.colors.textPrimery};
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
    color: ${p => p.theme.colors.textPrimery};
    margin-right: ${p => p.theme.space[3]}px;
`

const ArrowIcon = styled(BsArrowRight)`
    color: ${p => p.theme.colors.textPrimery};
    margin-left: ${p => p.theme.space[3]}px;
`

export {
    ProductWrapp,
    Conteiner,
    ProductInfo,
    SubTitil,
    Text,
    ItemList,
    Item,
    ItemLink,
    LinkBtn,
    TruckIcon,
    ArrowIcon
}