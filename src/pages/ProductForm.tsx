import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchProductById, createProduct, updateProduct } from "../api/products";
import type { Product } from "../models/Product";

export default function ProductForm() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);

    const [title, setTitle] = useState<string>("");
    const [price, setPrice] = useState<string>(""); // string para input
    const [description, setDescription] = useState<string>("");
    const [image, setImage] = useState<string>("");

    // Cargar producto si estamos editando
    useEffect(() => {
        if (id) {
            fetchProductById(Number(id))
                .then(product => {
                    setTitle(product.title);
                    setPrice(product.price.toString()); // convertir number → string
                    setDescription(product.description);
                    setImage(product.images[0] || "");
                })
                .catch(() => setError("No se pudo cargar el producto"));
        }
    }, [id]);

    // Submit del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!title || !price || !description || !image) {
            alert("Todos los campos son obligatorios");
            return;
        }

        const payload = {
            title,
            price: Number(price),
            description,
            categoryId: 1,
            images: [image]
        };

        try {
            if (id) {
                await updateProduct(Number(id), payload);
                alert("Producto editado correctamente");
            } else {
                await createProduct(payload);
                alert("Producto creado correctamente");
            }
            navigate("/products");
        } catch (err: any) {
            alert("Error al guardar el producto: " + (err.message || err));
        }
    };

    if (error) return <div>{error}</div>;

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto p-4 border rounded">
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Título"
                className="border p-2 rounded"
                required
            />
            <input
                type="number"
                value={price}
                onChange={e => setPrice(e.target.value)}
                placeholder="Precio"
                className="border p-2 rounded"
                required
            />
            <input
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Descripción"
                className="border p-2 rounded"
                required
            />
            <input
                type="text"
                value={image}
                onChange={e => setImage(e.target.value)}
                placeholder="URL de la imagen"
                className="border p-2 rounded"
                required
            />
            <button type="submit" className="bg-green-500 text-white px-3 py-2 rounded">
                {id ? "Actualizar" : "Crear"} Producto
            </button>
        </form>
    );
}
