import {
    Conteiner,
    MailLink,
    InfoWrapp,
    SocialWrapp,
    SocialLink,
    TelWrapp,
    ItemList,
    Item,
    ItemLink
} from './PromoContactStyled';

const PromoContact = () => {
    return (
        <Conteiner>
            <MailLink href="mailto:info@service.com">info@service.com</MailLink>
            <InfoWrapp>
                <SocialWrapp>
                    <SocialLink href='#'></SocialLink>
                    <SocialLink href='#'></SocialLink>
                </SocialWrapp>
                <TelWrapp>
                    <ItemList>
                        <Item><ItemLink href="tel:+380675067025">+38 067 506 70 25</ItemLink></Item>
                        <Item><ItemLink href="tel:+380735067025">+38 073 506 70 25</ItemLink></Item>
                        <Item><ItemLink href="tel:+380935067025">+38 093 506 70 25</ItemLink></Item>
                        <Item><ItemLink href="tel:+380995325995">+38 099 532 59 95</ItemLink></Item>
                    </ItemList>
                </TelWrapp>
            </InfoWrapp>
        </Conteiner>
    )
}

export default PromoContact;