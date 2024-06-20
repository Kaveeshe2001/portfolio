/* ==== typing animation ====*/
var typed = new Typed(".typing", {
    strings:["", "Web Designer", "Web Developer", "Graphic Designer", "Song Writer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/* ==== Nav toggler ==== */
const navToggle = document.querySelector(".nav-toggler");
navToggle.addEventListener("click", () => {
    document.querySelector(".aside").classList.toggle("open");
    document.querySelector(".main-content").classList.toggle("open");
})