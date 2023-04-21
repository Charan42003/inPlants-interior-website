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

//CHANGING BACKGROUND IMAGES TILL 500PX WIDTH
if(window.matchMedia("(max-width: 500px)").matches === true) {
    document.querySelector(".head_bg > img").setAttribute('src', 'images/modern-living-room-right.png');
}
else {
    document.querySelector(".head_bg > img").setAttribute('src', 'images/modern-living-room.png');
}
