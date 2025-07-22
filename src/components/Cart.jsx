import React from "react";
import PromoSection from "./PromoSection";
import CartItem from "./CartItem";
import '../styles/cart.css';
import { useCart } from "../context/CartContext";

function Cart() {
    const { cart, updateQuantity, removeFromCart } = useCart();

    return (
        <div className="container mt-250">
            <div className="cart">
                <div className="order-wrapper">
                    <div className="product-list">
                        {cart.map(item => (
                            <CartItem key={item.id} product={item} />
                        ))}
                    </div>
                    <div className="order">
                        <div className="title">Your Order</div>
                        <div className="order-price-wrapper">
                            <div className="price-row">
                                <div className="name">Оrder price</div>
                                <div className="price">$146.98</div>
                            </div>
                            <div className="price-row">
                                <div className="name">Discount for promo code</div>
                                <div>No</div>
                            </div>
                            <div className="price-row delimiter">
                                <div className="name">
                                    Delivery <span className="additional">(Aug 02 at 16:00)</span>
                                </div>
                                <div className="price">$16</div>
                            </div>
                            <div className="price-row total">
                                <div className="name">Total</div>
                                <div className="price">$162.98</div>
                            </div>
                        </div>
                        <div className="button-wrapper">
                            <button className="button">Checkout</button>
                        </div>
                    </div>
                </div>
                <PromoSection />
            </div>
        </div>
    );
}

export default Cart;