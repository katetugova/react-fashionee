import React from "react";
import './styles/reset.css';
import './styles/common.css';
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import Showcase from "./pages/Showcase";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Showcase />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;