import React from "react";
import CartItem from "./CartItem";
import styles from "./CartList.module.css";

function CartList({ items }) {
    return (
        <div className={styles.productList}>
            {items.map(item => (
                <CartItem key={item.id} product={item} />
            ))}
        </div>
    );
}

export default CartList;