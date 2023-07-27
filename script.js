$(document).ready(function(){
    $("#show").click(function() {
      $("#sb").fadeIn(10);
       });
       $("#h").click(function() {
       $("#sb").fadeOut(10);
        });
    });
    
    const htmlbar = document.getElementById('bar1')
    cssbar = document.getElementById('bar2')
    jsbar = document.getElementById('bar3')
    bsbar = document.getElementById('bar4')
    jqbar = document.getElementById('bar5')
    cbar = document.getElementById('bar6')
    pybar = document.getElementById('bar7')
    about = document.getElementById('about')
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        htmlbar.classList.add('activehtml')
        cssbar.classList.add('activecss')
        jsbar.classList.add('activejs')
        bsbar.classList.add('activebs')
        jqbar.classList.add('activejq')
        cbar.classList.add('activec')
        pybar.classList.add('activepy')
      }
    })
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 250) {
      document.querySelector(".about").style.display ="flex";
      }
    })