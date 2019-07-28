// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e) {
  // Hide Results if shown
  document.getElementById('results').style.display = 'none';

  // Show loader for 2 seconds when clicked
  document.getElementById('loading').style.display = 'block';
  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

function calculateResults() {
  // UI Variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  // Loan Variables & Calculations
  const principle = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;
  // Compute monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principle * x * calculatedInterest) / (x - 1);

  // Check if result is valid/finite or display an error
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principle).toFixed(2);
    // Show the results
    document.getElementById('results').style.display = 'block';

    // Hide the loading img
    document.getElementById('loading').style.display = 'none';
  } else {
    showError('Please check your numbers');
  }
}

// Display an error message
function showError(errorMessage) {
  // Hide the results
  document.getElementById('results').style.display = 'none';
  // Hide the loading img
  document.getElementById('loading').style.display = 'none';

  // Create element to display
  const errorDiv = document.createElement('div');

  // Get elements to display error
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add boostrap classes to error div
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to error div
  errorDiv.appendChild(document.createTextNode(errorMessage));

  // Insert error div above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds (3000ms)
  setTimeout(clearError, 3000);
}

// Clear error message
function clearError() {
  document.querySelector('.alert').remove();
}
