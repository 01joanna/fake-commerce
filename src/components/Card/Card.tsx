import React from 'react'; 
import type { Product } from '../../models/Product'

type CardProps = {
    product: Product;
}

export function Card({ product }: CardProps) {
    return (
        <div className="border p-4 rounded shadow mb-4">
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="font-semibold">Precio: ${product.price}</p>
            <p className="text-sm text-gray-500">Categoría: {product.category}</p>
            {product.images.length > 0 && (
                <img
                    src={product.images[0]}
                    alt={product.title}
                    className="mt-2 w-full rounded"
                />
            )}
        </div>
    )
}
