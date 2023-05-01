const currencyFirstEl = document.getElementById('currency-first');

const worthfirstEl = document.getElementById('worth-first');

const currencySecondEl = document.getElementById('currency-second');

const worthSecondEl = document.getElementById('worth-second');

const exchangeRateEl = document.getElementById('exchange-rate');

function updateRate() {
  console.log('changed');
}

currencyFirstEl.addEventListener('change', updateRate);
