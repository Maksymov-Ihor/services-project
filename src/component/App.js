import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import GlobalStyle from "./GlobalStyle";

import Layout from "./Layout";

const HomePage = lazy(() => import('../pages/HomePage'));
const ServicesPage = lazy(() => import('../pages/ServicesPage'));
const ProductPage = lazy(() => import('../pages/ProductPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));

function App() {
  return (
        <>
          <Routes>
              <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
              </Route>
            </Routes>
            <GlobalStyle />
        </>
  );
}

export default App;