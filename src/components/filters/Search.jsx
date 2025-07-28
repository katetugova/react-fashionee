import React, { useEffect, useState } from "react";

function Search({ onSearch }) {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            onSearch(inputValue.trim().toLowerCase());
        }, 500);

        return () => clearTimeout(timeout);
    }, [inputValue, onSearch]);

    return (
        <div className="search">
            <label>
                <input type="text" placeholder="Search" className="input search-row" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <img src="/icons/search.svg" alt="Search icon" className="search-icon" />
            </label>
        </div>
    );
}

export default Search;