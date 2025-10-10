import { fetchData, fetchCurr } from './api.js';
const fromCurrency = document.querySelector('#fromCurrency');
const toCurrency = document.querySelector('#toCurrency');
const ammountP = document.querySelector('#convertedAmount');
const renderCurrNames = async function () {
  const currNames = await fetchCurr();
  console.log(currNames);
  currNames.forEach((currentCurrency) => {
    const option = document.createElement('option');
    option.value = currentCurrency;
    option.textContent = currentCurrency;
    if (currentCurrency == 'USD') {
      option.selected = true;
    }
    const option2 = option.cloneNode(true);
    fromCurrency.appendChild(option);
    toCurrency.appendChild(option2);
  });
};

const renderAmmount = function (ammount) {
  ammountP.textContent = ammount;
};

export { renderCurrNames, renderAmmount };
