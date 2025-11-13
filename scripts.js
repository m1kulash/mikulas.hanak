const nav = document.getElementById("nav");
const menuBtn = document.getElementById("menuBtn");

menuBtn.onclick = () => {
    nav.style.display = nav.style.display === "block" ? "none" : "block";
};

const fading = document.querySelectorAll(".fade");

function checkFade() {
    fading.forEach(sec => {
        let pos = sec.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });
}

window.addEventListener("scroll", checkFade);
checkFade();
