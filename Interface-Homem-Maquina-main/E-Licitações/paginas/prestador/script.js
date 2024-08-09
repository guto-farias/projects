document.addEventListener('DOMContentLoaded', function() {
    const tooltips = document.querySelectorAll('.tooltip');

    tooltips.forEach(tooltip => {
        if (tooltip.textContent.length > 15) {
            tooltip.setAttribute('data-tooltip', tooltip.textContent);
            tooltip.textContent = tooltip.textContent.substring(0, 15) + '...';
        }
    });

    // Mostra o loading por 5 segundos antes de exibir a tabela
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        document.querySelector('.table-container').style.display = 'block';
    }, 5000);
});
