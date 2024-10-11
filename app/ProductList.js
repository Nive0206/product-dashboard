"use client";
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const ProductListPage = () => {
  const [products, setProducts] = useState([
    { name: 'Product 1', price: 20, description: 'Description 1', variants: '', discountPrice: null, status: 'active' },
    { name: 'Product 2', price: 30, description: 'Description 2', variants: '', discountPrice: null, status: 'active' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    // Store in local storage or handle as needed
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    localStorage.setItem('products', JSON.stringify([...storedProducts, newProduct]));
  };

  const removeProduct = (productToRemove) => {
    setProducts((prevProducts) => prevProducts.filter(product => product !== productToRemove));
  };

  const orderProduct = (productToOrder) => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    // Check if the product is already in the orders
    const isOrdered = storedOrders.some(order => order.name === productToOrder.name);
    
    if (!isOrdered) {
      localStorage.setItem('orders', JSON.stringify([...storedOrders, productToOrder]));
      alert(`${productToOrder.name} has been added to your orders.`);
    } else {
      alert(`${productToOrder.name} is already ordered.`);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen">
      <Sidebar onSearch={setSearchTerm} />
      <main className="flex flex-col flex-grow p-4 ml-64">
        <h1 className="text-2xl font-bold">Product List</h1>
        <ProductForm addProduct={addProduct} />
        <ProductList products={filteredProducts} onRemove={removeProduct} onOrder={orderProduct} />
      </main>
    </div>
  );
};

export default ProductListPage;
