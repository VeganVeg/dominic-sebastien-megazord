
/* Bonjour, apparement on dirait que ma page js ne veut pas se connecter a la page html;
 le gsap fonctionne bien je l'ai fait avec codepen svp pourriez vous regarder ce qui ne 
fonctionne pas on(sebastien et moi) ne comprend pas 

gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
  scrollTrigger: {
    start: 'top 30%',
    end: 'bottom 80%',
    toggleActions: 'restart none reverse none',
    trigger: '.titre',
  },
})
  .from('.cOne', { x: '100%', duration: 2, })
  .from('.anim', { opacity: 0, duration: 1, })
  .from('.cTwo', { x: '100%', duration: 2, })
  .from('.cThree', { x: '100%', duration: 2, })
  .from('.cFour', { x: '100%', duration: 2, })
  .from('.cFive', { x: '100%', duration: 2, })
  .from('.cSix', { x: '100%', duration: 2, })
  .from('.video', { opacity: 0, duration: 2, })
  .from('.mySwiper', { opacity: 0, duration: 2, })

  const anim = document.querySelector(".anim");

gsap.to('.anim', {
  scrollTrigger: {
    trigger: '.level',
    start: 'top 0',
    end: 'bottom 100%', 
    
    onEnter: () => {
      body.classList.add('pepperAnim2');
      body.classList.remove('pepperAnim3');
      body.classList.remove('pepperAnimIdle');
    },
    onUpdate: () => {
      body.classList.add('pepperIdle');
      body.classList.remove('pepperAnim3');
      body.classList.remove('pepperAnim2');
    },
    onLeave: () => {
      body.classList.add('pepper3');
      body.classList.remove('pepperAnimIdle');
      body.classList.remove('pepperAnim2');
    },
  }});  */ 

  let titre = document.querySelector('.titreParole');
  //let submit = document.querySelector('.submit');
  let form = document.getElementById('form');
  const groupe = "red hot chili peppers";
  const divParole = document.querySelector('.parole');
  
  form.addEventListener('submit', function (e) {
    console.log(titre.value);
    e.preventDefault();
    if (titre != null){
        fetch("https://api.lyrics.ovh/v1/" + groupe + "/" + titre.value)
            .then(data => data.json())
            .then(paroles => {
              newLineToBr(paroles.lyrics);
              //console.log(paroles.lyrics);
            })
          }
    /* function createHtml(sab){
    
     
    } */
      const newLineToBr = function (str) {
        //console.log(str);
                  //str.replace(/(?:\r\n|\r|\n)/g, '<br>');
                  console.log(str); 
                  let html = `<p>${str.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>`;
                  divParole.innerHTML = html;}
    })
  
 