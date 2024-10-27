const items = document.querySelectorAll('.item');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const indicators = document.querySelectorAll('.indicators li');
const numberDisplay = document.querySelector('.number'); // Seleciona o número

let currentIndex = 0;

function updateItems() {
    items.forEach((item, index) => {
        item.classList.remove('active');
        indicators[index].classList.remove('active');

        if (index === currentIndex) {
            item.classList.add('active');
            indicators[index].classList.add('active');
        }
    });

    // Atualiza o número conforme o índice atual
    numberDisplay.textContent = String(currentIndex + 1).padStart(2, '0');
}

// Função para avançar para o próximo item
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateItems();
});

// Função para voltar ao item anterior
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateItems();
});

// Inicializa a visualização
updateItems();
