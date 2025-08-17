import React, { useState } from "react";
import styles from "./CartSummary.module.css";

function CartSummary({ orderPrice, delivery, promoCode }) {
    const discountRate = 10;
    const isPromoValid = promoCode.trim().toLowerCase() === "ilovereact";
    const discount = isPromoValid ? orderPrice * (discountRate / 100) : 0;
    const totalWithDiscount = orderPrice - discount + delivery;

    const handleCheckout = () => {
        const orderData = { 
            orderPrice: orderPrice.toFixed(2),
            delivery,
            discount: isPromoValid ? `${discountRate}%` : "No",
            total: totalWithDiscount.toFixed(2),
            promoCode: promoCode || "—"
        };
        console.log("Order data:", orderData);
    };
    
    return (
        <div className={styles.order}>
            <div className={styles.title}>Your Order</div>
            <div className={styles.orderPriceWrapper}>
                <div className={styles.priceRow}>
                    <div className={styles.name}>Order price</div>
                    <div className={styles.price}>${orderPrice.toFixed(2)}</div>
                </div>
                <div className={styles.priceRow}>
                    <div className={styles.name}>Discount for promo code</div>
                    <div className={styles.price}>
                        {isPromoValid ? `${discountRate}%` : "No"}
                    </div>
                </div>
                <div className={`${styles.priceRow} ${styles.delimiter}`}>
                    <div className={styles.name}>
                        Delivery <span className={styles.additional}>(Aug 02 at 16:00)</span>
                    </div>
                    <div className={styles.price}>${delivery}</div>
                </div>
                <div className={`${styles.priceRow} ${styles.total}`}>
                    <div className={styles.name}>Total</div>
                    <div className={styles.price}>${totalWithDiscount.toFixed(2)}</div>
                </div>
            </div>
            <div className={styles.buttonWrapper} onClick={handleCheckout}>
                <button className={styles.button}>Checkout</button>
            </div>
        </div>
    );
}

export default CartSummary;