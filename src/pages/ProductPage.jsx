import Box from "../component/Box/Box";

import ProductList from "../component/ProductList";
import Footer from "../component/Footer";

const ProductPage = () => {
    return (
        <Box
            width='100%'
            as='div'
        >
            <ProductList />
            <Footer />
        </Box>
    )
}

export default ProductPage;