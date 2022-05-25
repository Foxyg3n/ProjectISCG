$(window).scroll(function() {
  parallax();
})

function parallax() {

  var param = 0.3;
  var wScroll = $(window).scrollTop();

  $(".parallax").css('background-position', 'center '+(-param)*(wScroll)+'px');

}