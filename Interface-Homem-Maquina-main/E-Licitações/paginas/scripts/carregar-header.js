window.addEventListener('load', function() {
    const header = document.getElementById('header-container');
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            header.innerHTML = data;
        });
});
