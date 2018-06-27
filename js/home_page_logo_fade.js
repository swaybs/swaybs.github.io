// $( document.body ).click(function() {
//   $( "div:hidden:first" ).fadeIn(2000);
// });


// $(document).ready(function() {
//   $('.fa.hidden').addClass('social_show').animate({
//     width: '100px',
//
//   });
//
//
//
//
// });
$(document).ready(function(){

/*! Fades in page on load */
$('html').css('display', 'none');
$('html').fadeIn(3500);

});

// Box shadow effect with OkShadow //

$('.box-shadow').okshadow({
  color: '#555',
  textShadow: false,
  xMax: 10,
  yMax: 30,
  yOffset: 5,
  fuzzMin: 1,
  fuzzMax: 10,
});

// Text shadow effect with OkShadow //

$('.enter-page-logo').okshadow({
  color: '#555',
  textShadow: true,
  xMax: 10,
  yMax: 30,
  yOffset: 5,
  fuzzMin: 1,
  fuzzMax: 10,
});
