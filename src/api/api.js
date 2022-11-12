var myHeaders = new Headers();
myHeaders.append("apikey", "z1TY9a6Ed5nF1EOLrcuHdCNAB6f9UqpT");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

export const getCurrency = (base, names) => {
  return fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=${names}&base=${base}`, requestOptions)
  .then(response => response.json())
}

export const convert = (from, to, amount) => {
  return fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
  .then(response => response.json())
}

export const getAllNames = () => {
  return fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
    .then(response => response.json())
}