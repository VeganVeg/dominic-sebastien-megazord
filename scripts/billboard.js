
gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
  scrollTrigger: {
    start: 'top 30%',
    end: 'bottom 80%',
    toggleActions: 'restart none reverse none',
    trigger: '.titre',
  },
})
.from('.cOne', { opacity: 0, duration: 1, })
.from('.anim', { opacity: 0, duration: 1, },'-=0.5')
.from('.cTwo', { opacity: 0, duration: 1, })
.from('.cThree', { opacity: 0, duration: 1, })
.from('.cFour', { opacity: 0, duration: 1, })
.from('.cFive', { opacity: 0, duration: 1, })
.from('.cSix', { opacity: 0, duration: 1, })
.from('.video', { opacity: 0, duration: 1, })
.from('.mySwiper', { opacity: 0, duration: 1, })

const anim = document.querySelector(".anim");

gsap.to('.anim', {
  scrollTrigger: {
    trigger: '.anim',
    start: 'top 0',
    end: 'bottom 100%',
    
    onEnter: () => {
      anim.classList.add('pepperAnim2');
      anim.classList.remove('pepperAnim3');
      anim.classList.remove('pepperAnimIdle');
    },
    onUpdate: () => {
      anim.classList.add('pepperIdle');
      anim.classList.remove('pepperAnim3');
      anim.classList.remove('pepperAnim2');
    },
    onLeave: () => {
      anim.classList.add('pepperAnim3');
      anim.classList.remove('pepperAnimIdle');
      anim.classList.remove('pepperAnim2');
    },
  }
});

let titre = document.querySelector('.titreParole');
let form = document.getElementById('form');
const groupe = "red hot chili peppers";
const divParole = document.querySelector('.parole');

form.addEventListener('submit', function (e) {
  //loading 
  let loading = `<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
  </div>
  </div>`;
  //paroles
  e.preventDefault();
    divParole.innerHTML = loading;
    fetch("https://api.lyrics.ovh/v1/" + groupe + "/" + titre.value)
    .then(data => data.json())
    .then(paroles => {
      newLineToBr(paroles.lyrics);
    })
    .catch(error => {
      divParole.innerHTML = `Désolé, les paroles n'ont pu être trouvées. En voici la raison: ${error}`;
    }
    )
  
  
  const newLineToBr = function (str) {
    let html = `<p>${str.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>`;
    divParole.innerHTML = html;
  }
});

