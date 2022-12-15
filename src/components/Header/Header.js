import "./Header.css";


function Header({currDolEur}) {


  // console.log('component render');
  // console.log(currDolEur);

  return (
    <div className="header">
      <div>1 usd = { parseFloat(currDolEur[0]).toFixed(2)} grn </div>
      <div>1 eur = {parseFloat(currDolEur[1]).toFixed(2)} grn </div>
    </div>
  );
}

export default Header;
