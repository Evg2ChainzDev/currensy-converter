import React, {useEffect, useState} from 'react';

import Header from '../Header';
import Conversion from '../Conversion';
import CurrService from '../../services/curr-service';

import "./MainWrapper.css";

function MainWrapper() {

  const [currDolEur,setCurr]=useState([0,0])

  useEffect(()=>{
    const currService = new CurrService();
    currService.getAllCurr().then((res)=>{
      setCurr(res)
    })
  },[])


  return (
    <div className="main-wrapper">
      <Header currDolEur={currDolEur}/>
      <Conversion currDolEur={currDolEur}/>
    </div>
  );
}

export default MainWrapper;
