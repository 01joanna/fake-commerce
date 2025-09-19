import type { Product } from './models/Product'
import { fetchProducts } from './api/products'
import React, { useState, useEffect } from 'react';
import { Card } from './components/Card/Card';


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
      
      <p className=''>Productos</p>
      <div className='grid grid-cols-4 grid-rows-3'>
        {products.map((product: Product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default App
