import React from "react";
import { useState } from "react";
import './styles/reset.css';
import './styles/common.css';
import Header from "./components/Header";
import ContentBlock from "./components/ContentBlock";
import Footer from "./components/Footer";
import Showcase from "./components/Showcase";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";

function App() {
  const [currentPage, setCurrentPage] = useState("shop");

  const pageConfig = {
    shop: {
      title: "Shop",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Shop", active: true }
      ]
    },
    cart: {
      title: "Cart",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Shop", href: "#", },
        { label: "Cart", active: true }
      ]
    }
  };

  const { title, breadcrumbs } = pageConfig[currentPage];

  return (
    <CartProvider>
      <FavoritesProvider>
        <Header onNavigate={setCurrentPage} />
        <ContentBlock title={title} breadcrumbs={breadcrumbs} onBreadcrumbClick={setCurrentPage} />
        {currentPage === "shop" && <Showcase />}
        {currentPage === "cart" && <Cart />}
        <Footer />
      </FavoritesProvider>
    </CartProvider>
  )
}

export default App;