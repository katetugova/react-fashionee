import React from "react";
import { useCart } from "../../context/CartContext";

function CartItem({ product }) { 
    const { id, name, price, oldPrice, quantity, image } = product;
    const totalPrice = (price * quantity).toFixed(2);

    const { updateQuantity, removeFromCart } = useCart();

    return (
        <div className="product">
            <div className="photo">
                <img src={image} alt={name} />
            </div>
            <div className="product-info">
                <div className="title">{name}</div>
                <div className="price-wrapper">
                    <div className="price-and-quantity">
                        <div className="price">
                            {oldPrice && <div className="old-price">${oldPrice}</div>}
                            <div className="current-price">${price}</div>
                        </div>
                        <div className="quantity">
                            <button
                                type="button"
                                className="count-button"
                                onClick={() => updateQuantity(id, quantity - 1)}
                            >
                                -
                            </button>
                            <div className="count">{quantity}</div>
                            <button
                                type="button"
                                className="count-button"
                                onClick={() => updateQuantity(id, quantity + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="total-price">${totalPrice}</div>
                </div>
                <div className="close" onClick={() => removeFromCart(id)}>X</div>
            </div>
        </div>
    )
}

export default CartItem;