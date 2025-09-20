import type { Product } from '../models/Product';
import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export async function fetchProducts(): Promise<Product[]> {
    const response = await axios.get<Product[]>(`${url}products`);
    return response.data;
}
