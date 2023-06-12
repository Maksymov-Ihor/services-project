import {
    HeroWrapp,
    Conteiner,
    Description,
    CallText,
    Title,
    Text,
    LinkBtn
} from "./HeroStyled";

const Hero = () => {
    return (
        <HeroWrapp>
            <Conteiner>
                <Description>
                    <CallText>відповідальний та надійний</CallText>
                    <Title>Сервіс ритуальних послуг</Title>
                    <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat veniam quibusdam sapiente provident similique molestias dolorem id quis eius veritatis!</Text>
                    <LinkBtn href="#">заказать консультацию</LinkBtn>
                </Description>
            </Conteiner>
        </HeroWrapp>
    )
}

export default Hero;