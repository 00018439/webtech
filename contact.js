document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('All fields are required!');
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address!');
        return;
    }

    alert('Thank you for your message!');
    this.reset();
});
