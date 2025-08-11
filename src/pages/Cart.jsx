import React, { useState } from "react";
import PromoSection from "../components/cart/PromoSection";
import CartItem from "../components/cart/CartItem";
import ContentBlock from "../components/ContentBlock";
import CartList from "../components/cart/CartList";
import CartSummary from "../components/cart/CartSummary";
import '../styles/cart.css';
import { useCart } from "../context/CartContext";

function Cart() {
    const { cart } = useCart();
    const [promoCode, setPromoCode] = useState("")

    const orderPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const delivery = cart.length > 0 ? 15 : 0;

    return (
        <>
            <ContentBlock title="Cart"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Shop", href: "/" },
                    { label: "Cart", active: true }
                ]}
            />
            <div className="container mt-250">
                <div className="cart">
                    <div className="order-wrapper">
                        <CartList items={cart} />
                        <CartSummary
                            orderPrice={orderPrice}
                            delivery={delivery}
                            promoCode={promoCode}
                        />
                    </div>
                    <PromoSection
                        applyPromo={(code) => setPromoCode(code)}
                    />
                </div>
            </div>
        </>
    );
}

export default Cart;