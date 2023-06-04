import Box from "../component/Box/Box";

import ServicesList from "../component/ServicesList";
import ItemList from "../component/ItemList";
import Footer from "../component/Footer";

const ServicesPage = () => {
    return (
        <Box
            width='100%'
            as='div'
        >
            <ServicesList />
            <ItemList />
            <Footer />
        </Box>
    )
}

export default ServicesPage;