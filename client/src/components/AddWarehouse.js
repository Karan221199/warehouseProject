import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/addData.css';

function AddWarehouse()
{
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [city, setCity] = useState("");
    const [spaceAvailable, setSpaceAvailable] = useState("");
    const [type, setType] = useState("");
    const [cluster, setCluster] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLive, setIsLive] = useState(false);
    

    const handleClick =()=>{

        var obj = new Object();
        obj.name = name;
        obj.code = code;
        obj.city = city;
        obj.space_available = spaceAvailable;
        obj.type = type;
        obj.cluster = cluster;
        obj.is_registered = isRegistered;
        obj.is_live = isLive;

        fetch('http://localhost:3001/addData',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(obj)
        }).then(resp=>{

            if(resp.status=="200")
            {
                alert('Data Added Successfully');
               window.location.reload();
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const toogleIsLive = () => {
        setIsLive(!isLive);
    }

    const toogleIsRegistered = () => {
        setIsRegistered(!isRegistered);
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-12 col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-12"><h4 style={{textAlign:"center"}}>Add Warehouse</h4></div>
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
                                        <label htmlFor="code">Code</label>
                                        <input id="code" type="text" value={code} className="form-control" onChange={(e)=> setCode(e.target.value)}/>
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
                                        <label htmlFor="type">Type</label>
                                        <input id="type" type="text" value={type} className="form-control" onChange={(e)=> setType(e.target.value)}/>
                                    </div>
                                    <div className="col-12 col-md-6 mt-2">
                                        <label htmlFor="cluster">Cluster</label>
                                        <input id="cluster" type="text" value={cluster} className="form-control" onChange={(e)=> setCluster(e.target.value)}/>
                                    </div>
                                    <div className="col-12 col-md-6 mt-2">
                                        <label htmlFor="isRegistered">Is Registered</label>
                                        <input type="checkbox" id="isRegistered" value={isRegistered} onChange={toogleIsRegistered}/> 
                                    </div>
                                    <div className="col-12 col-md-6 mt-2">
                                        <label htmlFor="is_live">Is Live</label>
                                        <input type="checkbox" id="is_live" value={isLive} defaultChecked={isLive} onChange={toogleIsLive}/> 
                                    </div>
                                    
                                </div>
                                <div className="row">
                                    <div className="col-12 mt-2" style={{textAlign:"center"}}>
                                        <button onClick={handleClick} className="btn btn-primary" type="button">Submit</button>
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

export default AddWarehouse;