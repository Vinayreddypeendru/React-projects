import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

const URL = "https://www.ag-grid.com/example-assets/space-mission-data.json";

const Piechart = () => {
  const [rowData, setRowData] = useState([]);

  const spaceMissionData = async (URL) => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setRowData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    spaceMissionData(URL);
  }, []);

  const successfulMissions = rowData.filter((mission) => mission.successful);

  const data = {
    labels: ['Success', 'Failure'],
    datasets: [
      {
        data: [successfulMissions.length, rowData.length - successfulMissions.length],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 10,
          },
          color: 'black',
        },
      },
    },
  };

  return (
    <div style={{ width: '25%', margin: '20px auto', position:'inherit' }}>
      <h3>Mission Outcomes </h3> 
     
      <Pie data={data} options={options} />
    </div>
  );
};


