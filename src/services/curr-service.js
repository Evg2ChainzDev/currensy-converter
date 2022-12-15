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
    const res = await this.getResource(
      `/NBUStatService/v1/statdirectory/exchange?date=${today}&json`
    );
    return [(Number(res[25].rate)), (Number(res[32].rate))];
  }

  giveConversion(fromInput, fromCurr, toCurr, currRatio) {
    let res =
      (Number(fromInput) * Number(currRatio[fromCurr])) /
      Number(currRatio[toCurr]);
    return Number(res);
  }
}
 
