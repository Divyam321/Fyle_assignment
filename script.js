// script.js
document.getElementById('contactButton').addEventListener('click', function() {
    var form = document.getElementById('contactForm');
    form.classList.toggle('visible');
});

document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    var form = document.getElementById('contactForm');
    form.classList.remove('visible');
});
















document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.getElementById('main-image');
    const textElements = document.querySelectorAll('.text1');

    textElements.forEach(textElement => {
        textElement.addEventListener('mouseover', function() {
            const newImageSrc = this.getAttribute('data-image');
            console.log("New Image Source:", newImageSrc); // Check the new image source in the console
            mainImage.src = newImageSrc;
            console.log("Main Image Source:", mainImage.src); // Check if the main image source is updated
        });
    });
});






let slideIndex = 0;

function currentSlide(index) {
    if (index >= 0) {
        slideIndex = index;
        showSlides();
    } else {
        console.error("Index must be a non-negative integer.");
    }
}

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.nav-dot');

    if (slides.length === 0 || dots.length === 0) {
        console.error("No slides or dots found.");
        return; // Exit the function if no slides or dots are found
    }

    if (slideIndex < 0 || slideIndex >= slides.length || slideIndex >= dots.length) {
        console.error("Invalid slide index.");
        return; // Exit the function if the slide index is invalid
    }

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${-slideIndex * 100}%)`;
        dots[i].classList.remove('active');
    });

    dots[slideIndex].classList.add('active');
}

// Initialize the slider
showSlides();

