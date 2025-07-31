  async function fetchExchangeRate() {
      let from = fromCurrency.value;
      let to = toCurrency.value;
      let amount = amountInput.value;
      
      if (amount === "" || amount <= 0) {
          alert("Please enter a valid amount");
          return;
      }
      
      try {
          let response = await fetch(apiUrl + from);
          let data = await response.json();
          let rate = data.conversion_rates[to];
          
          if (rate) {
              let convertedAmount = (amount * rate).toFixed(2);
              exchangeMsg.innerText = `${amount} ${from} = ${convertedAmount} ${to}`;
          } else {
              exchangeMsg.innerText = "Exchange rate not available.";
          }
      } catch (error) {
          exchangeMsg.innerText = "Error fetching exchange rate.";
      }
  }
  
  convertBtn.addEventListener("click", (e) => {
      e.preventDefault();
      fetchExchangeRate();
  });
  
  swapBtn.addEventListener("click", () => {
      let temp = fromCurrency.value;
      fromCurrency.value = toCurrency.value;
      toCurrency.value = temp;
      fetchExchangeRate();
  });
const apiKey = 'f7d7478e4b2e484db7f19a04';
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

document.addEventListener("DOMContentLoaded", () => {
    const amountInput = document.getElementById("amount");
    const fromCurrency = document.querySelector(".from select");
    const toCurrency = document.querySelector(".To select");
    const exchangeRateDisplay = document.querySelector(".msg");
    const convertButton = document.querySelector("button");
    const swapButton = document.querySelector(".fa-arrow-right-arrow-left");

    async function getExchangeRate() {
        const amount = parseFloat(amountInput.value);
        if (isNaN(amount) || amount <= 0) {
            exchangeRateDisplay.innerText = "Please enter a valid amount.";
            return;
        }
        
        const from = fromCurrency.value;
        const to = toCurrency.value;
        
        try {
            const response = await fetch(`${apiUrl}${from}`);
            const data = await response.json();
            
            if (!data.conversion_rates[to]) {
                exchangeRateDisplay.innerText = "Invalid currency conversion.";
                return;
            }
            
            const rate = data.conversion_rates[to];
            const convertedAmount = (amount * rate).toFixed(2);
            
            exchangeRateDisplay.innerText = `${amount} ${from} = ${convertedAmount} ${to}`;
        } catch (error) {
            exchangeRateDisplay.innerText = "Error fetching exchange rates.";
        }
    }

    convertButton.addEventListener("click", (event) => {
        event.preventDefault();
        getExchangeRate();
    });
    
    swapButton.addEventListener("click", () => {
        [fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value];
        getExchangeRate();
    });
});


  

