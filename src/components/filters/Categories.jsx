import React from "react";

function CategoryFilter({ categories, selected, onSelect }) {
    return (
        <div className="sidebar-item">
            <div className="sidebar-title">Categories</div>
            <div className="sidebar-content">
                <ul className="custom-list">
                    <li
                        className={`item ${selected === "All" ? "active" : ""}`}
                        onClick={() => onSelect("All")}
                    >
                        All
                    </li>
                    {categories.map((category) => (
                        <li
                            key={category}
                            className={`item ${selected === category ? "active" : ""}`}
                            onClick={() => onSelect(category)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CategoryFilter;