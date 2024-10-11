// app/dashboard/sales.js
"use client";
import SalesChart from '../../components/SalesChart'; // Adjust the path if necessary
import Sidebar from '../../components/Sidebar'; // Import Sidebar

const SalesPage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex flex-col flex-grow p-4 ml-64">
        <div className="w-full bg-[#001F3F] shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4 text-[#EAD8B1]">Sales Chart</h2>
          <SalesChart />
        </div>
      </main>
    </div>
  );
};

export default SalesPage;

