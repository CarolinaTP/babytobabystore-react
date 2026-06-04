import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import ThankYou from "../pages/ThankYou/ThankYou";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/product/:id"
        element={<ProductDetail />}
      />

      <Route path="/cart" element={<Cart />} />

      <Route
        path="/checkout"
        element={<Checkout />}
      />

      <Route
        path="/thankyou"
        element={<ThankYou />}
      />
    </Routes>
  );
};

export default AppRouter;