import "https://cdn.jsdelivr.net/npm/typeit@7.0.0/dist/typeit.min.js";

$(document).ready(function () {
    $('.contact-slide').height('0')
    $('.front-slide').slideUp(3000)
    $(".left-slide").width("0")
    typeAnimate();
});

function typeAnimate() {
    setTimeout(() => { new TypeIt(".title", { speed: 50, loop: !1 }).go() }, 2e3)
} new TypeIt(".typeAnimation", {
    speed: 25, loop: !1
}).go();
const observerOptions = {
    root: null, rootMargin: "0px", threshold: 1
},
    aboutPage = document.getElementById("about"),
    aboutSlideRight = document.getElementById("aboutDP"),
    aboutSlideLeft = document.getElementById("about-box"),
    aboutObserver = new IntersectionObserver(function (e, t) {
        e.forEach(e => {
            e.isIntersecting && (aboutSlideRight.classList.add("animateRight"),
                aboutSlideLeft.classList.add("animateLeft"))
        })
    }, observerOptions);
aboutObserver.observe(aboutPage);





