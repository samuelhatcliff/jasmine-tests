window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

let amount;
let years;
let rate;

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  amount = document.getElementById("loan-amount")
  years = document.getElementById("loan-years")
  rate = document.getElementById("loan-rate")
  amount.value = 0;
  years.value = 0;
  rate.value = 0;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  const result = calculateMonthlyPayment(currentValues);
  updateMonthly(result);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // const values = getCurrentUIValues()
  const { amount, years, rate } = values;
  const monthlyRate = (rate / 100) / 12;

  const result = ((amount * monthlyRate) / (1 - Math.pow((1 + monthlyRate), -(years * 12)))).toFixed(2);
  return result.toString();
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(result) {
  const mP = document.getElementById("monthly-payment")
  mP.innerHTML = result
}
