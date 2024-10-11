"use client";
const OrdersList = ({ orderedProducts, onCancel }) => { // Added onCancel prop
  return (
    <div className="ordered-products bg-[#001F3F] p-4 rounded-lg shadow-md mt-4">
      <h3 className="text-xl font-bold text-[#EAD8B1] mb-4">Orders</h3>
      {orderedProducts.length === 0 ? (
        <p className="text-[#EAD8B1]">No orders placed.</p>
      ) : (
        <ul>
          {orderedProducts.map((product, index) => (
            <li key={index} className="text-[#EAD8B1] mb-4">
              <div>
                <strong>Order {index + 1}:</strong>
              </div>
              <div>
                <strong>Name:</strong> {product.name}
              </div>
              <div>
                <strong>Price:</strong> ${product.price.toFixed(2)}
              </div>
              <button 
                className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700" 
                onClick={() => onCancel(product)} // Call onCancel with the product to remove
              >
                Cancel Order
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrdersList;


