window.addEventListener('load', function () {
    document.querySelector(".preloader").style.display = "none"
});

let a = document.querySelector(".nav");

function menu() {
    a.style.left = "0"
}

function cross() {
    a.style.left = "100vw"
}
