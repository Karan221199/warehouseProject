import React, { useState,useEffect,useContext } from 'react';
import { AppContext } from './context'; 
import {useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Detail()
{
    const Data = useContext(AppContext);
    
    let { id } = useParams();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/edit/${id}`);
    };

    const handleDeleteClick = () => {

        axios.post('http://localhost:3001/deleteData',{
            data:Data[id].id
        }).then(res=>{
            if(res.status=="200")
            {
                alert("Successfully deleted");
                navigate('/');
            }
        }).catch(err => console.log(err));
    };
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-12 col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-10"><h4>Warehouse Detail</h4></div>
                                <div className="col-1 p-0" style={{textAlign:"right"}}>
                                    <button type="button" style={{background:"none",border:"none"}} onClick={handleClick}><i className="fa fa-pencil" style={{color:"blue",fontSize:"20px"}}></i></button>    
                                </div>
                                <div className="col-1 p-0">
                                    <button type="button" style={{background:"none",border:"none"}} onClick={handleDeleteClick}><i className="fa fa-trash" style={{color:"red",fontSize:"20px"}}></i></button>    
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h5>Name: {Data[id].name}</h5>
                            <h5>City: {Data[id].city}</h5>
                            <h5>Code: {Data[id].code}</h5>
                            <h5>Type: {Data[id].type}</h5>
                            <h5>Cluster: {Data[id].cluster}</h5>
                            <h5>Is Registered: {Data[id].is_registered === true ? "True" : "False"}</h5>
                            <h5>Is Live: {Data[id].is_live === true ? "True" : "False"}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;