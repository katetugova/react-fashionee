import React from "react";
import styles from "./Price.module.css";

function Price({ minPrice, maxPrice, placeholderMin, placeholderMax, onMinChange, onMaxChange }) {
    return (
        <div className="sidebar-item">
            <div className="sidebar-title">Price</div>
            <div className="sidebar-content">
                <div className={styles.priceBar}>
                    <input
                        type="text"
                        placeholder={placeholderMin}
                        className="input-base"
                        pattern=""
                        value={minPrice}
                        onChange={(e) => onMinChange(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder={placeholderMax}
                        className="input-base"
                        pattern=""
                        value={maxPrice}
                        onChange={(e) => onMaxChange(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Price;