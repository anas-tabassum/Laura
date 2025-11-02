import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useState} from "react"
import Navbar from "./components/NavBar";
import Login from "./pages/Login";
import Error from "./pages/Error.jsx";
import Details from "./pages/Details.jsx";
import Cart from "./pages/Cart.jsx";
import Products from "./pages/Products.jsx";

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const cartHandle = (id) => {
        setCartItems((prevState) => [...prevState, id]);
    }
  return (
    <div  className="flex justify-center flex-wrap">
        <BrowserRouter>
        <Navbar cartLength={cartItems.length} />
            <Routes>
                <Route path="*" element={<Error />} />
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart cartItems = {cartItems} />} />
                <Route path="/details/:id" element={<Details onCartHandle = {cartHandle} />}  />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
export default App