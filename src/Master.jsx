import { Route, Routes, BrowserRouter } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { Laptops, Mobiles, Watches } from "./ProductList";
import ProductDetails from "./ProductDetails";
import Error from "./Error";
import Cart from "./Cart";
const Master = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Laptops />} />
            <Route path="mobiles" element={<Mobiles />} />
            <Route path="watches" element={<Watches />} />
          </Route>
          <Route path="/product/:type/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default Master;
