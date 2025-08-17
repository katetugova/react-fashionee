import React from "react";
import styles from "./Colors.module.css";

function ColorFilter({ colors, selectedColors, onToggle }) {
    return (
        <div className="sidebar-item">
            <div className="sidebar-title">Colors</div>
            <div className="sidebar-content">
                <div className={styles.colors}>
                    {colors.map((color) => (
                        <div className={styles.color} key={color}>
                            <input
                                type="checkbox"
                                className={styles.colorCheckbox}
                                id={color}
                                name="color"
                                value={color}
                                checked={selectedColors.includes(color)}
                                onChange={() => onToggle(color)}
                            />
                            <label htmlFor={color} className={styles.colorName}>{color}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ColorFilter;