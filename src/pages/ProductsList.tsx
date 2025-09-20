import { useProducts } from "../hooks/useProducts"
import { deleteProduct } from "../api/products"
import Card from "../components/Card/Card"
import NavBar from "../components/Layout/NavBar"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function ProductsList() {

    const [search, setSearch] = useState<string>("")
    const navigate = useNavigate()
    const { products, error, setProducts } = useProducts()

    if (error) return <div>Error: {error.message}</div>

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    async function handleDelete(id: number) {
        if (id) {
            await deleteProduct(id)
            setProducts(products.filter(prod => prod.id !== id))
        }
    }

    return (
        <div>
            <NavBar value={search} onChange={setSearch} />
            <h1>Todos los productos</h1>
            <button
                onClick={() => navigate("/products/new")}
                className="border p-2 mb-2"
            >
                Crear producto
            </button>

            <div className="grid grid-cols-4 gap-4">
                {filteredProducts.map(product => (
                    <div key={product.id}>
                        <Card product={product} />
                        <button
                            onClick={() => handleDelete(product.id)}
                        >Borrar</button>
                    </div>
                ))}
            </div>
        </div>
    )
}