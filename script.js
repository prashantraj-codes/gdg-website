// Select the form and the paragraph where we will show the message
const form = document.getElementById("regForm");
const successMsg = document.getElementById("successMsg");

// Run this function when the user clicks "Register Now"
form.addEventListener("submit", function (event) {
  // Stop the page from refreshing
  event.preventDefault();

  // Get the name typed by the user
  const userName = document.getElementById("name").value;

  // Show a thank you message on the webpage
  successMsg.textContent = "Thank you, " + userName + "! Your registration is complete.";

  // Clear the form inputs
  form.reset();
});