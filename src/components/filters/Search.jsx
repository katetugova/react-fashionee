import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";

function Search({ onSearch }) {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            onSearch(inputValue.trim().toLowerCase());
        }, 500);

        return () => clearTimeout(timeout);
    }, [inputValue, onSearch]);

    return (
        <div className={styles.search}>
            <label>
                <input type="text" placeholder="Search" className={`input-base ${styles.searchRow}`} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <img src="/icons/search.svg" alt="Search icon" className={styles.searchIcon} />
            </label>
        </div>
    );
}

export default Search;