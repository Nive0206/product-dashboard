"use client";
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Register the necessary components from Chart.js
Chart.register(...registerables);

const SalesChart = ({ orderedProducts = [] }) => { // Default to an empty array
  const orderCounts = Array(12).fill(0); // Array for 12 months initialized to 0

  orderedProducts.forEach((product) => {
    // Assuming all orders are for the current month for simplicity; 
    // you can modify this logic based on how you track order dates
    const monthIndex = new Date().getMonth(); // Get current month index (0-11)
    orderCounts[monthIndex] += 1; // Increment count for the current month
  });

  // Convert orderCounts to decimals (1 order = 0.1, 2 orders = 0.2, etc.)
  const decimalCounts = orderCounts.map(count => count / 10); 

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Number of Orders (in decimal)',
        data: decimalCounts, // Use the decimal converted order counts
        fill: false,
        backgroundColor: 'rgba(58, 109, 140, 1)', // Line color
        borderColor: 'rgba(58, 109, 140, 1)', // Border color
        borderWidth: 2, // Increased border width for visibility
        pointBackgroundColor: 'rgba(234, 216, 177, 1)', // Point color
        pointBorderColor: 'rgba(58, 109, 140, 1)', // Point border color
        pointHoverBackgroundColor: 'rgba(234, 216, 177, 1)', // Point hover color
        pointHoverBorderColor: 'rgba(58, 109, 140, 1)', // Point hover border color
        pointRadius: 5, // Increased point radius for better visibility
        pointHoverRadius: 7, // Increased hover radius
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#EAD8B1', // Legend text color
        },
      },
      title: {
        display: true,
        text: 'Sales Data Based on Orders',
        color: '#EAD8B1', // Title color
        font: {
          size: 24, // Title font size
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(234, 234, 234, 0.5)', // Light grid color for x-axis
        },
        ticks: {
          color: '#EAD8B1', // x-axis tick color
        },
      },
      y: {
        grid: {
          color: 'rgba(234, 234, 234, 0.5)', // Light grid color for y-axis
        },
        ticks: {
          color: '#EAD8B1', // y-axis tick color
        },
        min: 0, // Minimum value of y-axis
        suggestedMax: 10, // Adjust based on expected max value
      },
    },
  };

  return (
    <div className="bg-[#001F3F] p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-[#EAD8B1]">Sales Data Based on Orders</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default SalesChart;
