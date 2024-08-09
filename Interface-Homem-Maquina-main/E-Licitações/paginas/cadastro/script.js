document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signup-form');
    const notification = document.getElementById('notification');
    const closeBtn = document.querySelector('.close-btn');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (name && email && password) {
            notification.style.display = 'block';
        }
    });

    closeBtn.addEventListener('click', function () {
        notification.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target !== notification && event.target !== closeBtn) {
            notification.style.display = 'none';
        }
    });
});
