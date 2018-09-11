$(document).ready(function() {
  //for dark/light color scheme
  lightOrDark();

  // todo, add to top button

});

function lightOrDark(){
  const d = new Date();
  const hours = d.getHours();
  const night = hours >= 19 || hours <= 7;
  const body = document.body;

  if (night) {
    body.classList.add('dark');
    $('.jumbotron').toggleClass('no-bg');
    $('#switcher').toggleClass('btn-light btn-dark');
    $('#switch_icon').toggleClass('fa-sun fa-moon');
  }
}

function dark(){
  const body = document.body;
  body.classList.toggle("dark");
  $('#switcher').toggleClass('btn-light btn-dark');
  $('#switcher_dogs').toggleClass('btn-light btn-dark');
  $('#album').toggleClass('bg-light bg-dark');
  $('#switch_icon').toggleClass('fa-sun fa-moon');
}

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
  //animations for the home page
  if($('#background').isInViewport()) {
    $('#background').addClass('animated flip')
  }
  if($('#experience').isInViewport()) {
    $('#experience').addClass('animated rollIn')
  }
  if($('#resume-section').isInViewport()) {
    $('#resume-section').addClass('animated slideInUp')
  }
  if($('#projects').isInViewport()) {
    $('#projects').addClass('animated bounceInUp')
  }
  if($('#footer').isInViewport()) {
    $('#footer').addClass('animated slideInUp')
  }
})