import type { Product } from '../models/Product';

const url = "https://api.escuelajs.co/api/v1/products"

export async function fetchProducts(): Promise<Product[]> {
    try {

        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const data: Product[] = await response.json()
        console.log(data)
        return data
    }
    catch (error) {
        console.log("Error fetching products")
        return []
    }
}
