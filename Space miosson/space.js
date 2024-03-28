// useSpaceMissionData.js
import { useState, useEffect } from 'react';
const URL ="https://www.ag-grid.com/example-assets/space-mission-data.json"
const useSpaceMissionData = (URL) => {
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSpaceMissionData = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setRowData(data);
    } catch (error) {
      console.error('Error fetching space mission data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSpaceMissionData(URL);
  }, []);

  return { rowData };
};


