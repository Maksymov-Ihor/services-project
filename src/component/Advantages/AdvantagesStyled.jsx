import styled from "styled-components";

const AdvantagesWrapp = styled.section`
    width: 100%;
    background-color: ${p => p.theme.colors.bgPrimeryColor};
    padding-top: ${p => p.theme.space[6]}px;
    padding-bottom: ${p => p.theme.space[6]}px;
`

const Conteiner = styled.div`
    display: flex;
    max-width: 1200px;
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
    flex-direction: column;
    align-items: center;
    margin: auto;
`

const SubTitle = styled.h3`
    font-size: ${p => p.theme.fontSizes.m};
    margin-bottom: ${p => p.theme.space[5]}px;
`

const ItemList = styled.ul`
    display: flex;
    @media screen and (max-width: 767px) {
        max-width: 450px;
        flex-direction: column;
    }
    @media screen and (min-width: 768px) and (max-width: 1199px) {
        max-width: 736px;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    @media screen {
        justify-content: space-between;
    }
`

const Item = styled.li`
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: ${p => p.theme.radii.small};
    height: 120px;
    @media screen and (max-width: 767px) {
        width: 100%;
        margin-bottom: ${p => p.theme.space[4]}px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1199px) {
        width: 350px;
        margin-bottom: ${p => p.theme.space[5]}px;
        &:nth-last-child(-n + 2) {
            margin-bottom: 0;
        }
    }
    @media screen and (min-width: 1200px) {
        width: calc((100% - 90px) / 4) 
    }
`

export {
    AdvantagesWrapp, 
    Conteiner,
    SubTitle,
    ItemList,
    Item
}