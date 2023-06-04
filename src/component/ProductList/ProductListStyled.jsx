import styled from "styled-components";

const ProductListWrapp = styled.section`
    width: 100%;
    background-color: ${p => p.theme.colors.bgPrimeryColor};
`

const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: auto;
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
    padding-top: ${p => p.theme.space[7]}px;
    padding-bottom: ${p => p.theme.space[6]}px;
`

const SubTitle = styled.h2`
    margin-bottom: ${p => p.theme.space[5]}px;
`
const ItemList = styled.ul`
    display: flex;
    @media screen and (max-width: 359px) {
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    @media screen and (min-width: 360px) and (max-width: 767px) {
        flex-wrap: wrap;
        justify-content: space-between;
    }
    @media screen and (min-width: 768px) and (max-width: 1199px) {
        flex-wrap: wrap;
        width: 664px;
    }
    @media screen and (min-width: 1200px) {
        flex-wrap: wrap;
    }
`

const Item = styled.li`
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: ${p => p.theme.radii.small};
    @media screen and (max-width: 359px) {
        width: 250px;
        height: 100px;
        margin-bottom: ${p => p.theme.space[3]}px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    @media screen and (min-width: 360px) and (max-width: 767px) {
        width: calc((100% - 16px) / 2);
        height: 75px;
        margin-bottom: ${p => p.theme.space[3]}px;
        &:nth-last-child(-n + 2) {
            margin-bottom: 0;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1199px) {
        width: 200px;
        height: 75px;
        margin-right: ${p => p.theme.space[5]}px;
        margin-bottom: ${p => p.theme.space[5]}px;
        &:nth-child(3n + 3) {
            margin: 0;
        }
        &:nth-last-child(-n + 3) {
            margin-bottom: 0;
        }
    }
    @media screen and (min-width: 1200px) {
        width: 268px;
        height: 100px;
        margin-right: ${p => p.theme.space[5]}px;
        margin-bottom: ${p => p.theme.space[5]}px;
        &:nth-child(4n + 4) {
            margin: 0;
        }
        &:nth-last-child(-n + 4) {
            margin-bottom: 0;
        }
    }
`

const ItemLink = styled.a`
    
`

export {
    ProductListWrapp,
    Conteiner,
    SubTitle,
    ItemList,
    Item,
    ItemLink
}