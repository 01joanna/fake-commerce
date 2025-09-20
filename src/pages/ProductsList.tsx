import { useProducts } from "../hooks/useProducts"
import Card from "../components/Card/Card"

export default function ProductsList() {

    const { products, error } = useProducts()
    if (error) return <div>Error: {error.message}</div>
    console.log(products)
    
    return (
        <div>
            <h1>Todos los productos</h1>
            <div className="grid grid-cols-4 gap-4">
                {products.map(product => (
                    <Card key={product.id} product={product} />
                ))}
                </div>
        </div>
    )
}