import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }

  const fetchCart = async () => {
      setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productID, quantity) => {
    const item = await commerce.cart.add(productID, quantity)
    setCart(item.cart)
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      <Products products={products} onAddtoCart={handleAddToCart} />
    </div>
  );
}

export default App;
