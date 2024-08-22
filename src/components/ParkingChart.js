import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './ParkingChart.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ParkingChart({ data }) {
  // Logging the data to check updates
  console.log('ParkingChart data:', data);

  const chartData = {
    labels: data.map(d => d.location),
    datasets: [
      {
        label: 'Available Spots',
        data: data.map(d => d.availableSpots),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Parking Availability in Richmond, VA',
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            return `Available Spots: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="parking-chart-container">
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default ParkingChart;
