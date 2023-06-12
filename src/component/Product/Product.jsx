import Carousel from '../Carousel';

import image from '../../image/car2.jpg'

import {
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
} from './ProductStyled';

const Product = () => {
    return (
        <ProductWrapp>
            <Conteiner>
                <ProductInfo>
                    <SubTitil>широкий спектр товаров</SubTitil>
                    <Text>товары ритуального агенства "фівфівфів"</Text>
                    <ItemList>
                        <Item><ItemLink to='/'><TruckIcon />какойто товар<ArrowIcon /></ItemLink></Item>
                        <Item><ItemLink to='/'><TruckIcon />какойто товар<ArrowIcon /></ItemLink></Item>
                        <Item><ItemLink to='/'><TruckIcon />какойто товар<ArrowIcon /></ItemLink></Item>
                        <Item><ItemLink to='/'><TruckIcon />какойто товар<ArrowIcon /></ItemLink></Item>
                        <Item><ItemLink to='/'><TruckIcon />какойто товар<ArrowIcon /></ItemLink></Item>
                    </ItemList>
                    <LinkBtn to='/'>больше товаров<ArrowIcon /></LinkBtn>
                </ProductInfo>
                <Carousel image={image} />
            </Conteiner>
        </ProductWrapp>
    )
}

export default Product;