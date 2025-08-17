import React from "react";
import data from '../../data/products.json';
import useLocalStorage from "../../hooks/useLocalStorage";
import styles from "./ReviewedProducts.module.css";

function ReviewedProducts() {
    const [viewedIds] = useLocalStorage("recentlyViewed", []);
    const products = data.products.filter(p => viewedIds.includes(p.id));
    const recentItems = viewedIds.map(id => products.find(p => p.id === id));

    if (recentItems.length === 0) return null;
    
    return (
        <div className="sidebar-item">
            <div className="sidebar-title">Reviewed By You</div>
            <div className="sidebar-content">
                <div className={styles.reviewedProducts}>
                    {recentItems.map(item => (
                        <div className={styles.product} key={item.id}>
                            <div className={styles.image}>
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className={styles.info}>
                                <div className={styles.name}>{item.name}</div>
                                <div className={`price-base ${styles.price}`}>
                                    <div className={`current-price-base ${styles.currentPrice}`}>${item.price}</div>
                                    {item.oldPrice && <div className={`old-price-base ${styles.oldPrice}`}>${item.oldPrice}</div>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ReviewedProducts;