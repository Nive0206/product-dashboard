"use client";
import { useState } from 'react';

const ProductForm = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [variants, setVariants] = useState('');
  const [discountPrice, setDiscountPrice] = useState('');
  const [status, setStatus] = useState('active');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      price: parseFloat(price),
      description,
      variants,
      discountPrice: discountPrice ? parseFloat(discountPrice) : null,
      status,
    };

    addProduct(newProduct);

    // Reset form fields
    setName('');
    setPrice('');
    setDescription('');
    setVariants('');
    setDiscountPrice('');
    setStatus('active');
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="space-y-4 p-4 rounded-lg" 
      style={{ backgroundColor: '#001F3F' }} // Set background color to #001F3F
    >
      <div>
        <label className="block text-[#EAD8B1]">Product Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 w-full rounded bg-white text-black" // Background for input
          required
        />
      </div>
      <div>
        <label className="block text-[#EAD8B1]">Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="p-2 w-full rounded bg-white text-black" // Background for input
          required
        />
      </div>
      <div>
        <label className="block text-[#EAD8B1]">Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 w-full rounded bg-white text-black" // Background for textarea
          required
        />
      </div>
      <div>
        <label className="block text-[#EAD8B1]">Product Variants:</label>
        <input
          type="text"
          value={variants}
          onChange={(e) => setVariants(e.target.value)}
          className="p-2 w-full rounded bg-white text-black" // Background for input
          placeholder="e.g., Size: S, M, L; Color: Red, Blue"
        />
      </div>
      <div>
        <label className="block text-[#EAD8B1]">Discount/Promo Price:</label>
        <input
          type="number"
          value={discountPrice}
          onChange={(e) => setDiscountPrice(e.target.value)}
          className="p-2 w-full rounded bg-white text-black" // Background for input
          placeholder="Optional"
        />
      </div>
      <div>
        <label className="block text-[#EAD8B1]">Product Status:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="p-2 w-full rounded bg-white text-black" // Background for select
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="out of stock">Out of Stock</option>
        </select>
      </div>
      <button type="submit" className="bg-[#3A6D8C] text-[#EAD8B1] p-2 rounded">
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;

