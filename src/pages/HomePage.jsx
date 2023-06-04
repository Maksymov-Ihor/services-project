import Box from "../component/Box/Box";

import Hero from "../component/Hero";
import Advantages from "../component/Advantages";
import Services from "../component/Services";
import Product from "../component/Product";
import Footer from "../component/Footer";

const HomePage = () => {
    return (
        <Box
            width='100%'
            as='div'
        >
            <Hero />
            <Advantages />
            <Services />
            <Product />
            <Footer />
        </Box>
    )
}

export default HomePage;