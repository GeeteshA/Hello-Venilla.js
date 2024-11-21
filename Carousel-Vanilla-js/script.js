const slides = document.querySelectorAll('.slide');
let counter = 0;
const totalSlides = slides.length;

const next = () => {
    counter++;
    if (counter >= totalSlides) {
        counter = 0; 
    }
    slideImage();
}

const prev = () => {
    counter--;
    if (counter < 0) {
        counter = totalSlides - 1;
    }
    slideImage();
}

const slideImage = () => {
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
        slide.style.transition = 'transform 0.5s ease'; 
    });
}

const startAutoSlide = () => {
    autoSlideInterval = setInterval(() => {
        next();
    }, 3000);
}
document.addEventListener('DOMContentLoaded', () => {
    slideImage();
    startAutoSlide(); 
});
