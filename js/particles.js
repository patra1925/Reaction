/* ==========================================
   particles.js
   Ending Page
========================================== */

// ==========================================
// Elements
// ==========================================

const letter = document.getElementById("letter");
const foreverBtn = document.getElementById("foreverBtn");

const confettiContainer = document.getElementById("confetti");
const petalsContainer = document.getElementById("petals");

const heartsContainer = document.getElementById("hearts");

// ==========================================
// Love Letter
// ==========================================

const message = `

Hi Love ❤️,

If you've reached this page,
thank you for staying till the end.

I know I'm not perfect.

I make mistakes.

Sometimes I hurt you without meaning to.

But one thing has never changed...

I truly love you.

Every memory we created,
every laugh,
every little fight,
every smile...

They all mean the world to me.

Thank you for being a part of my life.

I hope we'll continue making beautiful memories together.

Forever Yours ❤️

`;

// ==========================================
// Typewriter
// ==========================================

let index = 0;

function typeWriter() {

    if (index < message.length) {

        letter.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter, 35);

    }

}

typeWriter();

// ==========================================
// Restart
// ==========================================

foreverBtn.addEventListener("click", () => {

    foreverBtn.disabled = true;

    foreverBtn.innerHTML = "Opening... ❤️";

    document.body.style.transition = ".8s";

    document.body.style.opacity = "0";

    createConfettiBurst();

    setTimeout(() => {

        window.location.href = "forever.html";

    }, 900);

});

// ==========================================
// Confetti
// ==========================================

const confettiColors = [

    "#ff5d8f",
    "#ffd166",
    "#7bdff2",
    "#b8f2e6",
    "#cdb4db",
    "#ffb3c6"

];

function createConfetti() {

    const piece = document.createElement("div");

    piece.className = "confetti";

    piece.style.left = Math.random() * 100 + "vw";

    piece.style.background =
        confettiColors[
            Math.floor(Math.random() * confettiColors.length)
        ];

    piece.style.animationDuration =
        (5 + Math.random() * 4) + "s";

    piece.style.opacity = Math.random();

    confettiContainer.appendChild(piece);

    setTimeout(() => {

        piece.remove();

    }, 9000);

}

function createConfettiBurst() {

    for (let i = 0; i < 80; i++) {

        setTimeout(createConfetti, i * 20);

    }

}

// Initial Burst

createConfettiBurst();

// Continuous

setInterval(createConfetti, 250);

// ==========================================
// Floating Hearts
// ==========================================

const heartIcons = [

    "❤️",
    "💖",
    "💕",
    "💗",
    "💝"

];

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML =
        heartIcons[
            Math.floor(Math.random() * heartIcons.length)
        ];

    heart.style.position = "fixed";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.bottom = "-40px";

    heart.style.fontSize =
        (16 + Math.random() * 16) + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "2";

    const duration = 6 + Math.random() * 4;

    heart.animate(

        [

            {

                transform: "translateY(0)",

                opacity: 0

            },

            {

                opacity: 1,

                offset: 0.15

            },

            {

                transform: `translateY(-110vh)
                            translateX(${(Math.random()-.5)*120}px)`,

                opacity: 0

            }

        ],

        {

            duration: duration * 1000,

            easing: "linear"

        }

    );

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, duration * 1000);

}

setInterval(createHeart, 800);

// ==========================================
// Floating Petals
// ==========================================

const petals = [

    "🌸",
    "🌺",
    "💮",
    "🌼"

];

function createPetal() {

    const petal = document.createElement("div");

    petal.innerHTML =
        petals[
            Math.floor(Math.random() * petals.length)
        ];

    petal.style.position = "absolute";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.top = "-40px";

    petal.style.fontSize =
        (18 + Math.random() * 14) + "px";

    petal.style.animation =
        `petalFall ${7 + Math.random() * 4}s linear forwards`;

    petalsContainer.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 11000);

}

setInterval(createPetal, 1000);

// ==========================================
// Welcome Burst
// ==========================================

window.addEventListener("load", () => {

    for (let i = 0; i < 20; i++) {

        setTimeout(createHeart, i * 120);

    }

});