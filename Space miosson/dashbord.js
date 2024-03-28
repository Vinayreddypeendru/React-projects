// Dashboard.js
import React, { useState, useEffect } from 'react';
import AgGrid from './aggrid';

const URL ="https://www.ag-grid.com/example-assets/space-mission-data.json"

const DashBoard = () => {
  const [rowData, setRowData] = useState([]);
  const spaceMissionData=async(URL)=>{
    const responce =await fetch(URL);
    const data = await responce.json();
    setRowData(data);
  }

  useEffect(() => {
 
    spaceMissionData(URL)
  }, []);

  return (
    <div>
      <h2>Space Mission Dashboard</h2>
      <AgGrid rowData={rowData} />
      
      
    </div>
  );
};

export default DashBoard;
