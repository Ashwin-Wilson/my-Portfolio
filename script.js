import "https://cdn.jsdelivr.net/npm/typeit@7.0.0/dist/typeit.min.js";

$(document).ready(function(){
    $('.contact-slide').height('0')
   $('.front-slide').slideUp(5000)
   $(".left-slide").width("0")
   typeAnimate();
});

function typeAnimate(){
    setTimeout(() => {
        // console.log('sleeping')
        
        new TypeIt(".title", {
            speed: 50,
            loop: false
        }).go()
       }, 2000);
           
}
new TypeIt(".typeAnimation", {
    speed: 25,
    loop: false
}).go();

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
        }
        // else {
        //     aboutSlideRight.classList.remove('animateRight');
        // }
    });
}, observerOptions);

aboutObserver.observe(aboutPage);

// new TypeIt(".resumeType", {
//     speed: 20,
//     loop: false
// }).go();
