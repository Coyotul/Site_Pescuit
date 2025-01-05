console.log("gallery.js a fost încărcat!"); // Test

const images = document.querySelectorAll(".slider-image");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
    });
}

prevBtn?.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    console.log(currentIndex); // Debugging
    showImage(currentIndex);
});

nextBtn?.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    console.log(currentIndex); // Debugging
    showImage(currentIndex);
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}, 5000);
