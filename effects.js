/* ============================= */
/* Auto Music */
/* ============================= */

document.body.addEventListener(
"click",
()=>{

    const music=
    document.getElementById("bgMusic");

    music.play();

},
{once:true}
);

/* ============================= */
/* Floating Hearts */
/* ============================= */

setInterval(()=>{

    const heart=document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=
        (15+Math.random()*30)+"px";

    document
    .querySelector(".hearts-container")
    .appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);

},500);


/* ============================= */
/* Cursor Trail Hearts */
/* ============================= */

document.addEventListener("mousemove",(e)=>{

    const heart=document.createElement("div");

    heart.classList.add("cursor-heart");

    const items=["❤️","💖","💕","✨"];

    heart.innerHTML=
        items[Math.floor(Math.random()*items.length)];

    heart.style.left=e.clientX+"px";

    heart.style.top=e.clientY+"px";

    heart.style.fontSize=
        (10+Math.random()*20)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },1000);

});


/* ============================= */
/* Memories Popup */
/* ============================= */

const memoryBtn=
document.getElementById("memoryBtn");

const memoryModal=
document.getElementById("memoryModal");

const closeMemory=
document.getElementById("closeMemory");

memoryBtn.onclick=()=>{

    memoryModal.style.display="flex";

}

closeMemory.onclick=()=>{

    memoryModal.style.display="none";

}


/* ============================= */
/* Click Photos */
/* ============================= */

document
.querySelectorAll(".gallery img")
.forEach(img=>{

    img.addEventListener("click",()=>{

        const popup=
        window.open("");

        popup.document.write(`
            <img
            src="${img.src}"
            style="
            width:100%;
            background:black;
            ">
        `);

    });

});


/* ============================= */
/* Heart Explosion */
/* ============================= */

const letterBtn=
document.getElementById("btn__letter");

letterBtn.addEventListener("click",()=>{

    for(let i=0;i<40;i++){

        const heart=
        document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";

        heart.style.left="50%";

        heart.style.top="50%";

        heart.style.zIndex="999999";

        heart.style.fontSize="30px";

        document.body.appendChild(heart);

        let x=
        (Math.random()-0.5)*800;

        let y=
        (Math.random()-0.5)*800;

        heart.animate([

            {
                transform:
                "translate(0,0) scale(1)",
                opacity:1
            },

            {
                transform:
                `translate(${x}px,${y}px) scale(0)`,
                opacity:0
            }

        ],{

            duration:1500

        });

        setTimeout(()=>{

            heart.remove();

        },1500);

    }

});

const cursor =
document.getElementById("customCursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left =
    e.clientX + "px";

    cursor.style.top =
    e.clientY + "px";

});

const slides =
document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

document.querySelector(".next")
.addEventListener("click",()=>{

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;
    }

    showSlide(currentSlide);
});

document.querySelector(".prev")
.addEventListener("click",()=>{

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
});

slides.forEach(img=>{

    img.addEventListener("click",()=>{

        const viewer =
        document.createElement("div");

        viewer.style.cssText=`
        position:fixed;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,.95);
        display:flex;
        justify-content:center;
        align-items:center;
        z-index:999999;
        `;

        viewer.innerHTML=`
        <img src="${img.src}"
        style="
        max-width:90%;
        max-height:90%;
        border-radius:20px;
        ">
        `;

        document.body.appendChild(viewer);

        viewer.onclick=()=>{
            viewer.remove();
        }

    });

});

setInterval(()=>{

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;
    }

    showSlide(currentSlide);

},4000);

document.getElementById("photoCounter")
.innerHTML =
`${currentSlide+1} / ${slides.length}`;