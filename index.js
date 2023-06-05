const currencyFirstEl = document.getElementById("currency-first");

const worthFirstEl = document.getElementById("worth-first");

const currencySecondEl = document.getElementById("currency-second");

const worthSecondEl = document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange");

// updateRate()

 function updateRate() {
 fetch(
    `https://v6.exchangerate-api.com/v6/78b793af73ea915f51e67158/latest/${currencyFirstEl.value}`
  )
    .then((res) => res.json())
    .then((data) => {
   
      const rate = data.conversion_rates[currencySecondEl.value];
      console.log(rate);
  
      worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2)
      exchangeRateEl.innerText = `1$ ${currencyFirstEl.value} = ${rate + " " + currencySecondEl.value
            };`
    });
}
updateRate()

currencyFirstEl.addEventListener("change", updateRate);

currencySecondEl.addEventListener("change", updateRate);

worthFirstEl.addEventListener("input", updateRate);
