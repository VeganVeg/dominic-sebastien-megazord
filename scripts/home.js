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


const anim = document.querySelector('.anim');

let isScrolling;

let skateboard = gsap.timeline({
  scrollTrigger: {
    trigger: 'body',
    markers: true,
    onUpdate: (e) => {
      if (e.progress) {

        if (e.direction == -1) {
          anim.classList.add('skateboard-scroll-up');
          anim.classList.remove('skateboard-idle');
          anim.classList.remove('skateboard-scroll-down');
        } else {
          anim.classList.add('skateboard-scroll-down');
          anim.classList.remove('skateboard-scroll-up');
          anim.classList.remove('skateboard-idle');

        }
      }
    }
  }
})

window.addEventListener('scroll', function () {
  anim.classList.remove('skateboard-idle');

  window.clearTimeout(isScrolling);

  isScrolling = window.setTimeout(function () {
    anim.classList.add('skateboard-idle');
    anim.classList.remove('skateboard-scroll-up');
    anim.classList.remove('skateboard-scroll-down');
  }, 50)
});

const newLineToBr = function (str) {
  return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
}

let titre = document.querySelector('#titre');
let submit = document.querySelector('#submit');
let paroles = document.querySelector('.paroles');

submit.addEventListener('click', function (e) {
  e.preventDefault();
  let group = 'Red Hot Chili Peppers';
  let song = titre.value;
  let combineGS = group + '/' + song;
  let url = 'https://api.lyrics.ovh/v1/' + combineGS;
  fetch(url)
    .then((data) => data.json())
    .then((result) => {
      let resultat = result.lyrics;
      resultat = newLineToBr(result.lyrics);
      paroles.innerHTML = resultat;
    })
    .catch( function(error){
      console.log('error')
      paroles.innerHTML = "<p>Désolé, les paroles n'ont pu être trouvées. En voici la raison:</p>" + error;

    });
});