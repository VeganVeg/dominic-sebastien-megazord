gsap.registerPlugin(ScrollTrigger);

let imagesArr = document.querySelectorAll('section');
imagesArr.forEach(function (img) {
  gsap.to(img, {
    scrollTrigger: {
      markers: false,
      start: 'top 70%',
      end: 'tpo 50%',
      trigger: img,
      toggleActions: 'restart complete reverse reset',
    },
    y: '0',
    opacity: '1',
    duration: 0.3,
  });
});


let titleArr = document.querySelectorAll('h2')
titleArr.forEach(function (title) {
  console.log(title)
  gsap.to(title, {
    scrollTrigger: {
      markers: false,
      start: 'top 70%',
      end: 'tpo 50%',
      trigger: title,
      toggleActions: 'restart complete reverse reset',
    },
    fontSize: '35px',
    duration: 0.3,
  });
});