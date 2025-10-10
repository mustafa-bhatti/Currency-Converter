const API_KEY = 'cur_live_nMw8NASZ3a3yZrbmcH6jSQYGWGIrIeNfBQ2uQ7WI';

const fetchCurr = async function () {
  try {
    const response = await fetch(
      `https://api.currencyapi.com/v3/currencies?apikey=${API_KEY}`
    );
    if (response.ok) {
      const data = await response.json();
      //   console.log(Object.keys(data.data));
      return Object.keys(data.data);
    } else {
      throw new Error('HTTP Error : Status Code: ', response.status);
    }
  } catch (error) {
    console.error('Fetch Error: ', error);
  }
};

const fetchData = async function (currencies = 'PKR', base_currency = 'USD') {
  try {
    const response = await fetch(
      `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&currencies=${currencies}&base_currency=${base_currency}`
    );
    if (response.ok) {
      const data = await response.json();
      //   console.log(data.data[currencies].value);
      return data;
    } else {
      throw new Error('HTTP Error : Status Code: ', response.status);
    }
  } catch (error) {
    console.error('Fetch Error: ', error);
  }
};

// fetchCurr();
export { fetchData, fetchCurr };
