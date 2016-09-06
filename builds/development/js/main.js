(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$( document ).ready(function() {


  (function() {

    var isPageHome = $('.page-home');
    // if (!isPageHome) {
    if($('body').is('.js-menu')){
      var string_1 = 'GPS';
      $('.logo__text').text(string_1);
      $('.logo__text').fadeIn(100);

      $('#menu').mouseenter(function(){
        // show logo
        $('.logo__text').fadeOut('300', function() {
            var origin_1 = 'Grant Post Service';
            $('.logo__text').text(origin_1);

            $('.logo__text').css("font-size", "16px");
            $('.logo__text').fadeIn('300');
        });
        // show menu items
        $('.menu__sidebar__item__link__text').stop( true, true ).delay(300).fadeIn(300);
        // show menu addresses
        $('.menu__address').stop( true, true ).delay(300).fadeIn(300);
        // show menu phones
        $('.menu__phone').stop( true, true ).delay(300).fadeIn(300);
        // show menu bottom btn
        $('.menu__btn__link').stop( true, true ).delay(300).fadeIn(300);
        //
      });

      $('#menu').mouseleave(function(){
        $('.logo__text').fadeOut('50', function() {
            var string_1 = 'GPS';
            $('.logo__text').text(string_1);

            $('.logo__text').css("font-size", "12px");
            $('.logo__text').fadeIn('300');
        });
        // hide menu items
        $('.menu__sidebar__item__link__text').stop( true, true ).fadeOut(20);
        // hide menu addresses
        $('.menu__address').stop( true, true ).fadeOut(20);
        // hide menu phones
        $('.menu__phone').stop( true, true ).fadeOut(20);
        // hide menu bottom btn
        $('.menu__btn__link').stop( true, true ).fadeOut(20);
      });
    }

	})();


  // burger menu
	(function($) {

		var duration = 100;

		$('#burger').click(function(){
			$('#burger-content').fadeIn(duration);
		});

		// hide when click close button
		$('.burger-nav__close').click(function(){
			$('#burger-content').fadeOut(duration);
		});

		// hide modal-content when click out of modal-content block
		$('#burger-content').click(function(){
			$('#burger-content').fadeOut(duration);
		});

		// hide when modal-content press Esc button
		$('html body').on('keyup', function(e) {
				if (e.keyCode === 27) {
						$('#burger-content').fadeOut(duration);
				}
		});

	})(jQuery);
	// eof burger menu




  // slider

    //
    if($('body').is('.js-bx')){
      // var j = jQuery.noConflict();
      // j(document).ready(function () {
         $('#home-slider').bxSlider({
           // mode: 'vertical',
           auto: true,
           speed: 1500, // 1500
           controls: false,
           pause: 4000, // 4000
           pager: false,
           autoControls: false
         });

      // });
    }

    // slider about honors
    if($('body').is('.page-about')){

      if ($(window).width() > 768) {
        $('#bx-about-honors').bxSlider({
         auto: true,
         speed: 1200, // 1500
         controls: false,
         pause: 1000, // 4000
        //  pager: false,
        //  autoControls: false,

          minSlides: 5,
          maxSlides: 5,
          moveSlides: 1,
          slideWidth: 136,
          slideMargin: 30
        });
      }

      if ($(window).width() <= 768) {
        $('#bx-about-honors').bxSlider({
         auto: true,
         speed: 1200, // 1500
         controls: false,
         pause: 1000, // 4000
        //  pager: false,
        //  autoControls: false,

          minSlides: 2,
          maxSlides: 2,
          moveSlides: 1,
          slideWidth: 130,
          slideMargin: 20
        });
      }



      // slider about partners
      if ($(window).width() <= 768) {
        $('#bx-about-partners').bxSlider({
        //  auto: true,
         speed: 1200, // 1500
         controls: false,
         pause: 1000, // 4000
        //  pager: false,
        //  autoControls: false,

          minSlides: 2,
          maxSlides: 2,
          moveSlides: 1,
          slideWidth: 130,
          slideMargin: 20
        });
      }

      if ($(window).width() > 768) {
        $('#bx-about-partners').bxSlider({
        //  auto: true,
         speed: 1200, // 1500
         controls: false,
         pause: 1000, // 4000
        //  pager: false,
        //  autoControls: false,

          minSlides: 4,
          maxSlides: 4,
          moveSlides: 1,
          slideWidth: 192,
          slideMargin: 10
        });
      }
    }

$("a#fancylink").fancybox({
  // beforeShow: function() {
  //   var newWidth = 250; // set new image display width
  //   $("#fancylink img").css({
  //       width  : newWidth,
  //       height : "auto"
  //   }); // apply new size to img
  //   // optionally :
  //   // set new values for parent container IF you want to match the image size
  //   // this.width  = newWidth;
  //   // this.height = $(".fancybox-inner img").innerHeight();
  // },
  'hideOnContentClick': true,
  'transitionIn'	:	'elastic',
  'transitionOut'	:	'elastic',
  'fitToView'	:	false,
  'speedIn'		:	600,
  'speedOut'		:	200,
  'helpers' : {
      'overlay' : {
          'locked' : false // try changing to true and scrolling around the page
      }
  },
  'overlayShow'	:	false,
  'maxWidth' : 250
});

$("a#fancylink2").fancybox({
  'hideOnContentClick': true,
  'transitionIn'	:	'elastic',
  'transitionOut'	:	'elastic',
  'fitToView'	:	false,
  'speedIn'		:	600,
  'speedOut'		:	200,
  'helpers' : {
      'overlay' : {
          'locked' : false // try changing to true and scrolling around the page
      }
  },
  'overlayShow'	:	false,
  'maxWidth' : 150
});



// этим мы отключим перепрыгивание наверх экрана по клике на ссылку
// function fancyNice(e) {
//    e.preventDefault();
// }


 // eof slider



  (function($) {
    if($('body').is('.page-home')){
      new WOW().init();
    }
  })(jQuery);


});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3d3L0RvY3VtZW50cy93b3JrLzAxX19kZXYvMDhfX2dwcy12Mi9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL2hvbWUvd3cvRG9jdW1lbnRzL3dvcmsvMDFfX2Rldi8wOF9fZ3BzLXYyL3NyYy9qcy9mYWtlXzYxMjlhMTkwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJCggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcblxuXG4gIChmdW5jdGlvbigpIHtcblxuICAgIHZhciBpc1BhZ2VIb21lID0gJCgnLnBhZ2UtaG9tZScpO1xuICAgIC8vIGlmICghaXNQYWdlSG9tZSkge1xuICAgIGlmKCQoJ2JvZHknKS5pcygnLmpzLW1lbnUnKSl7XG4gICAgICB2YXIgc3RyaW5nXzEgPSAnR1BTJztcbiAgICAgICQoJy5sb2dvX190ZXh0JykudGV4dChzdHJpbmdfMSk7XG4gICAgICAkKCcubG9nb19fdGV4dCcpLmZhZGVJbigxMDApO1xuXG4gICAgICAkKCcjbWVudScpLm1vdXNlZW50ZXIoZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gc2hvdyBsb2dvXG4gICAgICAgICQoJy5sb2dvX190ZXh0JykuZmFkZU91dCgnMzAwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgb3JpZ2luXzEgPSAnR3JhbnQgUG9zdCBTZXJ2aWNlJztcbiAgICAgICAgICAgICQoJy5sb2dvX190ZXh0JykudGV4dChvcmlnaW5fMSk7XG5cbiAgICAgICAgICAgICQoJy5sb2dvX190ZXh0JykuY3NzKFwiZm9udC1zaXplXCIsIFwiMTZweFwiKTtcbiAgICAgICAgICAgICQoJy5sb2dvX190ZXh0JykuZmFkZUluKCczMDAnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHNob3cgbWVudSBpdGVtc1xuICAgICAgICAkKCcubWVudV9fc2lkZWJhcl9faXRlbV9fbGlua19fdGV4dCcpLnN0b3AoIHRydWUsIHRydWUgKS5kZWxheSgzMDApLmZhZGVJbigzMDApO1xuICAgICAgICAvLyBzaG93IG1lbnUgYWRkcmVzc2VzXG4gICAgICAgICQoJy5tZW51X19hZGRyZXNzJykuc3RvcCggdHJ1ZSwgdHJ1ZSApLmRlbGF5KDMwMCkuZmFkZUluKDMwMCk7XG4gICAgICAgIC8vIHNob3cgbWVudSBwaG9uZXNcbiAgICAgICAgJCgnLm1lbnVfX3Bob25lJykuc3RvcCggdHJ1ZSwgdHJ1ZSApLmRlbGF5KDMwMCkuZmFkZUluKDMwMCk7XG4gICAgICAgIC8vIHNob3cgbWVudSBib3R0b20gYnRuXG4gICAgICAgICQoJy5tZW51X19idG5fX2xpbmsnKS5zdG9wKCB0cnVlLCB0cnVlICkuZGVsYXkoMzAwKS5mYWRlSW4oMzAwKTtcbiAgICAgICAgLy9cbiAgICAgIH0pO1xuXG4gICAgICAkKCcjbWVudScpLm1vdXNlbGVhdmUoZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnLmxvZ29fX3RleHQnKS5mYWRlT3V0KCc1MCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHN0cmluZ18xID0gJ0dQUyc7XG4gICAgICAgICAgICAkKCcubG9nb19fdGV4dCcpLnRleHQoc3RyaW5nXzEpO1xuXG4gICAgICAgICAgICAkKCcubG9nb19fdGV4dCcpLmNzcyhcImZvbnQtc2l6ZVwiLCBcIjEycHhcIik7XG4gICAgICAgICAgICAkKCcubG9nb19fdGV4dCcpLmZhZGVJbignMzAwJyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBoaWRlIG1lbnUgaXRlbXNcbiAgICAgICAgJCgnLm1lbnVfX3NpZGViYXJfX2l0ZW1fX2xpbmtfX3RleHQnKS5zdG9wKCB0cnVlLCB0cnVlICkuZmFkZU91dCgyMCk7XG4gICAgICAgIC8vIGhpZGUgbWVudSBhZGRyZXNzZXNcbiAgICAgICAgJCgnLm1lbnVfX2FkZHJlc3MnKS5zdG9wKCB0cnVlLCB0cnVlICkuZmFkZU91dCgyMCk7XG4gICAgICAgIC8vIGhpZGUgbWVudSBwaG9uZXNcbiAgICAgICAgJCgnLm1lbnVfX3Bob25lJykuc3RvcCggdHJ1ZSwgdHJ1ZSApLmZhZGVPdXQoMjApO1xuICAgICAgICAvLyBoaWRlIG1lbnUgYm90dG9tIGJ0blxuICAgICAgICAkKCcubWVudV9fYnRuX19saW5rJykuc3RvcCggdHJ1ZSwgdHJ1ZSApLmZhZGVPdXQoMjApO1xuICAgICAgfSk7XG4gICAgfVxuXG5cdH0pKCk7XG5cblxuICAvLyBidXJnZXIgbWVudVxuXHQoZnVuY3Rpb24oJCkge1xuXG5cdFx0dmFyIGR1cmF0aW9uID0gMTAwO1xuXG5cdFx0JCgnI2J1cmdlcicpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdFx0XHQkKCcjYnVyZ2VyLWNvbnRlbnQnKS5mYWRlSW4oZHVyYXRpb24pO1xuXHRcdH0pO1xuXG5cdFx0Ly8gaGlkZSB3aGVuIGNsaWNrIGNsb3NlIGJ1dHRvblxuXHRcdCQoJy5idXJnZXItbmF2X19jbG9zZScpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdFx0XHQkKCcjYnVyZ2VyLWNvbnRlbnQnKS5mYWRlT3V0KGR1cmF0aW9uKTtcblx0XHR9KTtcblxuXHRcdC8vIGhpZGUgbW9kYWwtY29udGVudCB3aGVuIGNsaWNrIG91dCBvZiBtb2RhbC1jb250ZW50IGJsb2NrXG5cdFx0JCgnI2J1cmdlci1jb250ZW50JykuY2xpY2soZnVuY3Rpb24oKXtcblx0XHRcdCQoJyNidXJnZXItY29udGVudCcpLmZhZGVPdXQoZHVyYXRpb24pO1xuXHRcdH0pO1xuXG5cdFx0Ly8gaGlkZSB3aGVuIG1vZGFsLWNvbnRlbnQgcHJlc3MgRXNjIGJ1dHRvblxuXHRcdCQoJ2h0bWwgYm9keScpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcblx0XHRcdFx0XHRcdCQoJyNidXJnZXItY29udGVudCcpLmZhZGVPdXQoZHVyYXRpb24pO1xuXHRcdFx0XHR9XG5cdFx0fSk7XG5cblx0fSkoalF1ZXJ5KTtcblx0Ly8gZW9mIGJ1cmdlciBtZW51XG5cblxuXG5cbiAgLy8gc2xpZGVyXG5cbiAgICAvL1xuICAgIGlmKCQoJ2JvZHknKS5pcygnLmpzLWJ4Jykpe1xuICAgICAgLy8gdmFyIGogPSBqUXVlcnkubm9Db25mbGljdCgpO1xuICAgICAgLy8gaihkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgJCgnI2hvbWUtc2xpZGVyJykuYnhTbGlkZXIoe1xuICAgICAgICAgICAvLyBtb2RlOiAndmVydGljYWwnLFxuICAgICAgICAgICBhdXRvOiB0cnVlLFxuICAgICAgICAgICBzcGVlZDogMTUwMCwgLy8gMTUwMFxuICAgICAgICAgICBjb250cm9sczogZmFsc2UsXG4gICAgICAgICAgIHBhdXNlOiA0MDAwLCAvLyA0MDAwXG4gICAgICAgICAgIHBhZ2VyOiBmYWxzZSxcbiAgICAgICAgICAgYXV0b0NvbnRyb2xzOiBmYWxzZVxuICAgICAgICAgfSk7XG5cbiAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIC8vIHNsaWRlciBhYm91dCBob25vcnNcbiAgICBpZigkKCdib2R5JykuaXMoJy5wYWdlLWFib3V0Jykpe1xuXG4gICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA3NjgpIHtcbiAgICAgICAgJCgnI2J4LWFib3V0LWhvbm9ycycpLmJ4U2xpZGVyKHtcbiAgICAgICAgIGF1dG86IHRydWUsXG4gICAgICAgICBzcGVlZDogMTIwMCwgLy8gMTUwMFxuICAgICAgICAgY29udHJvbHM6IGZhbHNlLFxuICAgICAgICAgcGF1c2U6IDEwMDAsIC8vIDQwMDBcbiAgICAgICAgLy8gIHBhZ2VyOiBmYWxzZSxcbiAgICAgICAgLy8gIGF1dG9Db250cm9sczogZmFsc2UsXG5cbiAgICAgICAgICBtaW5TbGlkZXM6IDUsXG4gICAgICAgICAgbWF4U2xpZGVzOiA1LFxuICAgICAgICAgIG1vdmVTbGlkZXM6IDEsXG4gICAgICAgICAgc2xpZGVXaWR0aDogMTM2LFxuICAgICAgICAgIHNsaWRlTWFyZ2luOiAzMFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDc2OCkge1xuICAgICAgICAkKCcjYngtYWJvdXQtaG9ub3JzJykuYnhTbGlkZXIoe1xuICAgICAgICAgYXV0bzogdHJ1ZSxcbiAgICAgICAgIHNwZWVkOiAxMjAwLCAvLyAxNTAwXG4gICAgICAgICBjb250cm9sczogZmFsc2UsXG4gICAgICAgICBwYXVzZTogMTAwMCwgLy8gNDAwMFxuICAgICAgICAvLyAgcGFnZXI6IGZhbHNlLFxuICAgICAgICAvLyAgYXV0b0NvbnRyb2xzOiBmYWxzZSxcblxuICAgICAgICAgIG1pblNsaWRlczogMixcbiAgICAgICAgICBtYXhTbGlkZXM6IDIsXG4gICAgICAgICAgbW92ZVNsaWRlczogMSxcbiAgICAgICAgICBzbGlkZVdpZHRoOiAxMzAsXG4gICAgICAgICAgc2xpZGVNYXJnaW46IDIwXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG5cblxuICAgICAgLy8gc2xpZGVyIGFib3V0IHBhcnRuZXJzXG4gICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gNzY4KSB7XG4gICAgICAgICQoJyNieC1hYm91dC1wYXJ0bmVycycpLmJ4U2xpZGVyKHtcbiAgICAgICAgLy8gIGF1dG86IHRydWUsXG4gICAgICAgICBzcGVlZDogMTIwMCwgLy8gMTUwMFxuICAgICAgICAgY29udHJvbHM6IGZhbHNlLFxuICAgICAgICAgcGF1c2U6IDEwMDAsIC8vIDQwMDBcbiAgICAgICAgLy8gIHBhZ2VyOiBmYWxzZSxcbiAgICAgICAgLy8gIGF1dG9Db250cm9sczogZmFsc2UsXG5cbiAgICAgICAgICBtaW5TbGlkZXM6IDIsXG4gICAgICAgICAgbWF4U2xpZGVzOiAyLFxuICAgICAgICAgIG1vdmVTbGlkZXM6IDEsXG4gICAgICAgICAgc2xpZGVXaWR0aDogMTMwLFxuICAgICAgICAgIHNsaWRlTWFyZ2luOiAyMFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY4KSB7XG4gICAgICAgICQoJyNieC1hYm91dC1wYXJ0bmVycycpLmJ4U2xpZGVyKHtcbiAgICAgICAgLy8gIGF1dG86IHRydWUsXG4gICAgICAgICBzcGVlZDogMTIwMCwgLy8gMTUwMFxuICAgICAgICAgY29udHJvbHM6IGZhbHNlLFxuICAgICAgICAgcGF1c2U6IDEwMDAsIC8vIDQwMDBcbiAgICAgICAgLy8gIHBhZ2VyOiBmYWxzZSxcbiAgICAgICAgLy8gIGF1dG9Db250cm9sczogZmFsc2UsXG5cbiAgICAgICAgICBtaW5TbGlkZXM6IDQsXG4gICAgICAgICAgbWF4U2xpZGVzOiA0LFxuICAgICAgICAgIG1vdmVTbGlkZXM6IDEsXG4gICAgICAgICAgc2xpZGVXaWR0aDogMTkyLFxuICAgICAgICAgIHNsaWRlTWFyZ2luOiAxMFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiQoXCJhI2ZhbmN5bGlua1wiKS5mYW5jeWJveCh7XG4gIC8vIGJlZm9yZVNob3c6IGZ1bmN0aW9uKCkge1xuICAvLyAgIHZhciBuZXdXaWR0aCA9IDI1MDsgLy8gc2V0IG5ldyBpbWFnZSBkaXNwbGF5IHdpZHRoXG4gIC8vICAgJChcIiNmYW5jeWxpbmsgaW1nXCIpLmNzcyh7XG4gIC8vICAgICAgIHdpZHRoICA6IG5ld1dpZHRoLFxuICAvLyAgICAgICBoZWlnaHQgOiBcImF1dG9cIlxuICAvLyAgIH0pOyAvLyBhcHBseSBuZXcgc2l6ZSB0byBpbWdcbiAgLy8gICAvLyBvcHRpb25hbGx5IDpcbiAgLy8gICAvLyBzZXQgbmV3IHZhbHVlcyBmb3IgcGFyZW50IGNvbnRhaW5lciBJRiB5b3Ugd2FudCB0byBtYXRjaCB0aGUgaW1hZ2Ugc2l6ZVxuICAvLyAgIC8vIHRoaXMud2lkdGggID0gbmV3V2lkdGg7XG4gIC8vICAgLy8gdGhpcy5oZWlnaHQgPSAkKFwiLmZhbmN5Ym94LWlubmVyIGltZ1wiKS5pbm5lckhlaWdodCgpO1xuICAvLyB9LFxuICAnaGlkZU9uQ29udGVudENsaWNrJzogdHJ1ZSxcbiAgJ3RyYW5zaXRpb25JbidcdDpcdCdlbGFzdGljJyxcbiAgJ3RyYW5zaXRpb25PdXQnXHQ6XHQnZWxhc3RpYycsXG4gICdmaXRUb1ZpZXcnXHQ6XHRmYWxzZSxcbiAgJ3NwZWVkSW4nXHRcdDpcdDYwMCxcbiAgJ3NwZWVkT3V0J1x0XHQ6XHQyMDAsXG4gICdoZWxwZXJzJyA6IHtcbiAgICAgICdvdmVybGF5JyA6IHtcbiAgICAgICAgICAnbG9ja2VkJyA6IGZhbHNlIC8vIHRyeSBjaGFuZ2luZyB0byB0cnVlIGFuZCBzY3JvbGxpbmcgYXJvdW5kIHRoZSBwYWdlXG4gICAgICB9XG4gIH0sXG4gICdvdmVybGF5U2hvdydcdDpcdGZhbHNlLFxuICAnbWF4V2lkdGgnIDogMjUwXG59KTtcblxuJChcImEjZmFuY3lsaW5rMlwiKS5mYW5jeWJveCh7XG4gICdoaWRlT25Db250ZW50Q2xpY2snOiB0cnVlLFxuICAndHJhbnNpdGlvbkluJ1x0Olx0J2VsYXN0aWMnLFxuICAndHJhbnNpdGlvbk91dCdcdDpcdCdlbGFzdGljJyxcbiAgJ2ZpdFRvVmlldydcdDpcdGZhbHNlLFxuICAnc3BlZWRJbidcdFx0Olx0NjAwLFxuICAnc3BlZWRPdXQnXHRcdDpcdDIwMCxcbiAgJ2hlbHBlcnMnIDoge1xuICAgICAgJ292ZXJsYXknIDoge1xuICAgICAgICAgICdsb2NrZWQnIDogZmFsc2UgLy8gdHJ5IGNoYW5naW5nIHRvIHRydWUgYW5kIHNjcm9sbGluZyBhcm91bmQgdGhlIHBhZ2VcbiAgICAgIH1cbiAgfSxcbiAgJ292ZXJsYXlTaG93J1x0Olx0ZmFsc2UsXG4gICdtYXhXaWR0aCcgOiAxNTBcbn0pO1xuXG5cblxuLy8g0Y3RgtC40Lwg0LzRiyDQvtGC0LrQu9GO0YfQuNC8INC/0LXRgNC10L/RgNGL0LPQuNCy0LDQvdC40LUg0L3QsNCy0LXRgNGFINGN0LrRgNCw0L3QsCDQv9C+INC60LvQuNC60LUg0L3QsCDRgdGB0YvQu9C60YNcbi8vIGZ1bmN0aW9uIGZhbmN5TmljZShlKSB7XG4vLyAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyB9XG5cblxuIC8vIGVvZiBzbGlkZXJcblxuXG5cbiAgKGZ1bmN0aW9uKCQpIHtcbiAgICBpZigkKCdib2R5JykuaXMoJy5wYWdlLWhvbWUnKSl7XG4gICAgICBuZXcgV09XKCkuaW5pdCgpO1xuICAgIH1cbiAgfSkoalF1ZXJ5KTtcblxuXG59KTtcbiJdfQ==
