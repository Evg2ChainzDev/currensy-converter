import "./FromSection.css";

function FromSection({updateFromInput,fromInput, updateFromCurr, fromCurr}) {
  return (
    <div className="from-section">
      This is FromSection
      <input type="text" onChange={updateFromInput} value={ fromInput }/>
      <select name="" id="" onChange={updateFromCurr} value={fromCurr}>
        <option value="UAH">UAH</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>

    </div>
  );
}

export default FromSection;
