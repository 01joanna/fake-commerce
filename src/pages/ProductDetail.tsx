import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById, deleteProduct } from "../api/products";
import type { Product } from "../models/Product";

export default function ProductDetail() {

    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            fetchProductById(Number(id))
                .then((data) => setProduct(data))
                .catch((err) => setError(err))
        }
    }, [id])

    async function handleDelete(id: number) {
        if (!product) return;
        if (product) {
            try {
                await deleteProduct(product.id);
                alert("Producto borrado")
                navigate("/products")
            } catch (error) {
                alert("No se ha podido borrar el producto")
            }
        }
    }

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

            <div className="flex gap-3">
                <button onClick={() => handleDelete(product.id)}>Delete</button>
                <button>Edit</button>
            </div>
        </div>
    )
}