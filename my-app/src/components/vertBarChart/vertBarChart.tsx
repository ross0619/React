'use client'
import React, {useState} from 'react';
import './vertBarChart.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Veritcal Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1200, 1300, 1000, 1500, 1100, 1200, 1000],
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
    {
      label: 'Dataset 2',
      data: [1500, 1100, 1300, 1200, 1300, 1000, 1100],
      backgroundColor: 'rgba(53, 162, 235, 1)',
    },
  ],
};

export default function vertBarChart() {
  const [showChart, setShowChart] = useState(false);

  const handleShowButtonClick = () => {
    setShowChart(true);
  };
  const handleHideButtonClick = () => {
    setShowChart(false);
  };
  return (
    

      <div>
      {!showChart ? (
        <button onClick={handleShowButtonClick}>Show Vertical Bar Chart</button>
      ) : (
        <button onClick={handleHideButtonClick}>Hide Vertical Bar Chart</button>
      )}
      <div className='vertBarChart'>
        {showChart && <Bar options={options} data={data} />}
      </div>
    </div>
    
  );
}