document.getElementById('email-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('error-message');
  const emailValue = emailInput.value.trim();

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (emailRegex.test(emailValue)) {
    errorMessage.textContent = '';
    alert('Valid email address!');
  } else {
    errorMessage.textContent = 'Please enter a valid email address.';
  }
});
