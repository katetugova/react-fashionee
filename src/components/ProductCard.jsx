import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";

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

    return (
        <div className="product">
            <div className="photo">
                <img src={image} alt={name} />
                <div className="top-bar">
                    <div className="labels">
                        {isSale && <div className="label sale">Sale</div>}
                        {isNew && <div className="label new">New</div>}
                    </div>
                    <div className="favorites" onClick={() => toggleFavorite(id)}>
                        <img src={isFavorite ? "/icons/heart-filled.svg" : "/icons/heart.svg"} alt="favorites" />
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="name">
                    {name}
                </div>
                <div className="price">
                    <div className="current-price">{price}</div>
                    {oldPrice && (<div className="old-price">{oldPrice}</div>)}
                </div>
            </div>
            <div className="product-actions">
                {quantity === 0 ? (
                    <button className="buy-button" onClick={() => addToCart(product)}>Buy</button>
                ) : (
                    <div className="quantity-controls">
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