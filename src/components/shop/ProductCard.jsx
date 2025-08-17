import React from "react";
import { useFavorites } from "../../context/FavoritesContext";
import { useCart } from "../../context/CartContext";
import useLocalStorage from "../../hooks/useLocalStorage";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
    const {
        id,
        name,
        price,
        oldPrice,
        isNew,
        isSale,
        image
    } = product;

    const { favorites, toggleFavorite } = useFavorites();
    const isFavorite = favorites.includes(id);

    const { cart, addToCart, updateQuantity } = useCart();
    const cartItem = cart.find(item => item.id === id);
    const quantity = cartItem?.quantity || 0;

    const [viewed, setViewed] = useLocalStorage("recentlyViewed", []);

    const saveToRecentlyViewed = (id) => {
        setViewed(prev => {
            const updated = [id, ...prev.filter(v => v !== id)].slice(0, 3);
            return updated;
        });
    };

    return (
        <div className={styles.product}>
            <div className={styles.photo}>
                <img src={image} alt={name} />
                <div className={styles.topBar}>
                    <div className={styles.labels}>
                        {isSale && <div className={`${styles.label} ${styles.sale}`}>Sale</div>}
                        {isNew && <div className={`${styles.label} ${styles.new}`}>New</div>}
                    </div>
                    <div className={styles.favorites} onClick={() => toggleFavorite(id)}>
                        <img src={isFavorite ? "/icons/heart-filled.svg" : "/icons/heart.svg"} alt="favorites" />
                    </div>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.name}>
                    {name}
                </div>
                <div className="price-base">
                    <div className="current-price-base">${price}</div>
                    {oldPrice && (<div className="old-price-base">${oldPrice}</div>)}
                </div>
            </div>
            <div className={styles.productActions}>
                {quantity === 0 ? (
                    <button className={styles.buyButton} onClick={() => {
                        saveToRecentlyViewed(product.id);
                        addToCart(product);
                    }}>Buy</button>
                ) : (
                    <div className={styles.quantityControls}>
                        <button onClick={() => updateQuantity(id, quantity - 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => updateQuantity(id, quantity + 1)}>+</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductCard;