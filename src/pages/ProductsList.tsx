import { useProducts } from "../hooks/useProducts"
import Card from "../components/Card/Card"

export default function ProductsList() {

    const { products, error } = useProducts()
    console.log(products)
    
    return (
        <div>

        </div>
    )
}