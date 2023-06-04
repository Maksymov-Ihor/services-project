import {
    FooterWrapp,
    Conteiner,
    TelLink,
    MailLink
} from './FooterStyles';

const Footer = () => {
    return (
        <FooterWrapp>
            <Conteiner>
                <TelLink to='tel:+380961111111'>+38 096 111 11 11</TelLink>
                <MailLink to='mailto:info@service.com'>info@service.com</MailLink>
            </Conteiner>
        </FooterWrapp>
    )
}

export default Footer;