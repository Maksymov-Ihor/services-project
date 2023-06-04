import {
    ServicesListWrapp,
    Conteiner,
    SubTitle,
    ItemList,
    Item,
    ItemLink
} from './ServicesListStyled';

const ServicesList = () => {
    return (
        <ServicesListWrapp>
            <Conteiner>
                <SubTitle>ServicesList</SubTitle>
                <ItemList>
                    <Item><ItemLink>какая то услуга</ItemLink></Item>
                    <Item><ItemLink>какая то услуга</ItemLink></Item>
                    <Item><ItemLink>какая то услуга</ItemLink></Item>
                    <Item><ItemLink>какая то услуга</ItemLink></Item>
                    <Item><ItemLink>какая то услуга</ItemLink></Item>
                    <Item><ItemLink>какая то услуга</ItemLink></Item>
                    <Item><ItemLink>какая то услуга</ItemLink></Item>
                    <Item><ItemLink>какая то услуга</ItemLink></Item>
                    <Item><ItemLink>какая то услуга</ItemLink></Item>
                    <Item><ItemLink>какая то услуга</ItemLink></Item>
                    <Item><ItemLink>какая то услуга</ItemLink></Item>
                </ItemList>
            </Conteiner>
        </ServicesListWrapp>
    )
}

export default ServicesList;