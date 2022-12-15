import React from 'react';

import "./Header.css";


function Header({currDolEur}) {

  return (
    <div className="header">
      <div>1 USD = { parseFloat(currDolEur[0]).toFixed(2)} UAH </div>
      <div>1 EUR = {parseFloat(currDolEur[1]).toFixed(2)} UAH </div>
    </div>
  );
}

export default Header;
