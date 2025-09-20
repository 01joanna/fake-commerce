import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById } from "../api/products";
import type { Product } from "../models/Product";
import type { Category } from "../models/Category";

export default function ProductDetail() {

    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (id) {
            fetchProductById(Number(id))
                .then((data) => setProduct(data))
                .catch((err) => setError(err))
        }
    }, [id])

    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (!product) {
        return <div>Este producto no existe...</div>
    }

    return (
        <div>
            <img
                src={product.images}
                alt={`Imagen de ${product.title}`}
            />
            <h1>{product.title}</h1>
            <div>
                <p>{product.price}</p>
                <p>{product.category?.name}</p>
            </div>
            <p>{product.description}</p>
        </div>
    )
}