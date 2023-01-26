import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import data from './shipper-data.json';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';

class ShipperData extends React.Component{

    columnDefs = [
        { field: 'shipperId', headerName:'Shipper Id' },
        { field: 'rating', headerName:'Rating' },
        { field: 'availableCities', headerName:'Available Cities' },
        
      ];

      rowData = data;


    render() {
        return (
        <div className="App">
        <div className="ag-theme-alpine" style={{height:"200px",width:"800px"}}>
        <AgGridReact
          columnDefs={this.columnDefs}
          rowData={this.rowData}
        >
        </AgGridReact>
     </div>
     </div>

            
        );
    }

}

export default ShipperData