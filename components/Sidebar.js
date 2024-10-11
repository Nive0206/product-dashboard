









"use client";
import Link from 'next/link';

const Sidebar = ({ onSearch }) => {
  return (
    <aside className="w-64 bg-[#001F3F] text-[#EAD8B1] h-screen p-4">
      <h2 className="text-lg font-bold mb-4">Dashboard</h2>
      <input 
        type="text" 
        placeholder="Search Products" 
        className="p-2 mb-4 w-full rounded" 
        onChange={(e) => onSearch(e.target.value)} 
      />
      <ul>
        <li className="mb-2">
          <Link href="#product-list" className="hover:text-[#EAD8B1] hover:bg-[#3A6D8C] transition-colors duration-200 p-2 rounded">Product List</Link>
        </li>
        <li className="mb-2">
          <Link href="#ordered-products" className="hover:text-[#EAD8B1] hover:bg-[#3A6D8C] transition-colors duration-200 p-2 rounded">Orders</Link>
        </li>
        <li className="mb-2">
          <Link href="#sales-chart" className="hover:text-[#EAD8B1] hover:bg-[#3A6D8C] transition-colors duration-200 p-2 rounded">Sales Chart</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
