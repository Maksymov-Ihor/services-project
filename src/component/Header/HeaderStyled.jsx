import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import { LuMail } from 'react-icons/lu';
import { FiPhoneCall } from 'react-icons/fi';


const MenuWrapp = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
    @media screen and (max-width: 1199px) {
        justify-content: space-between;    
        
    }
    @media screen and (min-width: 1200px) {
        width: 1200px;
        margin: auto;
    }
`

const LogoLink = styled(NavLink)`
    text-decoration: none;
    color: ${p => p.theme.colors.baseWhite};
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.average};
    margin-right: ${p => p.theme.space[6]}px;
`

const Navigation = styled.nav`
    width: 100%;
    @media screen and (max-width: 1199px) {
        display: ${({ open }) => (open ? 'flex' : 'none')};
        flex-direction: column;
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        background-color: rgba(0,0,0,0.4);
        backdrop-filter: blur(5px);
        padding: ${p => p.theme.space[5]}px;
        padding-top: ${p => p.theme.space[6]}px;
        padding-bottom: ${p => p.theme.space[6]}px;
    }
    @media screen and (min-width: 1200px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    } 
`

const ItemList = styled.ul`
    @media screen and (max-width: 1199px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: ${p => p.theme.space[4]}px;
        &::after {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background-color: rgba(255,255,255,0.4);
        }    
    }
    @media screen and (min-width: 1200px) {
        display: flex;
    }
`

const Item = styled.li`
    @media screen and (max-width: 1199px) {
        margin-bottom: ${p => p.theme.space[4]}px;
    }
    @media screen and (min-width: 1200px) {
        margin-right: ${p => p.theme.space[4]}px;
        &:last-child {
            margin-right: 0;
        }
    }
`

const ItemLink = styled(NavLink)`
    text-decoration: none;
    color: ${p => p.theme.colors.baseWhite};
    font-weight: ${p => p.theme.fontWeights.middle};
    @media screen and (max-width: 1199px) {
        font-size: ${p => p.theme.fontSizes.m};
    }
    @media screen and (min-width: 1200px) {
        position: relative;
        font-size: ${p => p.theme.fontSizes.s};
        padding: ${p => p.theme.space[2]}px;
    }
`

const ContactLink = styled(NavLink)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${p => p.theme.colors.baseWhite};
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.normal};
    padding: ${p => p.theme.space[1]}px;
    @media screen and (max-width: 1199px) {
        margin-bottom: ${p => p.theme.space[3]}px;
        &:last-child {
            margin-bottom: 0;
        }   
    }
    @media screen and (min-width: 1200px) {
        margin-right: ${p => p.theme.space[3]}px;
    }
`

const ContactWrapp = styled.div`
    @media screen and (max-width: 1199px) {
        /* display: none; */
    }
    @media screen and (min-width: 1200px) {
        display: flex;
        align-items: center;
    }
`

const CloseBtn = styled.button`
    @media screen and (max-width: 1199px) {
        position: absolute;
        top: 16px;
        right: 16px;
        padding: ${p => p.theme.space[2]}px;
        width: 32px;
        height: 32px;
        background: none;
        border: 1px solid ${p => p.theme.colors.baseWhite};
        border-radius: ${p => p.theme.radii.normal};
    };
    @media screen and (min-width: 1200px) {
        display: none;
    }
`

const Cross = styled(RxCross1)`
    width: 100%;
    height: 100%;
    fill: 0;
    color: ${p => p.theme.colors.baseWhite};
`

const OpenBtn = styled.button`
    @media screen and (max-width: 1199px) {
        padding: ${p => p.theme.space[2]}px;
        width: 32px;
        height: 32px;
        background: none;
        border: 1px solid ${p => p.theme.colors.baseWhite};
        border-radius: ${p => p.theme.radii.normal};
    }
    @media screen and (min-width: 1200px) {
        display: none;
    }
`

const Hamburger = styled(RxHamburgerMenu)`
    width: 100%;
    height: 100%;
    fill: 0;
    color: ${p => p.theme.colors.baseWhite};
`
const Phone = styled(FiPhoneCall)`
    margin-right: ${p => p.theme.space[3]}px;
`

const Mail = styled(LuMail)`
    margin-right: ${p => p.theme.space[3]}px;
`

export { 
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
}