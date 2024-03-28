// AgGrid.js
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const AgGrid = ({ rowData }) => {
  const columnDefs = [
    { headerName: 'USER NAME', field: 'mission', sortable: true, filter: true },
    { headerName: 'Launch Company', field: 'company', sortable: true, filter: true },
    { headerName: 'Location', field: 'location', sortable: true, filter: true },
    { headerName: 'Date', field: 'date', sortable: true, filter: true },
    { headerName: 'Time', field: 'time', sortable: true, filter: true },
    { headerName: 'Rocket Type', field: 'rocket', sortable: true, filter: true },
    { headerName: 'Price', field: 'price', sortable: true, filter: true },
    { headerName: 'Outcome', field: 'successful', sortable: true, filter: true },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: '500px', width: '100%' }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        domLayout='autoHeight'
      />
    </div>
  );
};

export default AgGrid;
