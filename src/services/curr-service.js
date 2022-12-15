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
    }

    if (mm < 10) {
      mm = "0" + mm;
    };
    today = ''+yyyy+mm+dd;
    return today;
  }

  async getAllCurr() {
    let today = this.giveDay();
    const USD = await this.getResource(
      `/NBUStatService/v1/statdirectory/exchange?valcode=USD&date=${today}&json`
    );
    const EUR = await this.getResource(
      `/NBUStatService/v1/statdirectory/exchange?valcode=EUR&date=${today}&json`
    );
    console.log([USD[0].rate, (EUR[0]).rate])
    return [(Number(USD[0].rate)), (Number(EUR[0].rate))];
  }

  giveConversion(fromInput, fromCurr, toCurr, currRatio) {
    let res =
      (Number(fromInput) * Number(currRatio[fromCurr])) /
      Number(currRatio[toCurr]);
    return Number(res);
  }
}
 
