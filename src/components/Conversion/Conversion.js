import React from 'react'

import "./Conversion.css";

import FromSection from './FromSection/FromSection';
import ToSection from './ToSection';
import { useState } from 'react';
import CurrService from '../../services/curr-service';

function Conversion({currDolEur}) {

  const [fromInput, setFromInput] = useState('');
  const [fromCurr, setFromCurr] = useState('UAH');
  const [toInput, setToInput] = useState('');
  const [toCurr, setToCurr] = useState('UAH');
  const [ifActiveToInput, setIfActiveToInput] = useState(false);

  const currRatio = ({USD: Number(currDolEur[0]), EUR: Number(currDolEur[1]), UAH:1})

  let currService = new CurrService();



  const updateFromInput = (e) => {
    setFromInput(e.target.value);
    let resNoRound = currService.giveConversion(e.target.value,fromCurr,toCurr,currRatio);
    let res = (Math.round(resNoRound * 100) / 100).toFixed(2);
    setToInput(res);
    setIfActiveToInput(false);  
  }

  const updateFromCurr = (e) => {
    setFromCurr(e.target.value);

    if (ifActiveToInput) {
      let resNoRound = currService.giveConversion(toInput,toCurr,e.target.value,currRatio);
      let res = (Math.round(resNoRound * 100) / 100).toFixed(2);
      setFromInput(res);
      return 
    }

    let resNoRound = currService.giveConversion(fromInput,e.target.value,toCurr,currRatio);
    let res = (Math.round(resNoRound * 100) / 100).toFixed(2);
    setToInput(res);

  }

  const updateToInput = (e) => {
    setToInput(e.target.value);
    let resNoRound = currService.giveConversion(e.target.value,toCurr,fromCurr,currRatio);
    let res = (Math.round(resNoRound * 100) / 100).toFixed(2);
    setFromInput(res);
    setIfActiveToInput(true)
  }

  const updateToCurr = (e) => {

    setToCurr(e.target.value)

    console.log(`ifActiveToInput = ${ifActiveToInput}`);
    console.log(`currRatio = `);
    console.log(currRatio);
    console.log(`toInput = ${toInput}`);
    

    if (ifActiveToInput) {
      let resNoRound = currService.giveConversion(toInput,e.target.value,fromCurr,currRatio);
      let res = (Math.round(resNoRound * 100) / 100).toFixed(2);
      setFromInput(res);
      return 
    }
    let resNoRound = currService.giveConversion(fromInput,fromCurr,e.target.value,currRatio);
    let res = (Math.round(resNoRound * 100) / 100).toFixed(2);
    setToInput(res);
  }

  
  

  return (
    <div className="conversion">
      <div className="conversion-selects">
        <FromSection
          updateFromInput={updateFromInput}
          fromInput={fromInput}
          updateFromCurr={updateFromCurr}
          fromCurr={fromCurr}
        ></FromSection>
        <ToSection
          updateToInput={updateToInput}
          toInput={toInput}
          updateToCurr={updateToCurr}
          toCurr={toCurr}
        ></ToSection>
      </div>

      {ifActiveToInput ? (
        <span>
          you want to <span className='get-or-send'>get</span> {toInput} {toCurr}
        </span>
      ) : (
        <span>
          you want to <span className='get-or-send'>send</span> {fromInput} {fromCurr}
        </span>
      )}
    </div>
  );
}

export default Conversion;
