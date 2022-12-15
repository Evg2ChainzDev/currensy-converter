export default class CurrService {
  _apiBase = "https://bank.gov.ua";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    return await res.json();
  }

  giveDay() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
      // console.log(dd)
    }

    if (mm < 10) {
      mm = "0" + mm;
    };
    today = ''+yyyy+mm+dd;
    return today;
  }

  async getAllCurr() {
    let today = this.giveDay();
    // console.log(this.giveDay());
    const res = await this.getResource(
      `/NBUStatService/v1/statdirectory/exchange?date=${today}&json`
    );
    return [(Number(res[25].rate)), (Number(res[32].rate))]; // usd , eur
  }

  giveConversion(fromInput, fromCurr, toCurr, currRatio) {
    // console.log('giveConversion works');
    // console.log(`fromInput ${fromInput}`)
    // console.log(`fromCurr ${fromCurr}`)
    // console.log(`toCurr ${toCurr}`)
    // console.log(currRatio);
    // console.log(currRatio[fromCurr],currRatio[toCurr])
    let res =
      (Number(fromInput) * Number(currRatio[fromCurr])) /
      Number(currRatio[toCurr]);
    return Number(res);
  }
}
 
