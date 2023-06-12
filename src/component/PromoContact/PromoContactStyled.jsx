import styled from "styled-components";

const Conteiner = styled.div`
    @media screen and (max-width: 1199px) {
        min-width: 256px;
        max-width: 300px;
    }
    @media screen and (min-width: 1200px) {
        display: none;
    }
`

const MailLink = styled.a`
    display: block;
    text-decoration: none;
    text-align: center;
    color: ${p => p.theme.colors.baseWhite};
    margin-bottom: ${p => p.theme.space[4]}px;
`

const InfoWrapp = styled.div`
    @media screen and (max-width: 1199px) {
        display: flex;
        justify-content: space-between;
    }
`

const SocialWrapp = styled.div`
    @media screen and (max-width: 1199px) {
        /* flex-direction: column; */
        /* align-items: center; */
    }
`

const SocialLink = styled.a`
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 1px solid rgba(255,255,255,0.4);
    border-radius: ${p => p.theme.radii.extraLarge};
    margin-right: ${p => p.theme.space[4]}px;
    &:last-child {
        margin-right: 0px;
    }
`

const TelWrapp = styled.div`
    
`

const ItemList = styled.ul`

`

const Item = styled.li`

`

const ItemLink = styled.a`
    text-decoration: none;
    color: ${p => p.theme.colors.baseWhite};
`

export {
    Conteiner,
    MailLink,
    InfoWrapp,
    SocialWrapp,
    SocialLink,
    TelWrapp,
    ItemList,
    Item,
    ItemLink
}