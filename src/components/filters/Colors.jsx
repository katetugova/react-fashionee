import React from "react";

function ColorFilter({ colors, selectedColors, onToggle }) {
    return (
        <div className="sidebar-item">
            <div className="sidebar-title">Colors</div>
            <div className="sidebar-content">
                <div className="colors">
                    {colors.map((color) => (
                        <div className="color" key={color}>
                            <input
                                type="checkbox"
                                className="color-checkbox"
                                id={color}
                                name="color"
                                value={color}
                                checked={selectedColors.includes(color)}
                                onChange={() => onToggle(color)}
                            />
                            <label htmlFor={color} className="color-name">{color}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ColorFilter;