import React, { useState,useContext } from 'react';
import { AppContext } from './context'; 
import {useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import '../assets/css/UpdateData.css';
import axios from 'axios';
function UpdateData()
{
    let { id } = useParams();
    const navigate = useNavigate();
    const Data = useContext(AppContext);
    const [name, setName] = useState(Data[id].name);
    const [city, setCity] = useState(Data[id].city);
    const [spaceAvailable, setSpaceAvailable] = useState(Data[id].space_available);
    const [cluster, setCluster] = useState(Data[id].cluster);
    const [isLive, setIsLive] = useState(Data[id].is_live);
    

    const handleClick =()=>{

        for(var i=0;i<Data.length;i++)
        {
            if(Data[i].id===(parseInt(id)+1))
            {
                Data[i].name = name;
                Data[i].city = city;
                Data[i].space_available = spaceAvailable;
                Data[i].cluster = cluster;
                Data[i].is_live = isLive;
            }
        }
        axios.post('http://localhost:3001/updateData',{
            data:JSON.stringify(Data)
        }).then(res=>{
            if(res.status=="200")
            {
                alert("Successfully Updated");
                navigate('/');
            }
        }).catch(err => console.log(err));
    }

    const toogleIsLive = () => {
        setIsLive(!isLive);
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-12 col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-12"><h4 style={{textAlign:"center"}}>Edit Warehouse</h4></div>
                            </div>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-12 col-md-6 mt-2">
                                        <label htmlFor="name">Name</label>
                                        <input id="name" type="text" value={name} className="form-control" onChange={(e)=> setName(e.target.value)}/>
                                    </div>
                                    <div className="col-12 col-md-6 mt-2">
                                        <label htmlFor="city">City</label>
                                        <input id="city" type="text" value={city} className="form-control" onChange={(e)=> setCity(e.target.value)}/>
                                    </div>
                                    <div className="col-12 col-md-6 mt-2">
                                        <label htmlFor="space_available">Space available</label>
                                        <input id="space_available" type="tel" value={spaceAvailable} className="form-control" onChange={(e)=> setSpaceAvailable(e.target.value)}/>
                                    </div>
                                    <div className="col-12 col-md-6 mt-2">
                                        <label htmlFor="cluster">Cluster</label>
                                        <input id="cluster" type="text" value={cluster} className="form-control" onChange={(e)=> setCluster(e.target.value)}/>
                                    </div>
                                    <div className="col-12 col-md-6 mt-2">
                                        <label htmlFor="is_live">Is Live</label>
                                        <input type="checkbox" id="is_live" value={isLive} defaultChecked={isLive} onChange={toogleIsLive}/> 
                                    </div>
                                    
                                </div>
                                <div className="row">
                                    <div className="col-12 mt-2" style={{textAlign:"center"}}>
                                        <button onClick={handleClick} className="btn btn-primary" type="button">Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateData;