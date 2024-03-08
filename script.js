import "https://cdn.jsdelivr.net/npm/typeit@7.0.0/dist/typeit.min.js";

new TypeIt(".title", {
    speed: 50,
    loop: false
}).go()


const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
};
const aboutPage = document.getElementById('about');
const aboutSlideRight = document.getElementById('aboutDP');
const aboutSlideLeft = document.getElementById('about-box');

const aboutObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // console.log(entries)
            aboutSlideRight.classList.add('animateRight');
            aboutSlideLeft.classList.add('animateLeft');
            new TypeIt(".typeAnimation", {
                speed: 20,
                loop: false
            }).go();
        }
        // else {
        //     aboutSlideRight.classList.remove('animateRight');
        // }
    });
}, observerOptions);

aboutObserver.observe(aboutPage);

new TypeIt(".resumeType", {
    speed: 20,
    loop: false
}).go();
