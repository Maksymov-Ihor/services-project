import {
    FooterWrapp,
    Conteiner,
    TelLink,
    MailLink,
    SocialLink,
    Img
} from './FooterStyles';

import svgViber from '../../image/viber_black_logo_icon_147056.svg';
import svgTelegram from '../../image/telegram_black_logo_icon_147073.svg';

const Footer = () => {
    return (
        <FooterWrapp>
            <Conteiner>
                <div>
                    <SocialLink href='#'><Img src={svgViber}  alt='viber'/></SocialLink>
                    <SocialLink href='#'><Img src={svgTelegram}  alt='telegram'/></SocialLink>
                </div>
                <div>
                    <TelLink to='tel:+380961111111'>+38 096 111 11 11</TelLink>
                    <MailLink to='mailto:info@service.com'>info@service.com</MailLink>
                </div>
            </Conteiner>
        </FooterWrapp>
    )
}

export default Footer;