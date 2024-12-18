var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".nav-links");

togglebtn.addEventListener("click", function () {
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

var typed = new Typed(".input", {
    strings: [
        "Frontend Developer",
        "UI/UX Designer",
        "Web Developer",
        "Full Stack Developer",
    ],
    typeSpeed: 50,
    backSpeed: 60,
    loop: true,
});