document.querySelector('h1').textContent = 'Nikolas Augustini';
document.getElementById('step-indicator').textContent = '9';

const strip = document.querySelectorAll('.strip-cell');

strip.forEach(strip => {
    const color = strip.dataset.color;
    strip.classList.add(color);
});

document.addEventListener('DOMContentLoaded', () => {
    const blackCell = document.querySelector('.strip-cell[data-color="black"]');
    blackCell.classList.add('selected');
});
