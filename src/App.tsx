import type { Product } from './models/Product'
import { fetchProducts } from './api/products'
import React, { useState, useEffect } from 'react';


function App() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const data: Product[] = await fetchProducts()
      setProducts(data)
    }

    loadProducts()
  }, [])


  return (
    <div>
      {products.map((prod: Product) => (
        <div key={prod.id}>{prod.title}</div>
      ))}
    </div>
  )
}

export default App
