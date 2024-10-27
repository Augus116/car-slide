const items = document.querySelectorAll('.item');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const indicators = document.querySelectorAll('.indicators li');
const numberDisplay = document.querySelector('.number');

let currentIndex = 0;

function updateItems() {
    items.forEach((item, index) => {
        const content = item.querySelector('.content');
        content.classList.remove('active', 'inactive');
        item.classList.remove('active');
        indicators[index].classList.remove('active');

        if (index === currentIndex) {
            item.classList.add('active');
            content.classList.add('active');
            indicators[index].classList.add('active');
        } else {
            content.classList.add('inactive');
        }
    });

    numberDisplay.textContent = String(currentIndex + 1).padStart(2, '0');
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateItems();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateItems();
});

updateItems();
