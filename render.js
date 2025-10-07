import { fetchData, fetchCurr } from './api.js';
const fromCurrency = document.querySelector('#fromCurrency');
const toCurrency = document.querySelector('#toCurrency');

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
export { renderCurrNames };
