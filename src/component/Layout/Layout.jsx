import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Box from "../Box/Box";
import Header from "../Header";

const Layout = () => {
    return (
        <Box
            minWidth={320}
            as='main'
            height='100vh'
            position='relative'
        >
            <Header />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </Box>
    )
}

export default Layout;