let currentIndex = 0;
let autoScrollInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${-currentIndex * 100}%)`;
    });
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

function startAutoScroll() {
    autoScrollInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    startAutoScroll();

    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', stopAutoScroll);
    carousel.addEventListener('mouseleave', startAutoScroll);
});