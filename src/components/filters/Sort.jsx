import React from "react";

function Sort({ value, onChange }) {
    return (
        <div className="sort">
            <select className="input" value={value} onChange={(e) => onChange(e.target.value)}>
                <option value="relevance">Relevance</option>
                <option value="name-asc">From A to Z</option>
                <option value="name-desc">From Z to A</option>
                <option value="price-asc">From low to high</option>
                <option value="price-desc">From high to low</option>
            </select>
        </div>
    );
}

export default Sort;