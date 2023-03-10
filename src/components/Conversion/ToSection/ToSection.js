import React from 'react'

import "./ToSection.css";

function ToSection({updateToInput,toInput,updateToCurr, ToCurr}) {
  return (
    <div className="to-section">
      <span className="direction-text">Get</span>
      <input type="text" onChange={updateToInput} value={ toInput }/>
      <select name="" id="" onChange={updateToCurr} value={ToCurr}>
        <option value="UAH">UAH</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>

    </div>
  );
}

export default ToSection;
