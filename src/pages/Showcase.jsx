import React from "react";
import data from '../data/products.json';
import ProductCard from '../components/shop/ProductCard';
import '../styles/shop.css';
import CategoryFilter from "../components/filters/CategoryFilter";
import ColorFilter from "../components/filters/ColorFilter";
import ContentBlock from "../components/ContentBlock";
import ReviewedProducts from '../components/shop/ReviewedProducts';

function Showcase() {
    return (
        <>
            <ContentBlock title="Shop"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Shop", active: true }
                ]}
            />
            <div className="container mt-200">
                <div className="shop">
                    <div className="sidebar">
                        <div className="search">
                            <label>
                                <input type="text" placeholder="Search" className="input search-row" />
                                <img src="/icons/search.svg" alt="Search icon" className="search-icon" />
                            </label>
                        </div>
                        <CategoryFilter />
                        <div className="sidebar-item">
                            <div className="sidebar-title">Price</div>
                            <div className="sidebar-content">
                                <div className="price-bar">
                                    <input type="text" placeholder="0" className="input" pattern="" />
                                    <input type="text" placeholder="200" className="input" pattern="" />
                                </div>
                            </div>
                        </div>
                        <ColorFilter />
                        <div className="sidebar-item">
                            <div className="button-wrapper">
                                <button className="button">Apply Filter</button>
                                <div className="vertical-line"></div>
                            </div>
                        </div>
                        <ReviewedProducts />
                        <div>
                            <a href="">
                                <img src="/images/season-sale-banner.svg" alt="Season sale banner" />
                            </a>
                        </div>
                    </div>
                    <div className="products-wrapper">
                        <div className="sort-and-count">
                            <div className="products-count">
                                There are <span className="bold">{data.products.length}</span> products in this category
                            </div>
                            <div className="sort">
                                <select className="input">
                                    <option value="relevance">Relevance</option>
                                    <option value="asc">Asc</option>
                                    <option value="desc">Desc</option>
                                </select>
                            </div>
                        </div>
                        <div className="products">
                            {data.products.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                        <div className="pagination">
                            <div className="button left">
                                <img src="/icons/left-pagin-arrow.svg" alt="Left arrow" />
                            </div>
                            <div className="pages">
                                <div className="page active">1</div>
                                <div className="page">2</div>
                                <div className="page">3</div>
                            </div>
                            <div className="button right">
                                <img src="/icons/right-pagin-arrow.svg" alt="Right arrow" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Showcase;