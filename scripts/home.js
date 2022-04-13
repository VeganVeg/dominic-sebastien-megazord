gsap.registerPlugin(ScrollTrigger);

let baniereArr = document.querySelectorAll('body');

baniereArr.forEach(function(book) {
  let imagesArr = document.querySelectorAll('section');
    imagesArr.forEach(function(img) {
    console.log(img)
    gsap.fromTo(img, {
    scrollTrigger: {
      markers: true,
      start: ' center 50%',
      end: ' 30%',
      trigger: img,
      toggleActions: 'restart complete reverse reset',
      x: '-25%'
    },
    x: '10%',
    duration: 0.08,
      });
    });
  
});