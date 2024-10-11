"use client"; // Ensure this component is a Client Component
import { useState } from 'react';
import Sidebar from '../components/Sidebar';  
import ProductForm from '../components/ProductForm';  
import ProductList from '../components/ProductList';  
import OrdersList from '../components/OrdersList';  
import SalesChart from '../components/SalesChart';  

const Dashboard = () => {
  const [products, setProducts] = useState([
    { name: 'Product 1', price: 29.99, description: 'Description of Product 1' },
    { name: 'Product 2', price: 19.99, description: 'Description of Product 2' },
    { name: 'Product 3', price: 39.99, description: 'Description of Product 3' },
    { name: 'Product 4', price: 49.99, description: 'Description of Product 4' },
  ]);
  
  const [orderedProducts, setOrderedProducts] = useState([]); 
  const [searchTerm, setSearchTerm] = useState('');

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const removeProduct = (productToRemove) => {
    setProducts((prevProducts) => 
      prevProducts.filter((product) => product.name !== productToRemove.name)
    );
  };

  const orderProduct = (productToOrder) => {
    // Directly add the product to the ordered products array
    setOrderedProducts((prevOrderedProducts) => [...prevOrderedProducts, productToOrder]);
  };

  const cancelOrder = (productToCancel) => {
    // Remove the product from the ordered products array
    setOrderedProducts((prevOrderedProducts) => 
      prevOrderedProducts.filter((product) => product.name !== productToCancel.name)
    );
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen">
      <Sidebar onSearch={setSearchTerm} />
      <main className="flex flex-col flex-grow p-4 ml-64">
        {/* Add Product Section */}
        <div className="w-full bg-[#6A9AB0] shadow-md rounded-lg p-4 mb-4">
          <h2 className="text-xl font-bold mb-4 text-[#EAD8B1]">Add Product</h2>
          <ProductForm addProduct={addProduct} />
        </div>
        {/* Product List Section */}
        <div className="w-full bg-[#3A6D8C] shadow-md rounded-lg p-4 mb-4" id="product-list">
          <h2 className="text-xl font-bold mb-4 text-[#EAD8B1]">Product List</h2>
          <ProductList 
            products={filteredProducts} 
            onRemove={removeProduct} 
            onOrder={orderProduct} 
          />
        </div>
        {/* Ordered Products Section */}
        <div className="w-full bg-[#6A9AB0] shadow-md rounded-lg p-4 mb-4" id="ordered-products">
          <h2 className="text-xl font-bold mb-4 text-[#EAD8B1]">Ordered Products</h2>
          <OrdersList 
            orderedProducts={orderedProducts} 
            onCancel={cancelOrder} // Pass the cancelOrder function to OrdersList
          />
        </div>
        {/* Sales Chart Section */}
        <div className="w-full bg-[#6A9AB0] shadow-md rounded-lg p-4 mb-4" id="sales-chart">
          <h2 className="text-xl font-bold mb-4 text-[#EAD8B1]">Sales Chart</h2>
          <SalesChart orderedProducts={orderedProducts} /> {/* Pass orderedProducts to SalesChart */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
