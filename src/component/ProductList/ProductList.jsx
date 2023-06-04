import {
    ProductListWrapp,
    Conteiner,
    SubTitle,
    ItemList,
    Item,
    ItemLink
} from './ProductListStyled';

const ProductList = () => {
    return (
        <ProductListWrapp>
            <Conteiner>
                <SubTitle>ProductList</SubTitle>
                <ItemList>
                    <Item><ItemLink>товар</ItemLink></Item>
                    <Item><ItemLink>товар</ItemLink></Item>
                    <Item><ItemLink>товар</ItemLink></Item>
                    <Item><ItemLink>товар</ItemLink></Item>
                    <Item><ItemLink>товар</ItemLink></Item>
                    <Item><ItemLink>товар</ItemLink></Item>
                    <Item><ItemLink>товар</ItemLink></Item>
                    <Item><ItemLink>товар</ItemLink></Item>
                    <Item><ItemLink>товар</ItemLink></Item>
                    <Item><ItemLink>товар</ItemLink></Item>
                    <Item><ItemLink>товар</ItemLink></Item>
                </ItemList>
            </Conteiner>
        </ProductListWrapp>
    )
}

export default ProductList;