import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Products from "./pages/products/Products";
import ProductsDetails from "./pages/productsDetails/ProductsDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Products />} />
        <Route path="products/:albumId" element={<ProductsDetails />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
