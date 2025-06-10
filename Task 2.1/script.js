const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    // Clear previous errors
    form.querySelectorAll('input, textarea').forEach(el => {
      el.style.borderColor = '#ccc';
    });

    // Name required
    const name = form.name;
    if (!name.value.trim()) {
      valid = false;
      name.style.borderColor = 'red';
    }

    // Email required & format
    const email = form.email;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailPattern.test(email.value)) {
      valid = false;
      email.style.borderColor = 'red';
    }

    // Message required
    const message = form.message;
    if (!message.value.trim()) {
      valid = false;
      message.style.borderColor = 'red';
    }

    if (valid) {
      alert('Form submitted successfully!');
      form.reset();
    } else {
      alert('Please correct the highlighted fields.');
    }
});
