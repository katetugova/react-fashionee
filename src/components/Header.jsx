import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";
import '../styles/header.css';

function Header({ onNavigate }) {
    const { favorites } = useFavorites();
    const { totalItems } = useCart();

    return (
        <header className="header">
            <div className="left-side">
                <div className="logo-container">
                    <div className="burger-menu">
                        <input type="checkbox" id="burger-checkbox" className="burger-checkbox" />
                        <label className="burger" htmlFor="burger-checkbox"></label>
                    </div>
                    <div className="logo">
                        <img src="/icons/logo.svg" alt="logo" />
                    </div>
                </div>
                <div className="menu">
                    <div className="menu-item">
                        <span>Home</span>
                    </div>
                    <div className="menu-item">
                        <span>Pages</span>
                        <img src="/icons/arrow.svg" alt="arrow" className="arrow-default" />
                        <img src="/icons/arrow-pink.svg" alt="arrow" className="arrow-hover" />
                    </div>
                    <div className="menu-item active" onClick={() => onNavigate("shop")}>
                        <span>Shop</span>
                        <img src="/icons/arrow.svg" alt="arrow" className="arrow-default" />
                        <img src="/icons/arrow-pink.svg" alt="arrow" className="arrow-hover" />
                    </div>
                    <div className="menu-item">
                        <span>Blog</span>
                    </div>
                    <div className="menu-item">
                        <span>Contact</span>
                    </div>
                </div>
            </div>
            <div className="right-side">
                <div className="header-icon">
                    <img src="/icons/search.svg" alt="search" />
                </div>
                <div className="header-icon">
                    <img src="/icons/profile.svg" alt="profile" />
                </div>
                <div className="header-icon">
                    <img src="/icons/heart.svg" alt="favorites" />
                    <div className="counter">{favorites.length}</div>
                </div>
                <div className="header-icon" onClick={() => onNavigate("cart")}>
                    <img src="/icons/cart.svg" alt="cart" />
                    <div className="counter">{totalItems}</div>
                </div>
            </div>
        </header>
    );
}

export default Header;