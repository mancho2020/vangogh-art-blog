// Búsqueda Dinámica
document.querySelector('.search-bar').addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const artCards = document.querySelectorAll('.art-card');

    artCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = title.includes(searchTerm) ? '' : 'none';
    });
});

// Modal Emergente para Obras
const artCards = document.querySelectorAll('.art-card');
const modal = document.createElement('div');
modal.classList.add('modal');
modal.style.display = 'none';
document.body.appendChild(modal);

artCards.forEach(card => {
    card.addEventListener('click', function () {
        const title = card.querySelector('h3').textContent;
        const artist = card.querySelector('p').textContent;
        const imgSrc = card.querySelector('img').src;

        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <img src="${imgSrc}" alt="${title}" />
                <h2>${title}</h2>
                <p>${artist}</p>
            </div>
        `;
        modal.style.display = 'flex';

        // Cerrar el modal
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });
});
