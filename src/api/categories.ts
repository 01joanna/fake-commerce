import type { Category } from '../models/Category'

const url = "https://api.escuelajs.co/api/v1/categories"

export async function fetchCategories(): Promise<Category[]> {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const data: Category[] = await response.json()
        return data 
    }
    catch (error) {
        console.log("Error fetching categories")
        return [];
    }
}