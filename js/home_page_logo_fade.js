// JavaScript ft. jQuery and Animate.css

$(document).ready(function() {

  /*! Fades in page on load */
  $('html').css('display', 'none');
  $('html').delay(500).fadeIn(500);

  // Add CSS classes and animations on load with JavaScript
  $('.my-logo').addClass('animated flipInX');
  $('.social-media-icons-enter-page').delay(1000).addClass('animated flipInX');
  $('.enter-page-btn').delay(3000).addClass('animated flipInX');


});

// JavaScript animation library "Anime.js"

var seekAnim = anime({

  targets: '#socialSeek .fa',
  margin: '0',
  // rotate: '2turn',
  translateX: 0,
  translateY: 100,
  scale: 2,
  delay: function(el, i, l) {
    return i * 100;
  },
  easing: 'easeOutElastic',
  elasticity: 200,
  autoplay: false

});

var seekProgressEl = document.querySelector('#seekAnim .progress');


seekProgressEl.addEventListener('input', function() {
  seekAnim.seek(seekAnim.duration * (seekProgressEl.value / 100));
});


// Hide Social Icons on load, Show on click








// Box shadow effect with OkShadow //

// $('.box-shadow').okshadow({
//   // color: '#555',
//   color: '#DAD2D8',
//   textShadow: false,
//   xMax: 5,
//   yMax: 10,
//   yOffset: 5,
//   fuzzMin: 1,
//   fuzzMax: 10,
// });
//
// // Text shadow effect with OkShadow //
//
// $('.enter-page-logo').okshadow({
//   color: '#555',
//   // color: '#DAD2D8',
//   textShadow: true,
//   xMax: 5,
//   yMax: 10,
//   yOffset: 5,
//   fuzzMin: 1,
//   fuzzMax: 10,
// });
