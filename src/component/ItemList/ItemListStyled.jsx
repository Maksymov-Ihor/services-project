import styled from "styled-components";

const ItemListWrapp = styled.section`
    width: 100%;
    background-color: ${p => p.theme.colors.bgAccentColor};
    padding-top: ${p => p.theme.space[6]}px;
    padding-bottom: ${p => p.theme.space[6]}px;
`

const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
`

const SecTitle = styled.h3`
    color: ${p => p.theme.colors.baseWhite};
`

const List = styled.ul`
    display: flex;
    /* flex-wrap: wrap; */
    @media screen and (max-width: 767px) {
        flex-direction: column;
        align-items: center;
    }
    @media screen and (min-width: 768px) and (max-width: 1199px) {
        max-width: 1199px;
        flex-wrap: wrap;        
    }
`

const Item = styled.li`
    
`

const WrappItem = styled.div`
    width: 280px;
    height: 350px;
    background-color: ${p => p.theme.colors.baseWhite};
`

export {
    ItemListWrapp,
    Conteiner,
    SecTitle,
    List,
    Item,
    WrappItem
}