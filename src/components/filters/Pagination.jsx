import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="pagination">
            <div
                className={`button left ${currentPage === 1 ? "disabled" : ""}`}
                onClick={() => {
                    if (currentPage > 1) onPageChange(currentPage - 1);
                }}
            >
                <img src="/icons/left-pagin-arrow.svg" alt="Left arrow" />
            </div>

            <div className="pages">
                {pages.map((page) => (
                    <div
                        key={page}
                        className={`page ${currentPage === page ? "active" : ""}`}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </div>
                ))}
            </div>

            <div
                className={`button right ${currentPage === totalPages ? "disabled" : ""}`}
                onClick={() => {
                    if (currentPage < totalPages) onPageChange(currentPage + 1);
                }}
            >
                <img src="/icons/right-pagin-arrow.svg" alt="Right arrow" />
            </div>
        </div>
    );
}

export default Pagination;