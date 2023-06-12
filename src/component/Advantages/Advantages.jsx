import {
    AdvantagesWrapp,
    Conteiner,
    SubTitle,
    ItemList,
    Item
} from './AdvantagesStyled';

const Advantages = () => {
    return (
        <AdvantagesWrapp>
            <Conteiner>
                <SubTitle>наши преимущества</SubTitle>
                <ItemList>
                    <Item>24/7, цілодобово без вихідних</Item>
                    <Item>Можливість виїзду по всій країні</Item>
                    <Item>Всі види ритуальних послуг</Item>
                    <Item>Безкоштовний виїзд та консультування</Item>
                </ItemList>
            </Conteiner>
        </AdvantagesWrapp>
    )
}

export default Advantages;