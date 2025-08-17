import React from "react";
import { useCart } from "../../context/CartContext";
import styles from "./CartItem.module.css";

function CartItem({ product }) { 
    const { id, name, price, oldPrice, quantity, image } = product;
    const totalPrice = (price * quantity).toFixed(2);

    const { updateQuantity, removeFromCart } = useCart();

    return (
        <div className={styles.product}>
            <div className={styles.photo}>
                <img src={image} alt={name} />
            </div>
            <div className={styles.productInfo}>
                <div className={styles.title}>{name}</div>
                <div className={styles.priceWrapper}>
                    <div className={styles.priceAndQuantity}>
                        <div className="price-base">
                            {oldPrice && <div className="old-price-base">${oldPrice}</div>}
                            <div className={`current-price-base ${styles.currentPrice}`}>${price}</div>
                        </div>
                        <div className={styles.quantity}>
                            <button
                                type="button"
                                className={styles.countButton}
                                onClick={() => updateQuantity(id, quantity - 1)}
                            >
                                -
                            </button>
                            <div className={styles.count}>{quantity}</div>
                            <button
                                type="button"
                                className={styles.countButton}
                                onClick={() => updateQuantity(id, quantity + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className={styles.totalPrice}>${totalPrice}</div>
                </div>
                <div className={styles.close} onClick={() => removeFromCart(id)}>X</div>
            </div>
        </div>
    )
}

export default CartItem;