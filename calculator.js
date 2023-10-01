
window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
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

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
const loanAmount = document.getElementById("loan-amount");
const loanYears = document.getElementById("loan-years");
const loanRate = document.getElementById("loan-rate");
loanAmount.value = "25000";
loanYears.value = "5";
loanRate.value = "8.99";

let monthlyPayment = calculatePayment(loanAmount.value, loanYears.value, loanRate.value);
updateMonthly(monthlyPayment);
}

function calculatePayment(amount, years, rate){
let P = parseFloat(amount);
let i = (parseFloat(rate)/100)/12;
let n = parseFloat(years)*12;
return ((P*i)/(1 - (Math.pow((1+i),(-1*n))))).toFixed(2);
}


// Get the current values from the UI
// Update the monthly payment
function update() {
  let values = getCurrentUIValues();
  let monthlyPayment = calculatePayment(parseFloat(values.amount), parseFloat(values.years), parseFloat(values.rate));
  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
return calculatePayment(values.amount, values.years, values.rate); 
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const displaySpan = document.getElementById("monthly-payment");
  if (displaySpan.children.length === 0) {
  let displayMonthly = document.createElement("div");
  displayMonthly.id = "displayMonthly";
  displaySpan.append(displayMonthly);
  } else {
    displayMonthly = document.getElementById("displayMonthly");
  }
  displayMonthly.innerText = "\$" + monthly;
}
