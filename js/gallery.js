
const galleryGrid = document.getElementById("galleryGrid");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");

const continueBtn = document.getElementById("continueBtn");

const petals = document.getElementById("petals");

// ==========================================
// Gallery Images
// Replace with your own photos
// ==========================================

const galleryImages = [

    "assets/photos/photo1.jpg",
    "assets/photos/photo2.jpg",
    "assets/photos/photo3.jpg",
    "assets/photos/photo4.jpg",
    "assets/photos/photo5.jpg",
    "assets/photos/photo6.jpg",
    "assets/photos/photo7.jpg",
    "assets/photos/photo8.jpg",
    "assets/photos/photo9.jpg",
    "assets/photos/photo10.jpg"

];

// ==========================================
// Build Gallery
// ==========================================

function loadGallery() {

    galleryGrid.innerHTML = "";

    galleryImages.forEach((image, index) => {

        const card = document.createElement("div");

        card.className = "gallery-item";

        card.style.animation = `fadeUp .6s ease ${index * 0.08}s both`;

        const img = document.createElement("img");

        img.src = image;

        img.alt = `Memory ${index + 1}`;

        img.loading = "lazy";

        card.appendChild(img);

        card.addEventListener("click", () => {

            openLightbox(image);

        });

        galleryGrid.appendChild(card);

    });

}

// ==========================================
// Lightbox
// ==========================================

function openLightbox(image) {

    lightboxImage.src = image;

    lightbox.classList.add("show");

    document.body.style.overflow = "hidden";

}

function closeBox() {

    lightbox.classList.remove("show");

    document.body.style.overflow = "";

}

closeLightbox.addEventListener("click", closeBox);

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        closeBox();

    }

});

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        closeBox();

    }

});

// ==========================================
// Continue
// ==========================================

continueBtn.addEventListener("click", () => {

    continueBtn.disabled = true;

    continueBtn.textContent = "Loading... ❤️";

    setTimeout(() => {

        window.location.href = "ending.html";

    }, 1200);

});

// ==========================================
// Floating Petals
// ==========================================

const flowers = [

    "🌸",
    "🌺",
    "💮",
    "🌼"

];

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "gallery-petal";

    petal.textContent =
        flowers[Math.floor(Math.random() * flowers.length)];

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.animationDuration =
        (6 + Math.random() * 5) + "s";

    petal.style.fontSize =
        (18 + Math.random() * 18) + "px";

    petals.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 11000);

}

setInterval(createPetal, 900);

// ==========================================
// Fade Animation
// ==========================================

const style = document.createElement("style");

style.textContent = `

@keyframes fadeUp{

0%{

opacity:0;

transform:translateY(40px);

}

100%{

opacity:1;

transform:translateY(0);

}

}

`;

document.head.appendChild(style);

// ==========================================
// Start
// ==========================================

loadGallery();

createPetal();