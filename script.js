import { renderAmmount, renderCurrNames } from './render.js';
import { fetchData } from './api.js';

const submitBtn = document.querySelector('#convertBtn');
renderCurrNames();
// fetchData();
submitBtn.addEventListener('click', async () => {
  const data = await fetchData();
  console.log(Object.values(data.data)[1]);
//   const value = data.data[currencies].value;
  renderAmmount(value);
});
