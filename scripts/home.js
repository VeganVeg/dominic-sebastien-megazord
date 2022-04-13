gsap.registerPlugin(ScrollTrigger);

let baniereArr = document.querySelectorAll('body');

baniereArr.forEach(function(book) {
  let imagesArr = document.querySelectorAll('section');
    imagesArr.forEach(function(img) {
    gsap.to(img, {
    scrollTrigger: {
      markers: false,
      start: 'top 70%',
      end: 'tpo 50%',
      trigger: img,
      toggleActions: 'restart complete reverse reset',
    },
    y: '-30px',
    opacity: '1',
    duration: 0.3,
      });
    });
  
});