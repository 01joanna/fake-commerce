import type { Product } from './models/Product'
import { fetchProducts } from './api/products'
import React, { useState, useEffect } from 'react';
import { Card } from './components/Card/Card';
import Search from './components/Layout/Search';


function App() {

  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("")

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
      <Search value={search} onChange={setSearch} />
      <p className=''>Productos</p>
      <div className='flex'>
        {products.map((product: Product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default App
