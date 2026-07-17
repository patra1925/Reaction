/* ==========================================
   LOVE SURPRISE WEBSITE
   SCRIPT.JS
========================================== */

const loader = document.getElementById("loader");
const openBtn = document.getElementById("openBtn");
const hearts = document.getElementById("hearts");
const sparkles = document.getElementById("sparkles");

/* ===========================
   Loader
=========================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.transition = "0.8s";

        setTimeout(() => {

            loader.style.display = "none";

            document.body.style.overflow = "auto";

        }, 800);

    }, 1800);

});

/* ===========================
   Floating Hearts
=========================== */

const heartEmoji = [

    "🤍",
    "💖",
    "💕",
    "💗",
    "💝"

];

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = heartEmoji[Math.floor(Math.random() * heartEmoji.length)];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = 18 + Math.random() * 22 + "px";

    heart.style.animationDuration = 6 + Math.random() * 6 + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 12000);

}

setInterval(createHeart, 350);

/* ===========================
   Sparkles
=========================== */

function createSparkle() {

    const star = document.createElement("div");

    star.className = "sparkle";

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 2 + "s";

    sparkles.appendChild(star);

}

for (let i = 0; i < 60; i++) {

    createSparkle();

}

/* ===========================
   Mouse Heart Trail
=========================== */

document.addEventListener("mousemove", e => {

    if (Math.random() > 0.65) {

        const heart = document.createElement("div");

        heart.innerHTML = "🤍";

        heart.style.position = "fixed";

        heart.style.left = e.clientX + "px";

        heart.style.top = e.clientY + "px";

        heart.style.pointerEvents = "none";

        heart.style.fontSize = "18px";

        heart.style.transition = "1s";

        heart.style.zIndex = "999";

        document.body.appendChild(heart);

        requestAnimationFrame(() => {

            heart.style.transform = "translateY(-40px) scale(1.5)";

            heart.style.opacity = "0";

        });

        setTimeout(() => {

            heart.remove();

        }, 1000);

    }

});

/* ===========================
   Card Tilt Effect
=========================== */

const card = document.querySelector(".glass-card");

card.addEventListener("mousemove", e => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const rotateY = (x - rect.width / 2) / 28;

    const rotateX = -(y - rect.height / 2) / 28;

    card.style.transform =
        `perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.02)`;

});

card.addEventListener("mouseleave", () => {

    card.style.transform =
        "perspective(900px) rotateX(0) rotateY(0) scale(1)";

});

/* ===========================
   Button Ripple
=========================== */

openBtn.addEventListener("click", function (e) {

    const ripple = document.createElement("span");

    ripple.style.position = "absolute";

    ripple.style.width = "20px";

    ripple.style.height = "20px";

    ripple.style.background = "rgba(255,255,255,.6)";

    ripple.style.borderRadius = "50%";

    ripple.style.pointerEvents = "none";

    ripple.style.left = e.offsetX + "px";

    ripple.style.top = e.offsetY + "px";

    ripple.style.transform = "translate(-50%,-50%)";

    ripple.style.animation = "ripple .7s ease-out";

    this.appendChild(ripple);

    setTimeout(() => {

        ripple.remove();

    }, 700);

});

/* ===========================
   Open Surprise
=========================== */

openBtn.addEventListener("click", () => {

    document.body.style.opacity = "0";

    document.body.style.transition = "0.8s";

    setTimeout(() => {

        location.href = "apology.html";

    }, 800);

});

/* ===========================
   Background Floating Emojis
=========================== */

const floating = [

    "✨",
    "🌸",
    "💖",
    "💕"

];

setInterval(() => {

    const emoji = document.createElement("div");

    emoji.innerHTML =
        floating[Math.floor(Math.random() * floating.length)];

    emoji.style.position = "fixed";

    emoji.style.left = Math.random() * 100 + "%";

    emoji.style.bottom = "-40px";

    emoji.style.fontSize = "22px";

    emoji.style.opacity = ".5";

    emoji.style.pointerEvents = "none";

    emoji.style.transition = "8s linear";

    document.body.appendChild(emoji);

    requestAnimationFrame(() => {

        emoji.style.transform =
            "translateY(-120vh) rotate(360deg)";

        emoji.style.opacity = "0";

    });

    setTimeout(() => {

        emoji.remove();

    }, 8000);

}, 900);

/* ===========================
   Greeting Animation
=========================== */

const title = document.querySelector(".glass-card h1");

setInterval(() => {

    title.animate([

        {

            transform: "scale(1)"

        },

        {

            transform: "scale(1.03)"

        },

        {

            transform: "scale(1)"

        }

    ], {

        duration: 1800

    });

}, 2500);