gsap.registerPlugin(ScrollTrigger);

gsap.to('.section', {
  scrollTrigger: {
    markers: true,
    trigger: '.section',
  },
  x: '40%',
  duration: 1,
});