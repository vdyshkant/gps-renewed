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

      // slider about partners
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

$("a#fancylink").fancybox({
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
  'overlayShow'	:	false
});

$("a#fancylink2").fancybox({
  'hideOnContentClick': true
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3d3L0RvY3VtZW50cy93b3JrLzAxX19kZXYvMDhfX2dwcy12Mi9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL2hvbWUvd3cvRG9jdW1lbnRzL3dvcmsvMDFfX2Rldi8wOF9fZ3BzLXYyL3NyYy9qcy9mYWtlXzdlOGMwNmYyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG5cbiAgKGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIGlzUGFnZUhvbWUgPSAkKCcucGFnZS1ob21lJyk7XG4gICAgLy8gaWYgKCFpc1BhZ2VIb21lKSB7XG4gICAgaWYoJCgnYm9keScpLmlzKCcuanMtbWVudScpKXtcbiAgICAgIHZhciBzdHJpbmdfMSA9ICdHUFMnO1xuICAgICAgJCgnLmxvZ29fX3RleHQnKS50ZXh0KHN0cmluZ18xKTtcbiAgICAgICQoJy5sb2dvX190ZXh0JykuZmFkZUluKDEwMCk7XG5cbiAgICAgICQoJyNtZW51JykubW91c2VlbnRlcihmdW5jdGlvbigpe1xuICAgICAgICAvLyBzaG93IGxvZ29cbiAgICAgICAgJCgnLmxvZ29fX3RleHQnKS5mYWRlT3V0KCczMDAnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBvcmlnaW5fMSA9ICdHcmFudCBQb3N0IFNlcnZpY2UnO1xuICAgICAgICAgICAgJCgnLmxvZ29fX3RleHQnKS50ZXh0KG9yaWdpbl8xKTtcblxuICAgICAgICAgICAgJCgnLmxvZ29fX3RleHQnKS5jc3MoXCJmb250LXNpemVcIiwgXCIxNnB4XCIpO1xuICAgICAgICAgICAgJCgnLmxvZ29fX3RleHQnKS5mYWRlSW4oJzMwMCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gc2hvdyBtZW51IGl0ZW1zXG4gICAgICAgICQoJy5tZW51X19zaWRlYmFyX19pdGVtX19saW5rX190ZXh0Jykuc3RvcCggdHJ1ZSwgdHJ1ZSApLmRlbGF5KDMwMCkuZmFkZUluKDMwMCk7XG4gICAgICAgIC8vIHNob3cgbWVudSBhZGRyZXNzZXNcbiAgICAgICAgJCgnLm1lbnVfX2FkZHJlc3MnKS5zdG9wKCB0cnVlLCB0cnVlICkuZGVsYXkoMzAwKS5mYWRlSW4oMzAwKTtcbiAgICAgICAgLy8gc2hvdyBtZW51IHBob25lc1xuICAgICAgICAkKCcubWVudV9fcGhvbmUnKS5zdG9wKCB0cnVlLCB0cnVlICkuZGVsYXkoMzAwKS5mYWRlSW4oMzAwKTtcbiAgICAgICAgLy8gc2hvdyBtZW51IGJvdHRvbSBidG5cbiAgICAgICAgJCgnLm1lbnVfX2J0bl9fbGluaycpLnN0b3AoIHRydWUsIHRydWUgKS5kZWxheSgzMDApLmZhZGVJbigzMDApO1xuICAgICAgICAvL1xuICAgICAgfSk7XG5cbiAgICAgICQoJyNtZW51JykubW91c2VsZWF2ZShmdW5jdGlvbigpe1xuICAgICAgICAkKCcubG9nb19fdGV4dCcpLmZhZGVPdXQoJzUwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc3RyaW5nXzEgPSAnR1BTJztcbiAgICAgICAgICAgICQoJy5sb2dvX190ZXh0JykudGV4dChzdHJpbmdfMSk7XG5cbiAgICAgICAgICAgICQoJy5sb2dvX190ZXh0JykuY3NzKFwiZm9udC1zaXplXCIsIFwiMTJweFwiKTtcbiAgICAgICAgICAgICQoJy5sb2dvX190ZXh0JykuZmFkZUluKCczMDAnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGhpZGUgbWVudSBpdGVtc1xuICAgICAgICAkKCcubWVudV9fc2lkZWJhcl9faXRlbV9fbGlua19fdGV4dCcpLnN0b3AoIHRydWUsIHRydWUgKS5mYWRlT3V0KDIwKTtcbiAgICAgICAgLy8gaGlkZSBtZW51IGFkZHJlc3Nlc1xuICAgICAgICAkKCcubWVudV9fYWRkcmVzcycpLnN0b3AoIHRydWUsIHRydWUgKS5mYWRlT3V0KDIwKTtcbiAgICAgICAgLy8gaGlkZSBtZW51IHBob25lc1xuICAgICAgICAkKCcubWVudV9fcGhvbmUnKS5zdG9wKCB0cnVlLCB0cnVlICkuZmFkZU91dCgyMCk7XG4gICAgICAgIC8vIGhpZGUgbWVudSBib3R0b20gYnRuXG4gICAgICAgICQoJy5tZW51X19idG5fX2xpbmsnKS5zdG9wKCB0cnVlLCB0cnVlICkuZmFkZU91dCgyMCk7XG4gICAgICB9KTtcbiAgICB9XG5cblx0fSkoKTtcblxuXG4gIC8vIGJ1cmdlciBtZW51XG5cdChmdW5jdGlvbigkKSB7XG5cblx0XHR2YXIgZHVyYXRpb24gPSAxMDA7XG5cblx0XHQkKCcjYnVyZ2VyJykuY2xpY2soZnVuY3Rpb24oKXtcblx0XHRcdCQoJyNidXJnZXItY29udGVudCcpLmZhZGVJbihkdXJhdGlvbik7XG5cdFx0fSk7XG5cblx0XHQvLyBoaWRlIHdoZW4gY2xpY2sgY2xvc2UgYnV0dG9uXG5cdFx0JCgnLmJ1cmdlci1uYXZfX2Nsb3NlJykuY2xpY2soZnVuY3Rpb24oKXtcblx0XHRcdCQoJyNidXJnZXItY29udGVudCcpLmZhZGVPdXQoZHVyYXRpb24pO1xuXHRcdH0pO1xuXG5cdFx0Ly8gaGlkZSBtb2RhbC1jb250ZW50IHdoZW4gY2xpY2sgb3V0IG9mIG1vZGFsLWNvbnRlbnQgYmxvY2tcblx0XHQkKCcjYnVyZ2VyLWNvbnRlbnQnKS5jbGljayhmdW5jdGlvbigpe1xuXHRcdFx0JCgnI2J1cmdlci1jb250ZW50JykuZmFkZU91dChkdXJhdGlvbik7XG5cdFx0fSk7XG5cblx0XHQvLyBoaWRlIHdoZW4gbW9kYWwtY29udGVudCBwcmVzcyBFc2MgYnV0dG9uXG5cdFx0JCgnaHRtbCBib2R5Jykub24oJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5rZXlDb2RlID09PSAyNykge1xuXHRcdFx0XHRcdFx0JCgnI2J1cmdlci1jb250ZW50JykuZmFkZU91dChkdXJhdGlvbik7XG5cdFx0XHRcdH1cblx0XHR9KTtcblxuXHR9KShqUXVlcnkpO1xuXHQvLyBlb2YgYnVyZ2VyIG1lbnVcblxuXG5cblxuICAvLyBzbGlkZXJcblxuICAgIC8vXG4gICAgaWYoJCgnYm9keScpLmlzKCcuanMtYngnKSl7XG4gICAgICAvLyB2YXIgaiA9IGpRdWVyeS5ub0NvbmZsaWN0KCk7XG4gICAgICAvLyBqKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAkKCcjaG9tZS1zbGlkZXInKS5ieFNsaWRlcih7XG4gICAgICAgICAgIC8vIG1vZGU6ICd2ZXJ0aWNhbCcsXG4gICAgICAgICAgIGF1dG86IHRydWUsXG4gICAgICAgICAgIHNwZWVkOiAxNTAwLCAvLyAxNTAwXG4gICAgICAgICAgIGNvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgICAgcGF1c2U6IDQwMDAsIC8vIDQwMDBcbiAgICAgICAgICAgcGFnZXI6IGZhbHNlLFxuICAgICAgICAgICBhdXRvQ29udHJvbHM6IGZhbHNlXG4gICAgICAgICB9KTtcblxuICAgICAgLy8gfSk7XG4gICAgfVxuXG4gICAgLy8gc2xpZGVyIGFib3V0IGhvbm9yc1xuICAgIGlmKCQoJ2JvZHknKS5pcygnLnBhZ2UtYWJvdXQnKSl7XG5cbiAgICAgICQoJyNieC1hYm91dC1ob25vcnMnKS5ieFNsaWRlcih7XG4gICAgICAgYXV0bzogdHJ1ZSxcbiAgICAgICBzcGVlZDogMTIwMCwgLy8gMTUwMFxuICAgICAgIGNvbnRyb2xzOiBmYWxzZSxcbiAgICAgICBwYXVzZTogMTAwMCwgLy8gNDAwMFxuICAgICAgLy8gIHBhZ2VyOiBmYWxzZSxcbiAgICAgIC8vICBhdXRvQ29udHJvbHM6IGZhbHNlLFxuXG4gICAgICAgIG1pblNsaWRlczogNSxcbiAgICAgICAgbWF4U2xpZGVzOiA1LFxuICAgICAgICBtb3ZlU2xpZGVzOiAxLFxuICAgICAgICBzbGlkZVdpZHRoOiAxMzYsXG4gICAgICAgIHNsaWRlTWFyZ2luOiAzMFxuICAgICAgfSk7XG5cbiAgICAgIC8vIHNsaWRlciBhYm91dCBwYXJ0bmVyc1xuICAgICAgJCgnI2J4LWFib3V0LXBhcnRuZXJzJykuYnhTbGlkZXIoe1xuICAgICAgLy8gIGF1dG86IHRydWUsXG4gICAgICAgc3BlZWQ6IDEyMDAsIC8vIDE1MDBcbiAgICAgICBjb250cm9sczogZmFsc2UsXG4gICAgICAgcGF1c2U6IDEwMDAsIC8vIDQwMDBcbiAgICAgIC8vICBwYWdlcjogZmFsc2UsXG4gICAgICAvLyAgYXV0b0NvbnRyb2xzOiBmYWxzZSxcblxuICAgICAgICBtaW5TbGlkZXM6IDQsXG4gICAgICAgIG1heFNsaWRlczogNCxcbiAgICAgICAgbW92ZVNsaWRlczogMSxcbiAgICAgICAgc2xpZGVXaWR0aDogMTkyLFxuICAgICAgICBzbGlkZU1hcmdpbjogMTBcbiAgICAgIH0pO1xuXG4gICAgfVxuXG4kKFwiYSNmYW5jeWxpbmtcIikuZmFuY3lib3goe1xuICAnaGlkZU9uQ29udGVudENsaWNrJzogdHJ1ZSxcbiAgJ3RyYW5zaXRpb25JbidcdDpcdCdlbGFzdGljJyxcbiAgJ3RyYW5zaXRpb25PdXQnXHQ6XHQnZWxhc3RpYycsXG4gICdmaXRUb1ZpZXcnXHQ6XHRmYWxzZSxcbiAgJ3NwZWVkSW4nXHRcdDpcdDYwMCxcbiAgJ3NwZWVkT3V0J1x0XHQ6XHQyMDAsXG4gICdoZWxwZXJzJyA6IHtcbiAgICAgICdvdmVybGF5JyA6IHtcbiAgICAgICAgICAnbG9ja2VkJyA6IGZhbHNlIC8vIHRyeSBjaGFuZ2luZyB0byB0cnVlIGFuZCBzY3JvbGxpbmcgYXJvdW5kIHRoZSBwYWdlXG4gICAgICB9XG4gIH0sXG4gICdvdmVybGF5U2hvdydcdDpcdGZhbHNlXG59KTtcblxuJChcImEjZmFuY3lsaW5rMlwiKS5mYW5jeWJveCh7XG4gICdoaWRlT25Db250ZW50Q2xpY2snOiB0cnVlXG59KTtcblxuLy8g0Y3RgtC40Lwg0LzRiyDQvtGC0LrQu9GO0YfQuNC8INC/0LXRgNC10L/RgNGL0LPQuNCy0LDQvdC40LUg0L3QsNCy0LXRgNGFINGN0LrRgNCw0L3QsCDQv9C+INC60LvQuNC60LUg0L3QsCDRgdGB0YvQu9C60YNcbi8vIGZ1bmN0aW9uIGZhbmN5TmljZShlKSB7XG4vLyAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyB9XG5cblxuIC8vIGVvZiBzbGlkZXJcblxuXG5cbiAgKGZ1bmN0aW9uKCQpIHtcbiAgICBpZigkKCdib2R5JykuaXMoJy5wYWdlLWhvbWUnKSl7XG4gICAgICBuZXcgV09XKCkuaW5pdCgpO1xuICAgIH1cbiAgfSkoalF1ZXJ5KTtcblxuXG59KTtcbiJdfQ==
