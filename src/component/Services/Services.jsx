import Carousel from '../Carousel';

import image from '../../image/car1.jpg'

import {
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
} from './ServicesStyled';

const Services = () => {
    return (
        <ServicesWrapp>
            <Conteiner>
                <ServicesInfo>
                    <SubTitil>широкий спектр услуг</SubTitil>
                    <Text>услуги ритуального агенства "фівфівфів"</Text>
                    <ItemList>
                        <Item><ItemLink to='/'><TruckIcon />какая то услуга<ArrowIcon /></ItemLink></Item>
                        <Item><ItemLink to='/'><TruckIcon />какая то услуга<ArrowIcon /></ItemLink></Item>
                        <Item><ItemLink to='/'><TruckIcon />какая то услуга<ArrowIcon /></ItemLink></Item>
                        <Item><ItemLink to='/'><TruckIcon />какая то услуга<ArrowIcon /></ItemLink></Item>
                        <Item><ItemLink to='/'><TruckIcon />какая то услуга<ArrowIcon /></ItemLink></Item>
                    </ItemList>
                    <LinkBtn to='/'>больше услуг<ArrowIcon /></LinkBtn>
                </ServicesInfo>
                <Carousel image={image} />
            </Conteiner>
        </ServicesWrapp>
    )
}

export default Services;