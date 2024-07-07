let currentIndex = 0;

function moveSlide(n) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    currentIndex += n;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}