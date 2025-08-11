import React from "react";
import CartItem from "./CartItem";

function CartList({ items }) {
    return (
        <div className="product-list">
            {items.map(item => (
                <CartItem key={item.id} product={item} />
            ))}
        </div>
    );
}

export default CartList;