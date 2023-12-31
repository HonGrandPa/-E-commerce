import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Shop from "./Components/Pages/Shop"
import ShopCategory from "./Components/Pages/ShopCategory"
import Product from "./Components/Pages/Product"
import Cart from "./Components/Pages/Cart"
import LoginSignup from "./Components/Pages/LoginSignup"

export default function App() {
  return (
    <div className=" w-full shadow-md">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/men" element={<ShopCategory category="men" />} />
          <Route path="/women" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kids" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}