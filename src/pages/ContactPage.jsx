import Box from "../component/Box/Box";

import Contact from "../component/Contact";
import Footer from "../component/Footer";

const ContactPage = () => {
    return (
        <Box
            width='100%'
            as='div'
        >
            <Contact />
            <Footer />
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7622.2824417595775!2d30.373166033260382!3d50.392066161488415!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ca32fe8bc62d%3A0xd697652f8e34ec8c!2z0JbQmiAi0KnQsNGB0LvQuNCy0LjQuSIg0KHQstGP0YLQvtGI0LjQvdGB0LrQsNGPIDM1LdCQLCDRg9C7LiDQodCy0Y_RgtC-0YjQuNC90YHQutCw0Y8sIDM10JAsINCS0LjRiNC90LXQstC-0LUsINCa0LjQtdCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDA4MTMy!5e0!3m2!1sru!2sua!4v1685708920888!5m2!1sru!2sua"  style={{width: 600, height: 450}} ></iframe> */}
        </Box>
    )
}

export default ContactPage;

// allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"