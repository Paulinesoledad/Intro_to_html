document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('bookingForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const serviceInput = document.getElementById('service');
  const dateInput = document.getElementById('date');
  const confirmation = document.getElementById('confirmationMessage');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Check for empty fields
    if (
      nameInput.value === '' ||
      emailInput.value === '' ||
      serviceInput.value === '' ||
      dateInput.value === ''
    ) {
      showMessage('Please fill in all fields.', 'red');
      return;
    }

    const userName = nameInput.value;

    // Show confirmation message dynamically
    showMessage(`Thank you, ${userName}. Your booking has been received!`, 'green');

    // Reset form after a delay (callback demo)
    setTimeout(() => {
      form.reset();
    }, 3000);
  });

  function showMessage(message, color) {
    confirmation.textContent = message;
    confirmation.style.display = 'block';
    confirmation.style.color = color;
    confirmation.style.fontWeight = 'bold';
  }
});
