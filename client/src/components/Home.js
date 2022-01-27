import React, { useContext } from 'react';
import { AppContext } from './context'; 
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const Data = useContext(AppContext);
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/detail/${id}`);
    };

    const handleAddWarehouseClick = () => {
        navigate('/add_warehouse');
    };
    return(
        <section>
            <div className='row mt-4 mb-4'>
                <div className='col-9'>
                    <h2>Available Warehouses</h2>
                </div>
                <div className='col-3' style={{textAlign:"right"}}>
                    <button className='btn btn-primary' onClick={handleAddWarehouseClick} type='button'>Add Warehouse</button>
                </div>
            </div>
            
            <div className="ag-theme-alpine" style={{height: 400, width: "100%"}}>
                <AgGridReact
                    rowData={Data} pagination={true} paginationPageSize={5} onRowClicked={(e)=>handleClick(e.rowIndex)} >
                    <AgGridColumn field="id" sortable={true} flex={1} ></AgGridColumn>
                    <AgGridColumn field="name" filter={true} floatingFilter={true} flex={1}></AgGridColumn>
                    <AgGridColumn field="city" filter={true} flex={1}></AgGridColumn>
                    <AgGridColumn field="space_available" filter={true} flex={1}></AgGridColumn>
                    <AgGridColumn field="type" flex={1}></AgGridColumn>
                    <AgGridColumn field="cluster" filter={true} flex={1}></AgGridColumn>
                </AgGridReact>
            </div>
        </section>
    );
}

export default Home;