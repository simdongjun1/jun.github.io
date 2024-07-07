let slideIndex = 0;
const slideInterval = 3000; // 슬라이드가 전환되는 시간 간격 (밀리초 단위)

function showSlides() {
    const slides = document.querySelectorAll('.slides img');
    const totalSlides = slides.length;
    
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    
    const offset = -slideIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function moveSlide(n) {
    slideIndex += n;
    showSlides();
}

function autoSlides() {
    slideIndex++;
    showSlides();
    setTimeout(autoSlides, slideInterval);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
    setTimeout(autoSlides, slideInterval); // 자동 슬라이드 시작
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});