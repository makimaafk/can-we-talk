// ===========================
// ELEMENTS
// ===========================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const envelope = document.getElementById("envelope");

// ===========================
// NO BUTTON ESCAPES
// ===========================

function moveButton(){

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

// ===========================
// YES BUTTON
// ===========================

yesBtn.addEventListener("click", ()=>{

    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    envelope.classList.remove("hidden");

    createHearts(35);

});

// ===========================
// OPEN ENVELOPE
// ===========================

envelope.addEventListener("click", ()=>{

    envelope.classList.toggle("open");

});

// ===========================
// HEARTS
// ===========================

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    const icons = ["💙","🩵","🤍","🌷","🌻"];

    heart.innerHTML =
        icons[Math.floor(Math.random()*icons.length)];

    heart.style.position = "fixed";

    heart.style.left =
        Math.random()*window.innerWidth+"px";

    heart.style.top =
        window.innerHeight+"px";

    heart.style.fontSize =
        (20+Math.random()*18)+"px";

    heart.style.pointerEvents="none";

    heart.style.animation="floatHeart 3s linear forwards";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },3000);

}

function createHearts(amount){

    for(let i=0;i<amount;i++){

        setTimeout(createHeart,i*80);

    }

}

// ===========================
// RANDOM SPARKLES
// ===========================

setInterval(()=>{

    const sparkle=document.createElement("div");

    sparkle.innerHTML="✨";

    sparkle.style.position="fixed";

    sparkle.style.left=
        Math.random()*window.innerWidth+"px";

    sparkle.style.top=
        Math.random()*window.innerHeight+"px";

    sparkle.style.fontSize="18px";

    sparkle.style.pointerEvents="none";

    sparkle.style.opacity=".8";

    sparkle.style.transition="all 2s";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.style.opacity="0";
        sparkle.style.transform="scale(2)";

    },100);

    setTimeout(()=>{

        sparkle.remove();

    },2200);

},700);