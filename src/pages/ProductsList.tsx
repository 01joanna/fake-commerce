import { useProducts } from "../hooks/useProducts"
import { deleteProduct } from "../api/products"
import Card from "../components/Card/Card"

export default function ProductsList() {

    const { products, error, setProducts } = useProducts()
    if (error) return <div>Error: {error.message}</div>
    console.log(products)

    async function handleDelete(id: number) {
        if (id) {
            await deleteProduct(id)
            setProducts(products.filter(prod => prod.id !== id))
        }
    }

    return (
        <div>
            <h1>Todos los productos</h1>
            <div className="grid grid-cols-4 gap-4">
                {products.map(product => (
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