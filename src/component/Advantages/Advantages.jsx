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
                    <Item>Работаем круглосуточно без выходных</Item>
                    <Item>Профессионалы своего дела</Item>
                    <Item>Адекватные цены и высокое качество</Item>
                    <Item>Бесплатный выезд и консультирование</Item>
                </ItemList>
            </Conteiner>
        </AdvantagesWrapp>
    )
}

export default Advantages;