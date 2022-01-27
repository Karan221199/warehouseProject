import './App.css';
import React, { useState,useEffect } from 'react';
import {Route,Routes} from "react-router-dom";
import { AppContext } from './components/context';
import Home from './components/Home';
import Detail from './components/Detail';
import UpdateData from './components/UpdateData';
import AddWarehouse from './components/AddWarehouse';

function App() {
  const [Data,setData] = useState('');
  useEffect(()=>{
      fetch('http://localhost:3001/getData')
      .then(res=> res.json())
      .then(result => setData(result))
      .catch(err=>console.log(err));
  },[])
  return (
    <div>
      <AppContext.Provider value={ Data }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/edit/:id" element={<UpdateData />} />
          <Route path="/add_warehouse" element={<AddWarehouse />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
