import type { Product } from '../models/Product';
import { fetchProducts } from '../api/products';
import { useState, useEffect } from 'react';

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchProducts()
        .then((data) => setProducts(data))
        .catch((err) => setError("Error recopilando productos"))
    }, [])

    return {
        products,
        error
    }
}