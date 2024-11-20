// Form validation and email sending
document.getElementById('contactform').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    let Valid = true;

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('subjectError').textContent = '';
    document.getElementById('messageError').textContent = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate Name
    if (name === '') {
      document.getElementById('nameError').textContent = 'Name is required.';
      Valid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      document.getElementById('emailError').textContent = 'Email is required.';
      Valid = false;
    } else if (!emailRegex.test(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      Valid = false;
    }

    // Validate Subject
    if (subject === '') {
      document.getElementById('subjectError').textContent = 'Subject is required.';
      Valid = false;
    }

    // Validate Message
    if (message === '') {
      document.getElementById('messageError').textContent= 'Message is required.';
      Valid = false;
    }

    // If form is valid, send the email
    if (Valid) {
      const params = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };

      emailjs.send("service_1k1c1xo", "template_3s9nx8k", params)
        .then(() => {
          alert("Your Response is Noted! We will be contacting you soon");
          document.getElementById('contactform').reset(); // Clear the form
        })
        .catch((error) => {
          alert("Failed to send email. Please try again.");
          console.error("EmailJS Error:", error);
        });
    }
  });