import React from "react";
import data from '../../data/products.json';

function ReviewedProducts() {
    const viewedIds = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");
    const products = data.products.filter(p => viewedIds.includes(p.id));
    const recentItems = viewedIds.map(id => products.find(p => p.id === id));

    if (recentItems.length === 0) return null;
    
    return (
        <div className="sidebar-item">
            <div className="sidebar-title">Reviewed By You</div>
            <div className="sidebar-content">
                <div className="reviewed-products">
                    {recentItems.map(item => (
                        <div className="product" key={item.id}>
                            <div className="image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="info">
                                <div className="name">{item.name}</div>
                                <div className="price">
                                    <div className="current-price">${item.price}</div>
                                    {item.oldPrice && <div className="old-price">${item.oldPrice}</div>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ReviewedProducts;