import React from "react";
import '../styles/cart.css';
import '../styles/common.css';

function ContentBlock({ title, breadcrumbs, onBreadcrumbClick }) {
    return (
        <div className="container-big mt-200">
            <div className="photo-main-screen"></div>
            <div className="container">
                <div className="dots-main-screen">
                    <img src="/images/dots-11row.svg" alt="" />
                </div>
                <div className="main-screen-wrapper">
                    <div className="title">{title}</div>
                    <ul className="bread-crumbs">
                        {breadcrumbs.map((item, index) => (
                                <li key={index}>
                                <a
                                    href={item.href || "#"}
                                    className={`item${item.active ? " active" : ""}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (!item.active && item.label.toLowerCase() === "shop") {
                                            onBreadcrumbClick("shop");
                                        }
                                        if (!item.active && item.label.toLowerCase() === "cart") {
                                            onBreadcrumbClick("cart");
                                        }
                                    }}>
                                    {item.label}
                                </a>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="horizontal-line"></div>
            </div>
        </div> 
    );
}

export default ContentBlock;