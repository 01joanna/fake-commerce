import type { Product } from '../models/Product';
import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export async function fetchProducts(): Promise<Product[]> {
    const response = await axios.get<Product[]>(`${url}products`);
    return response.data;
}

export async function fetchProductById(id: number): Promise<Product> {
    const response = await axios.get<Product>(`${url}products/${id}`);
    return response.data;
}

export async function createProduct(product: Omit<Product, 'id'>): Promise<Product> {
    const response = await axios.post<Product>(`${url}products`, product);
    return response.data;
}

export async function updateProduct(id: number, product: Omit<Product, 'id'>): Promise<Product> {
    const response = await axios.put<Product>(`${url}products/${id}`, product);
    return response.data;
}

export async function deleteProduct(id: number): Promise<void> {
    await axios.delete(`${url}products/${id}`);
}


