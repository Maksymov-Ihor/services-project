import {
    ContactWrapp,
    Conteiner,
    ContactInfo,
    SubTitle,
    Text,
    MailLink,
    TellLink,
    ContactMaps,
    Maps
} from './ContactStyled';

const Contact = () => {
    return (
        <ContactWrapp>
            <Conteiner>
                <ContactInfo>
                    <SubTitle>Название компании</SubTitle>
                    <Text>какой то город ул. ййййййййййййййй</Text>
                    <MailLink to="mailto:info@service.com">info@service.com</MailLink>
                    <TellLink to="tel:+380961111111">+380961111111</TellLink>
                </ContactInfo>
                <ContactMaps>
                    <Maps src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7622.2824417595775!2d30.373166033260382!3d50.392066161488415!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ca32fe8bc62d%3A0xd697652f8e34ec8c!2z0JbQmiAi0KnQsNGB0LvQuNCy0LjQuSIg0KHQstGP0YLQvtGI0LjQvdGB0LrQsNGPIDM1LdCQLCDRg9C7LiDQodCy0Y_RgtC-0YjQuNC90YHQutCw0Y8sIDM10JAsINCS0LjRiNC90LXQstC-0LUsINCa0LjQtdCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDA4MTMy!5e0!3m2!1sru!2sua!4v1685708920888!5m2!1sru!2sua' SameSite='Lax'></Maps>
                </ContactMaps>
            </Conteiner>
        </ContactWrapp>
    )
}

export default Contact;