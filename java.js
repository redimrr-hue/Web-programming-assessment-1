// Wait for the DOM to fully load before running script
document.addEventListener("DOMContentLoaded", function () {

  // Get references to elements
  const costInput = document.getElementById("cost");
  const litersInput = document.getElementById("liters");
  const button = document.getElementById("calculateBtn");
  const result = document.getElementById("result");

  // Add click event to button
  button.addEventListener("click", function () {

    // Convert input values to numbers
    const cost = parseFloat(costInput.value);
    const liters = parseFloat(litersInput.value);

    // Validate inputs
    if (isNaN(cost) || isNaN(liters) || cost < 0 || liters < 0) {
      result.textContent = "Please enter valid positive numbers.";
      return;
    }

    // Calculate total cost
    const total = cost * liters;

    // Display result with 2 decimal places
    result.textContent = "Total Cost: $" + total.toFixed(2);

  });

});