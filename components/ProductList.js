// components/ProductList.js
"use client";
const ProductList = ({ products, onRemove, onOrder }) => {
  return (
    <div className="product-list bg-[#6A9AB0] p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-[#EAD8B1] mb-4">Product List</h3>
      {products.length === 0 ? (
        <p className="text-[#EAD8B1]">No products available.</p>
      ) : (
        <ul>
          {products.map((product, index) => (
            <li key={index} className="text-[#EAD8B1] mb-4">
              <div>
                <strong>Product {index + 1}:</strong>
              </div>
              <div>
                <strong>Name:</strong> {product.name}
              </div>
              <div>
                <strong>Price:</strong> ${product.price.toFixed(2)}
              </div>
              <div>
                <strong>Description:</strong> {product.description}
              </div>
              <div>
                <button 
                  onClick={() => onOrder(product)} // Call onOrder when ordering a product
                  className="mt-2 bg-green-500 text-white p-1 rounded">
                  Order
                </button>
                <button 
                  onClick={() => onRemove(product)} 
                  className="mt-2 ml-2 bg-red-500 text-white p-1 rounded">
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;


