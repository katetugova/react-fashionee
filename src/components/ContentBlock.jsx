import React from "react";
import { Link } from "react-router-dom";
import '../styles/cart.css';
import '../styles/common.css';

function ContentBlock({ title, breadcrumbs }) {
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
                                <Link
                                    to={item.href || "#"}
                                    className={`item${item.active ? " active" : ""}`}>
                                    {item.label}
                                </Link>
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