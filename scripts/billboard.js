
/* Bonjour, apparement on dirait que ma page js ne veut pas se connecter a la page html;
 le gsap fonctionne bien je l'ai fait avec codepen svp pourriez vous regarder ce qui ne 
fonctionne pas on ne comprend pas */ 

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
