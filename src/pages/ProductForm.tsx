import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import type { Product } from "../models/Product";
import { fetchProductById, createProduct, updateProduct } from "../api/products";

export default function ProductForm() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null)

    const [title, setTitle] = useState<string>("")
    const [price, setPrice] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [images, setImages] = useState<string>("")

    useEffect(() => {
        if (id) {
            fetchProductById(Number(id))
                .then(product => {
                    setTitle(product.title)
                    setPrice(product.price.toString());
                    setDescription(product.description)
                    setImages(product.images[0])
                })
        }
    }, [id])

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const payload: Omit<Product, "id"> = {
            title,
            price: Number(price),
            description,
            images: images
        }

        try {
            if (id) {
                await updateProduct(Number(id), payload);
                alert("Producto editado");
            } else {
                await createProduct(payload)
                alert("Producto creado")
            }
            navigate("/products")
        } catch (err) {
            alert("Error al guardar el producto")
        }
    }

    if (error) return <div>{error}</div>

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col w-64"
        >
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Título"
                className="border p-2 rounded"
            />
            <input
                type="number"
                value={price}
                onChange={e => setPrice(e.target.value)}
                placeholder="Precio"
                className="border p-2 rounded"
            />
            <input
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Descripción"
                className="border p-2 rounded"
            />
            <input
                type="text"
                value={images}
                onChange={e => setImages(e.target.value)}
                placeholder="Imagen"
                className="border p-2 rounded"
            />
            <button
            type="submit"
            className="">Submit</button>

        </form>
    )
}