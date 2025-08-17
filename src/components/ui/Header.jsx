import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../../context/FavoritesContext";
import { useCart } from "../../context/CartContext";
import styles from "./Header.module.css";

function Header() {
    const { favorites } = useFavorites();
    const { totalItems } = useCart();

    return (
        <header className={styles.header}>
            <div className={styles.leftSide}>
                <div className={styles.logoContainer}>
                    <div className={styles.burgerMenu}>
                        <input type="checkbox" id="burger-checkbox" className={styles.burgerCheckbox} />
                        <label htmlFor="burger-checkbox" className={styles.burger} ></label>
                    </div>
                    <div className={styles.logo}>
                        <img src="/icons/logo.svg" alt="logo" />
                    </div>
                </div>
                <div className={styles.menu}>
                    <Link className={styles.menuItem} to="#">
                        <span>Home</span>
                    </Link>
                    <Link className={styles.menuItem} to="#">
                        <span>Pages</span>
                        <img src="/icons/arrow.svg" alt="arrow" className={styles.arrowDefault} />
                        <img src="/icons/arrow-pink.svg" alt="arrow" className={styles.arrowHover} />
                    </Link>
                    <Link className={styles.menuItem} to="/">
                        <span>Shop</span>
                        <img src="/icons/arrow.svg" alt="arrow" className={styles.arrowDefault} />
                        <img src="/icons/arrow-pink.svg" alt="arrow" className={styles.arrowHover} />
                    </Link>
                    <Link className={styles.menuItem} to="#">
                        <span>Blog</span>
                    </Link>
                    <Link className={styles.menuItem} to="#">
                        <span>Contact</span>
                    </Link>
                </div>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.headerIcon}>
                    <img src="/icons/search.svg" alt="search" />
                </div>
                <div className={styles.headerIcon}>
                    <img src="/icons/profile.svg" alt="profile" />
                </div>
                <div className={styles.headerIcon}>
                    <img src="/icons/heart.svg" alt="favorites" />
                    <div className={styles.counter}>{favorites.length}</div>
                </div>
                <Link className={styles.headerIcon} to="/cart">
                    <img src="/icons/cart.svg" alt="cart" />
                    <div className={styles.counter}>{totalItems}</div>
                </Link >
            </div>
        </header>
    );
}

export default Header;