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
    console.log(products)
  }, [])


  return (
    <div>
      <p>hola</p>
      {products.map((prod: Product) => (
        <div key={prod.id}>
          <h2>{prod.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default App
