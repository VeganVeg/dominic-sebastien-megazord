gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
    defaults: {
        scrollTrigger: {
            toggleActions: "play complete reverse",
            trigger: "section",
        },
    },
})

.to('section', {rotation: 360, opacity: 0,})
.to('h2', {rotation: 360, opacity: 0,});
