gsap.registerPlugin(ScrollTrigger);

const video = document.querySelector('.video');

gsap.to(video, {
    scrollTrigger: video,
    x: '100%',
    duration: 2,
  });