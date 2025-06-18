document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('webToCaseForm');
  const messageDiv = document.getElementById('message');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Stop default form submission (no redirect)

    const formData = new FormData(form);

    fetch('https://tri-force--lolodev3.sandbox.my.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8&orgId=00Ddy000002dUOT', {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    })
      .then(() => {
        messageDiv.textContent = 'Your case has been submitted successfully!';
        messageDiv.className = 'message success';
        form.reset();
      })
      .catch(() => {
        messageDiv.textContent = 'There was a problem submitting your case. Please try again.';
        messageDiv.className = 'message error';
      });
  });
});
