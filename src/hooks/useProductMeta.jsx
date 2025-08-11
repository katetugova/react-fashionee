import React, { useMemo } from "react";

function useProductMeta(products) {
    return useMemo(() => {
        const categoriesSet = new Set();
        const colorsSet = new Set();
        let minPrice = Infinity;
        let maxPrice = -Infinity;

        products.forEach(product => {
            product.categories.forEach(category => categoriesSet.add(category));
            colorsSet.add(product.color);
            if (product.price < minPrice) minPrice = product.price;
            if (product.price > maxPrice) maxPrice = product.price;
        });

        return {
            categories: Array.from(categoriesSet),
            colors: Array.from(colorsSet),
            minPrice,
            maxPrice
        };
    }, [products]);
}

export default useProductMeta;