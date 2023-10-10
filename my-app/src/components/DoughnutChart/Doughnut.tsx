'use client'
import React, {useState} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './Doughnut.css'

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
      
    },
  ],
};

export default function DoughNutChart() {
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
            <button onClick={handleShowButtonClick} className='doughNutButton'>Show Dougnut Chart</button>
            ) : (
            <button onClick={handleHideButtonClick} className='doughNutButton'>Hide Doughnut Chart</button>
            )}
            <div className='doughNutChart'>
                {showChart && <Doughnut data={data} width={10} height={20}/>}
            </div>
        </div>

    );
}