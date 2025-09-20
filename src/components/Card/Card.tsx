import React from 'react'; 
import type { Product } from '../../models/Product'

type CardProps = {
    product: Product;
}

export default function Card({ product }: CardProps) {
    return (
        <div className="border p-4 rounded shadow mb-4">
            {product.images.length > 0 && (
                <img
                    src={product.images[0]}
                    alt={product.title}
                />
            )}
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="">{product.description}</p>
            <p className="font-semibold">Precio: ${product.price}</p>
            <p className="text-sm text-gray-500">Categoría: {product.category.name}</p>
        </div>
    )
}
