document.addEventListener("DOMContentLoaded", function() {
    const footerElement = document.getElementById('footer-container');
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            footerElement.innerHTML = data;
        })
        .catch(error => console.error('Error loading the footer:', error));
});