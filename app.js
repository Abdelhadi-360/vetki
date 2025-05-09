gsap.registerPlugin(ScrollTrigger, SplitText);

gsap.from("header div", {duration: 1, x: -50, opacity: 0});
gsap.from("header nav", {duration: 1, x: 50, opacity: 0});
gsap.from("main .text h1", {duration: 0.8, y: 50, opacity: 0});
gsap.from("main .text p", {delay: 0.4, duration: 0.8, y: 50, opacity: 0});
gsap.from("main .btns", {delay: 0.8, duration: 0.8, y: 50, opacity: 0});
gsap.from("main .logo-side img", {delay: 1.2, duration: 1, x: 50, opacity: 0});

let split = SplitText.create(".par", { type: "words" });

gsap.from(split.words, {
    scrollTrigger:{ 
        trigger: '.par',
        start: "20% 80%",
        end: "bottom top",
    },
    duration: 0.7, 
    y: 100,         
    autoAlpha: 0,   
    stagger: 0.05, 
});
gsap.from('.to-left', {
    scrollTrigger:{ 
        trigger: '.to-left',
        start: "20% 80%",
        end: "bottom top",
    },
    x: 100,
    duration: 1.2,
    opacity: 0
});
gsap.from('.to-right', {
    scrollTrigger:{ 
        trigger: '.to-right',
        start: "20% 80%",
        end: "bottom top",
    },
    x: -100,
    duration: 1.2,
    opacity: 0
});
gsap.from(".download .download-p", {
    scrollTrigger: {
        trigger: ".download a",
        start: "20% 80%",
        end: "bottom top"
    },
    y: -100,
    duration: 1,
    opacity: 0,
    scale: 0.8
});
gsap.from(".download a", {
    scrollTrigger: {
        trigger: ".download a",
        start: "20% 80%",
        end: "bottom top"
    },
    delay: 1,
    duration: 1,
    opacity: 0,
    scale: 0.8
});



// SIDE BAR LOGIC
let sideBar = document.querySelector(".side-bar");
isOpen = false
function openSideBar() {
        gsap.to(".side-bar", {
            x: "-100%",
            duration: 1,
            opacity: 1
        });
        gsap.from(".side-bar a", {
            delay: 1,
            duration: 1,
            opacity: 0,
            stagger: 0.5
        });
}

function closeSideBar() {
    gsap.to(".side-bar", {
        x: "100%",
        duration: 1,
        opacity: 0.5,
    });
}