import React, { useState } from "react";

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
        <div className="order">
            <div className="title">Your Order</div>
            <div className="order-price-wrapper">
                <div className="price-row">
                    <div className="name">Order price</div>
                    <div className="price">${orderPrice.toFixed(2)}</div>
                </div>
                <div className="price-row">
                    <div className="name">Discount for promo code</div>
                    <div className="price">
                        {isPromoValid ? `${discountRate}%` : "No"}
                    </div>
                </div>
                <div className="price-row delimiter">
                    <div className="name">
                        Delivery <span className="additional">(Aug 02 at 16:00)</span>
                    </div>
                    <div className="price">${delivery}</div>
                </div>
                <div className="price-row total">
                    <div className="name">Total</div>
                    <div className="price">${totalWithDiscount.toFixed(2)}</div>
                </div>
            </div>
            <div className="button-wrapper" onClick={handleCheckout}>
                <button className="button">Checkout</button>
            </div>
        </div>
    );
}

export default CartSummary;