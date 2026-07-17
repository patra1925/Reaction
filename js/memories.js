/* ==========================================
   memories.js
   Part 1
========================================== */

// ==========================================
// Elements
// ==========================================

const memoryImage = document.getElementById("memoryImage");
const reactionBox = document.getElementById("reactionBox");

const currentPage = document.getElementById("currentPage");
const totalPages = document.getElementById("totalPages");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const foreverBtn = document.getElementById("foreverBtn");
const foreverContainer = document.querySelector(".forever-container");

const photoFrame = document.getElementById("photoFrame");

// ==========================================
// Memories
// Replace with your own photos
// ==========================================

const memories = [

{
    image:"assets/photos/photo1.jpg",
    reaction:"The day I saw you in this saree, my heart quietly whispered, 'She's the one.' 💚"
},

{
    image:"assets/photos/photo2.jpg",
    reaction:"That beautiful smile still manages to brighten even my darkest days. 😊💕"
},

{
    image:"assets/photos/photo3.jpg",
    reaction:"You looked so graceful that even the flowers seemed happy to stand beside you. 🌺❤️"
},

{
    image:"assets/photos/photo4.jpg",
    reaction:"I could get lost in your beautiful hair and never want to find my way back. 🥹🖤"
},

{
    image:"assets/photos/photo5.jpg",
    reaction:"Every little glance of yours feels like my favorite love story coming alive. ✨❤️"
},

{
    image:"assets/photos/photo6.jpg",
    reaction:"Seeing you from behind somehow made me fall for you all over again. 💖"
},

{
    image:"assets/photos/photo7.jpg",
    reaction:"This smile deserves to be protected, cherished, and loved every single day. 🌸"
},

{
    image:"assets/photos/photo8.jpg",
    reaction:"You make every place look beautiful simply by standing there with that smile. 💕"
},

{
    image:"assets/photos/photo9.jpg",
    reaction:"The world fades away whenever I see you smiling like this. ❤️🥹"
},

{
    image:"assets/photos/photo10.jpg",
    reaction:"If I had one wish, it would be to keep making memories with you forever. 🤍"
}

];

// ==========================================
// Variables
// ==========================================

let currentIndex = 0;

// ==========================================
// Initialize
// ==========================================

totalPages.textContent = memories.length;

loadMemory(currentIndex);

// ==========================================
// Load Memory
// ==========================================

function loadMemory(index){

    const memory = memories[index];

    memoryImage.classList.remove("photo-enter");
    reactionBox.classList.remove("reaction-show");

    photoFrame.classList.add("page-turn");

    setTimeout(()=>{

        memoryImage.src = memory.image;

        memoryImage.classList.add("photo-enter");

        typeReaction(memory.reaction);

        currentPage.textContent = index + 1;

        updateButtons();

    },250);

    setTimeout(()=>{

        photoFrame.classList.remove("page-turn");

    },800);

}

// ==========================================
// Typewriter
// ==========================================

function typeReaction(text){

    reactionBox.innerHTML = "";

    reactionBox.classList.add("typing");
    reactionBox.classList.add("reaction-show");

    const characters = Array.from(text); // Handles emojis correctly

    let i = 0;

    const timer = setInterval(() => {

        reactionBox.textContent += characters[i];

        i++;

        if (i >= characters.length) {

            clearInterval(timer);

            reactionBox.classList.remove("typing");

        }

    }, 30);

}
// ==========================================
// Buttons
// ==========================================

function updateButtons(){

    prevBtn.disabled = currentIndex === 0;

    if(currentIndex === memories.length - 1){

        nextBtn.style.display = "none";

        foreverContainer.classList.add("show");

    }else{

        nextBtn.style.display = "inline-flex";

        foreverContainer.classList.remove("show");

    }

}

/* ==========================================
   Part 2
   Navigation & Effects
========================================== */

// ==========================================
// Previous Button
// ==========================================

prevBtn.addEventListener("click", () => {

    if (currentIndex === 0) return;

    currentIndex--;

    loadMemory(currentIndex);

    createHeartBurst();
    createSparkBurst();

});

// ==========================================
// Next Button
// ==========================================

nextBtn.addEventListener("click", () => {

    if (currentIndex < memories.length - 1) {

        currentIndex++;

        loadMemory(currentIndex);

        createHeartBurst();
        createSparkBurst();

    } else{

    foreverContainer.classList.add("show");

}

});

// ==========================================
// Keyboard Navigation
// ==========================================

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowRight") {

        nextBtn.click();

    }

    if (e.key === "ArrowLeft") {

        prevBtn.click();

    }

});

// ==========================================
// Floating Petals
// ==========================================

const petalsContainer = document.getElementById("petals");

function createPetal() {

    if (!petalsContainer) return;

    const petal = document.createElement("div");

    petal.className = "petal";

    const flowers = ["🌸", "🌺", "💮", "🌼"];

    petal.textContent =
        flowers[Math.floor(Math.random() * flowers.length)];

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.animationDuration =
        6 + Math.random() * 5 + "s";

    petal.style.fontSize =
        18 + Math.random() * 18 + "px";

    petalsContainer.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 11000);

}

setInterval(createPetal, 900);

// ==========================================
// Heart Burst
// ==========================================

const burst = document.getElementById("burst");

function createHeartBurst() {

    if (!burst) return;

    const hearts = ["❤️", "💖", "💕", "💗", "💝"];

    for (let i = 0; i < 12; i++) {

        const heart = document.createElement("div");

        heart.className = "burst-heart";

        heart.textContent =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left = "50%";
        heart.style.top = "50%";

        heart.style.setProperty(
            "--x",
            (Math.random() - 0.5) * 500 + "px"
        );

        heart.style.setProperty(
            "--y",
            (Math.random() - 0.5) * 400 + "px"
        );

        burst.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 900);

    }

}

// ==========================================
// Spark Burst
// ==========================================

function createSparkBurst() {

    if (!burst) return;

    for (let i = 0; i < 18; i++) {

        const spark = document.createElement("div");

        spark.className = "spark-burst";

        spark.style.left = "50%";
        spark.style.top = "50%";

        spark.style.setProperty(
            "--dx",
            (Math.random() - 0.5) * 320 + "px"
        );

        spark.style.setProperty(
            "--dy",
            (Math.random() - 0.5) * 320 + "px"
        );

        burst.appendChild(spark);

        setTimeout(() => {

            spark.remove();

        }, 800);

    }

}

if(foreverBtn){

    foreverBtn.addEventListener("click",()=>{

        foreverBtn.disabled = true;

        foreverBtn.innerHTML = "Opening... ❤️";

        document.body.style.transition = ".6s";

        document.body.style.opacity = "0";

        setTimeout(()=>{

            window.location.href = "forever.html";

        },600);

    });

}

// ==========================================
// Initial Effects
// ==========================================

setTimeout(() => {

    createHeartBurst();

}, 500);

createPetal();
