import React from "react";
import styles from "./Pagination.module.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
    if (totalPages <= 1) return null;

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const goTo = (page) => {
        if (page < 1 || page > totalPages || page === currentPage) return;
        onPageChange(page);
    };

    return (
        <div className={styles.pagination}>
            <button
                type="button"
                aria-label="Previous page"
                className={`button left ${currentPage === 1 ? "disabled" : ""}`}
                onClick={() => goTo(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <img src="/icons/left-pagin-arrow.svg" alt="Left arrow" />
            </button>

            <div className={styles.pages}>
                {pages.map((page) => (
                    <button
                        key={page}
                        type="button"
                        className={`${styles.page} ${currentPage === page ? styles.active : ""}`}
                        onClick={() => onPageChange(page)}
                        aria-current={currentPage === page ? "page" : undefined}
                        aria-label={`Page ${page}`}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button
                type="button"
                aria-label="Next page"
                className={`button right ${currentPage === totalPages ? "disabled" : ""}`}
                onClick={() => goTo(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <img src="/icons/right-pagin-arrow.svg" alt="Right arrow" />
            </button>
        </div>
    );
}

export default Pagination;