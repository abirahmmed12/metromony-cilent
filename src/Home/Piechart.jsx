import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const MyComponent = () => {
  const [chart, setChart] = useState(null);
  const [chartData, setChartData] = useState({
    labels: ['Total', 'Male', 'Female', 'Premium'],
    datasets: [
      {
        data: [0, 0, 0, 0],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
      },
    ],
  });

  useEffect(() => {
  
    fetch('https://metromony-server.vercel.app/members')
      .then(response => response.json())
      .then(members => {
       
        const premiumMembers = members.filter(member => member.isPremium);

        
        setChartData({
          labels: ['Total', 'Male', 'Female', 'Premium'],
          datasets: [
            {
              data: [
                members.length,
                members.filter(member => member.biodataType === 'Male').length,
                members.filter(member => member.biodataType === 'Female').length,
                premiumMembers.length,
              ],
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
              hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
            },
          ],
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    
    if (chart) {
      chart.destroy();
    }

   
    const newChart = new Chart(document.getElementById('myChart'), {
      type: 'pie',
      data: chartData,
    });

   
    setChart(newChart);

    
    return () => {
      newChart.destroy();
    };
  }, [chartData]);

  return (
    <div className='w-80 m-auto'>
      <h2>Biodata Statistics</h2>
      <canvas id="myChart" width="300" height="300"></canvas>
    </div>
  );
};

export default MyComponent;
