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


  
  let titre = document.querySelector('.titre');
  let submit = document.querySelector('.submit');
  
  submit.addEventListener('click', function () {
    else.preventDefault();
    if (titre != null){
        fetch("https://api.lyrics.ovh/v1/redhotchilipepper/"submit.value)
            .then(data => data.json())
            .then(paroles => {
                const newLineToBr = function (str) {
                    return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
  }
            });
    }
  })