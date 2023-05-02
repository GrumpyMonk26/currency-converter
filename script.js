const currencyFirstEl = document.getElementById('currency-first');
const worthfirstEl = document.getElementById('worth-first');
const currencySecondEl = document.getElementById('currency-second');
const worthSecondEl = document.getElementById('worth-second');
const exchangeRateEl = document.getElementById('exchange-rate');

updateRate();

function updateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/471c972da0270feb4793d489/latest/${currencyFirstEl.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecondEl.value];
      console.log(rate);
      exchangeRateEl.textContent = `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;

      worthSecondEl.value = (worthfirstEl.value * rate).toFixed(2);
    });
}

currencyFirstEl.addEventListener('change', updateRate);

currencySecondEl.addEventListener('change', updateRate);

worthfirstEl.addEventListener('input', updateRate);
