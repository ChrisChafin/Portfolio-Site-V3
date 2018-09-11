$(document).ready(function(){
  // viewport test
  $('#navbar-toggler').on('click', function(){
    $('#switcher_dogs').toggle();
  })
  //run time
  lightOrDark();
});


function lightOrDark(){
  const d = new Date();
  const hours = d.getHours();
  const night = hours >= 19 || hours <= 7;
  const body = document.body;

  if (night) {
    body.classList.add('dark');
    $('#album').toggleClass('bg-light bg-dark');
    $('#switcher').toggleClass('btn-light btn-dark');
    $('#switcher_dogs').toggleClass('btn-light btn-dark');
    $('#switch_icon').toggleClass('fa-sun fa-moon');
  }
}

function dark(){
  const body = document.body;
  body.classList.toggle("dark");
  // $('#switcher').toggleClass('btn-light btn-dark');
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
  
    //animations for the dogs page
    $(window).on('resize scroll', function() {
      if($('#doggos-row-2').isInViewport()) {
        $('#doggos-row-2').addClass('animated fadeInRightBig');
      }
      if($('#doggos-row-3').isInViewport()) {
        $('#doggos-row-3').addClass('animated fadeInLeftBig');
      }
      if($('#doggos-row-4').isInViewport()) {
        $('#doggos-row-4').addClass('animated fadeInRightBig');
      }
      if($('#dog-footer').isInViewport()) {
        $('#dog-footer').addClass('animated fadeInUp');
      }    
    });