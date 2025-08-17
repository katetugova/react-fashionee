import React, { useState, useEffect } from "react";
import data from '../data/products.json';
import ProductCard from '../components/shop/ProductCard';
import '../styles/shop.css';
import Categories from "../components/filters/Categories";
import Colors from "../components/filters/Colors";
import Search from "../components/filters/Search";
import Price from "../components/filters/Price";
import Sort from "../components/filters/Sort";
import Pagination from "../components/filters/Pagination";
import ContentBlock from "../components/ContentBlock";
import ReviewedProducts from '../components/shop/ReviewedProducts';
import useProductMeta from "../hooks/useProductMeta";

function Showcase() {
    // Состояние по поиску
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        setCurrentPage(1);
    }, [searchText]);

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

    // Состояние по сортировке
    const [sortType, setSortType] = useState("relevance");

    useEffect(() => {
        setCurrentPage(1);
    }, [sortType]);

    // Теукщая страница
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    // Фильтрация продуктов
    const filteredProducts = data.products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchText.toLowerCase());

        const matchesCategory = selectedCategory === "All" || product.categories.includes(selectedCategory);

        const matchesPrice =
            (!selectedMinPrice || product.price >= parseFloat(selectedMinPrice)) &&
            (!selectedMaxPrice || product.price <= parseFloat(selectedMaxPrice));
        
        const matchesColor = selectedColors.length === 0 || selectedColors.includes(product.color);

        return matchesSearch && matchesCategory && matchesPrice && matchesColor;
    });

    //Считывание фильтров
    const { categories, colors, minPrice, maxPrice } = useProductMeta(data.products);

    const pricePlaceholderMin = `$0`;
    const pricePlaceholderMax = `$${maxPrice.toFixed(0)}`;

    const sortedProducts = [...filteredProducts];

    switch (sortType) {
        case "name-asc":
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "name-desc":
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case "price-asc":
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case "price-desc":
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
    }

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = sortedProducts.slice(startIndex, endIndex);

    const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

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
                                        setCurrentPage(1);
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
                            <Sort value={sortType} onChange={setSortType} />
                        </div>
                        <div className="products">
                            {paginatedProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Showcase;