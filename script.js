document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('webToCaseForm');
  const messageDiv = document.getElementById('message');
  const loading = document.getElementById('loading');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    messageDiv.style.display = 'none';
    loading.style.display = 'block';

    const formData = new FormData(form);

    fetch('https://tri-force--lolodev3.sandbox.my.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8&orgId=00Ddy000002dUOT', {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    })
      .then(() => {
        loading.style.display = 'none';
        form.reset();
        showMessage('Your case has been submitted successfully!', 'success');
      })
      .catch(() => {
        loading.style.display = 'none';
        showMessage('There was a problem submitting your case. Please try again.', 'error');
      });
  });

  function showMessage(message, type) {
    messageDiv.textContent = message;
    messageDiv.className = 'banner ' + type;
    messageDiv.style.display = 'block';
  }
});
