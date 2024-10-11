"use client";
import { useState, useEffect } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Orders List</h1>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index} className="border-b py-2">
              <div>
                <strong>Product Name:</strong> {order.name}
              </div>
              <div>
                <strong>Price:</strong> ${order.price.toFixed(2)}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;

