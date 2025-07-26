import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../../context/FavoritesContext";
import { useCart } from "../../context/CartContext";
import "../../styles/header.css";

function Header() {
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
                    <Link className="menu-item" to="#">
                        <span>Home</span>
                    </Link>
                    <Link className="menu-item" to="#">
                        <span>Pages</span>
                        <img src="/icons/arrow.svg" alt="arrow" className="arrow-default" />
                        <img src="/icons/arrow-pink.svg" alt="arrow" className="arrow-hover" />
                    </Link>
                    <Link className="menu-item" to="/">
                        <span>Shop</span>
                        <img src="/icons/arrow.svg" alt="arrow" className="arrow-default" />
                        <img src="/icons/arrow-pink.svg" alt="arrow" className="arrow-hover" />
                    </Link>
                    <Link className="menu-item" to="#">
                        <span>Blog</span>
                    </Link>
                    <Link className="menu-item" to="#">
                        <span>Contact</span>
                    </Link>
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
                <Link className="header-icon" to="/cart">
                    <img src="/icons/cart.svg" alt="cart" />
                    <div className="counter">{totalItems}</div>
                </Link >
            </div>
        </header>
    );
}

export default Header;