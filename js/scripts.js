$(document).ready(function() {
  //for dark/light color scheme
  const d = new Date();
  const hours = d.getHours();
  const night = hours >= 19 || hours <= 7;
  const body = document.body;

  if (night) {
    body.classList.add('dark');
    $('#album').toggleClass('bg-light bg-dark');
    $('.jumbotron').toggleClass('no-bg');
    $('#switcher').toggleClass('btn-light btn-dark');
    $('#switch_icon').toggleClass('fa-sun fa-moon');
  }
  // for to top btn
  const introHeight = document.querySelector('#summary').offsetHeight;
  // const topButton = document.getElementById('top-button');
  // const $topButton = $('#top-button');

  // window.addEventListener(
  //   'scroll',
  //   function() {
  //     if (window.scrollY > introHeight) {
  //       $topButton.fadeIn();
  //     } else {
  //       $topButton.fadeOut();
  //     }
  //   },
  //   false
  // );

  // topButton.addEventListener('click', function() {
  //   $('html, body').animate({ scrollTop: 0 }, 500);
  // });
});

function dark(){
  const body = document.body;
  body.classList.toggle("dark");
  $('#switcher').toggleClass('btn-light btn-dark');
  $('#album').toggleClass('bg-light bg-dark');
  $('#switch_icon').toggleClass('fa-sun fa-moon');
} 