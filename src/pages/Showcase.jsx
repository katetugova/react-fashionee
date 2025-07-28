import React, { useState } from "react";
import data from '../data/products.json';
import ProductCard from '../components/shop/ProductCard';
import '../styles/shop.css';
import Categories from "../components/filters/Categories";
import Colors from "../components/filters/Colors";
import Search from "../components/filters/Search";
import Price from "../components/filters/Price";
import ContentBlock from "../components/ContentBlock";
import ReviewedProducts from '../components/shop/ReviewedProducts';

function Showcase() {
    // Состояние по поиску
    const [searchText, setSearchText] = useState("");

    // Состояние по категории
    const [selectedCategory, setSelectedCategory] = useState("All"); // значение из фильтра
    const [pendingCategory, setPendingCategory] = useState("All");   // временный выбор

    // Состояние по цене
    // Применённые в фильтре значения
    const [selectedMinPrice, setSelectedMinPrice] = useState("");
    const [selectedMaxPrice, setSelectedMaxPrice] = useState("");

    // Значения из инпутов (временный выбор)
    const [pendingMinPrice, setPendingMinPrice] = useState("");
    const [pendingMaxPrice, setPendingMaxPrice] = useState("");

    // Состояние по цвету
    const [selectedColors, setSelectedColors] = useState([]); // значение из фильтра
    const [pendingColors, setPendingColors] = useState([]);   // временный выбор

    // Фильтрация продуктов
    const filteredProducts = data.products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchText);

        const matchesCategory = selectedCategory === "All" || product.categories.includes(selectedCategory);

        const matchesPrice =
            (!selectedMinPrice || product.price >= parseFloat(selectedMinPrice)) &&
            (!selectedMaxPrice || product.price <= parseFloat(selectedMaxPrice));
        
        const matchesColor = selectedColors.length === 0 || selectedColors.includes(product.color);

        return matchesSearch && matchesCategory && matchesPrice && matchesColor;
    });

    //Считывание фильтров
    const allProducts = data.products;

    const categoriesSet = new Set();
    const colorsSet = new Set();
    let minPrice = Infinity;
    let maxPrice = -Infinity;

    allProducts.forEach(product => {
        product.categories.forEach(category => categoriesSet.add(category));

        colorsSet.add(product.color);

        if (product.price < minPrice) minPrice = product.price;
        if (product.price > maxPrice) maxPrice = product.price;
    });

    const pricePlaceholderMin = minPrice.toFixed(0);
    const pricePlaceholderMax = maxPrice.toFixed(0);

    const categories = Array.from(categoriesSet);
    const colors = Array.from(colorsSet);

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
                        <Search onSearch={setSearchText} />
                        <Categories
                            categories={categories}
                            selected={pendingCategory}
                            onSelect={setPendingCategory}
                        />
                        <Price
                            minPrice={pendingMinPrice}
                            maxPrice={pendingMaxPrice}
                            placeholderMin={pricePlaceholderMin}
                            placeholderMax={pricePlaceholderMax}
                            onMinChange={setPendingMinPrice}
                            onMaxChange={setPendingMaxPrice}
                        />
                        <Colors
                            colors={colors}
                            selectedColors={pendingColors}
                            onToggle={(color) => {
                                setPendingColors((prev) =>
                                    prev.includes(color)
                                        ? prev.filter(c => c !== color)
                                        : [...prev, color]
                                );
                            }}
                        />
                        <div className="sidebar-item">
                            <div className="button-wrapper">
                                <button
                                    className="button"
                                    onClick={() => {
                                        setSelectedCategory(pendingCategory);
                                        setSelectedMinPrice(pendingMinPrice);
                                        setSelectedMaxPrice(pendingMaxPrice);
                                        setSelectedColors(pendingColors);
                                    }}
                                >
                                    Apply Filter
                                </button>
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
                                There are <span className="bold">{filteredProducts.length}</span> products in this category
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
                            {filteredProducts.map(product => (
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