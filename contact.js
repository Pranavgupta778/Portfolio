document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent actual submission

    // Get form values
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Simple validation
    if (!name || !email || !message) {
      showAlert("Please fill in all fields.", "error");
      return;
    }

    if (!validateEmail(email)) {
      showAlert("Please enter a valid email address.", "error");
      return;
    }

    // Simulate successful submission
    showAlert("Message sent successfully!", "success");
    form.reset();
  });

  function validateEmail(email) {
    // Simple email regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function showAlert(message, type) {
    const alertBox = document.createElement("div");
    alertBox.textContent = message;
    alertBox.className = `alert ${type}`;
    document.querySelector(".contact-section").prepend(alertBox);

    setTimeout(() => {
      alertBox.remove();
    }, 3000);
  }
});
