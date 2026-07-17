/* ==========================================
   forever.js
========================================== */

// ================================
// Floating Hearts
// ================================

const heartsContainer = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const hearts = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "💝",
        "🤍"
    ];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        18 + Math.random() * 24 + "px";

    heart.style.animationDuration =
        6 + Math.random() * 5 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 11000);

}

setInterval(createHeart, 500);

// ================================
// Fade-up Animation
// ================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
".collage,.quote-card,.letter,.quote,.final-text"
).forEach(el=>{

    el.classList.add("fade-up");

    observer.observe(el);

});

// ================================
// Image Hover Tilt
// ================================

document.querySelectorAll(".collage img")
.forEach(img=>{

    img.addEventListener("mousemove",(e)=>{

        const rect=img.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateY=(x-rect.width/2)/18;

        const rotateX=-(y-rect.height/2)/18;

        img.style.transform=
        `perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)`;

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="";

    });

});

// ================================
// Love Letter Typing Effect
// ================================

const promise=document.querySelector(".promise");

if(promise){

    const original=promise.innerHTML;

    promise.innerHTML="";

    let i=0;

    const chars=Array.from(original);

    function type(){

        if(i<chars.length){

            promise.innerHTML+=chars[i];

            i++;

            setTimeout(type,12);

        }

    }

    setTimeout(type,900);

}

// ================================
// Final Button
// ================================

const finishBtn=document.getElementById("finish");

if(finishBtn){

finishBtn.addEventListener("click",()=>{

let overlay=document.createElement("div");

overlay.className="overlay";

overlay.innerHTML=`

<h1>❤️</h1>

<h1>Forever & Always</h1>

<p>

Thank you for being

the most beautiful part

of my life.

<br><br>

No matter how difficult life becomes...

No matter how many misunderstandings come...

No matter how far life takes us...

<br><br>

I will always choose you.

I will always respect you.

I will always stand beside you.

<br><br>

I love you today,

tomorrow,

and every day after that.

❤️

<br><br>

Forever Yours,

<br>

<b>Rupak</b>

</p>

`;

document.body.appendChild(overlay);

// Go to the top immediately
window.scrollTo(0, 0);

// Make sure the overlay starts at its top
overlay.scrollTop = 0;

requestAnimationFrame(() => {

    overlay.classList.add("show");

});

createCelebration();

});

}

// ================================
// Celebration
// ================================

function createCelebration(){

for(let i=0;i<150;i++){

setTimeout(()=>{

const heart=document.createElement("div");

heart.className="heart";

const items=[
"❤️",
"💕",
"💖",
"💗",
"✨",
"🌸"
];

heart.innerHTML=
items[Math.floor(Math.random()*items.length)];

heart.style.left=
Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=
18+Math.random()*28+"px";

heart.style.animationDuration=
5+Math.random()*3+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

},i*40);

}

}

// ================================
// Auto Scroll Glow
// ================================

window.addEventListener("scroll",()=>{

const value=window.scrollY;

document.body.style.backgroundPositionY=
value*0.2+"px";

});

// ================================
// Welcome Animation
// ================================

window.addEventListener("load",()=>{

document.body.animate([

{
opacity:0,
transform:"scale(.98)"
},

{
opacity:1,
transform:"scale(1)"
}

],{

duration:900,
fill:"forwards"

});

});