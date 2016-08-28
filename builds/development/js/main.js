(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$( document ).ready(function() {


  (function() {



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


});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3d3L0RvY3VtZW50cy93b3JrLzAxX19kZXYvMDhfX2dwcy12Mi9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL2hvbWUvd3cvRG9jdW1lbnRzL3dvcmsvMDFfX2Rldi8wOF9fZ3BzLXYyL3NyYy9qcy9mYWtlXzQyNWYxNWZjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG5cbiAgKGZ1bmN0aW9uKCkge1xuXG5cblxuICAgIHZhciBzdHJpbmdfMSA9ICdHUFMnO1xuICAgICQoJy5sb2dvX190ZXh0JykudGV4dChzdHJpbmdfMSk7XG4gICAgJCgnLmxvZ29fX3RleHQnKS5mYWRlSW4oMTAwKTtcblxuICAgICQoJyNtZW51JykubW91c2VlbnRlcihmdW5jdGlvbigpe1xuICAgICAgLy8gc2hvdyBsb2dvXG4gICAgICAkKCcubG9nb19fdGV4dCcpLmZhZGVPdXQoJzMwMCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBvcmlnaW5fMSA9ICdHcmFudCBQb3N0IFNlcnZpY2UnO1xuICAgICAgICAgICQoJy5sb2dvX190ZXh0JykudGV4dChvcmlnaW5fMSk7XG5cbiAgICAgICAgICAkKCcubG9nb19fdGV4dCcpLmNzcyhcImZvbnQtc2l6ZVwiLCBcIjE2cHhcIik7XG4gICAgICAgICAgJCgnLmxvZ29fX3RleHQnKS5mYWRlSW4oJzMwMCcpO1xuICAgICAgfSk7XG4gICAgICAvLyBzaG93IG1lbnUgaXRlbXNcbiAgICAgICQoJy5tZW51X19zaWRlYmFyX19pdGVtX19saW5rX190ZXh0Jykuc3RvcCggdHJ1ZSwgdHJ1ZSApLmRlbGF5KDMwMCkuZmFkZUluKDMwMCk7XG4gICAgICAvLyBzaG93IG1lbnUgYWRkcmVzc2VzXG4gICAgICAkKCcubWVudV9fYWRkcmVzcycpLnN0b3AoIHRydWUsIHRydWUgKS5kZWxheSgzMDApLmZhZGVJbigzMDApO1xuICAgICAgLy8gc2hvdyBtZW51IHBob25lc1xuICAgICAgJCgnLm1lbnVfX3Bob25lJykuc3RvcCggdHJ1ZSwgdHJ1ZSApLmRlbGF5KDMwMCkuZmFkZUluKDMwMCk7XG4gICAgICAvLyBzaG93IG1lbnUgYm90dG9tIGJ0blxuICAgICAgJCgnLm1lbnVfX2J0bl9fbGluaycpLnN0b3AoIHRydWUsIHRydWUgKS5kZWxheSgzMDApLmZhZGVJbigzMDApO1xuICAgICAgLy9cbiAgICB9KTtcbiAgICAkKCcjbWVudScpLm1vdXNlbGVhdmUoZnVuY3Rpb24oKXtcbiAgICAgICQoJy5sb2dvX190ZXh0JykuZmFkZU91dCgnNTAnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgc3RyaW5nXzEgPSAnR1BTJztcbiAgICAgICAgICAkKCcubG9nb19fdGV4dCcpLnRleHQoc3RyaW5nXzEpO1xuXG4gICAgICAgICAgJCgnLmxvZ29fX3RleHQnKS5jc3MoXCJmb250LXNpemVcIiwgXCIxMnB4XCIpO1xuICAgICAgICAgICQoJy5sb2dvX190ZXh0JykuZmFkZUluKCczMDAnKTtcbiAgICAgIH0pO1xuICAgICAgLy8gaGlkZSBtZW51IGl0ZW1zXG4gICAgICAkKCcubWVudV9fc2lkZWJhcl9faXRlbV9fbGlua19fdGV4dCcpLnN0b3AoIHRydWUsIHRydWUgKS5mYWRlT3V0KDIwKTtcbiAgICAgIC8vIGhpZGUgbWVudSBhZGRyZXNzZXNcbiAgICAgICQoJy5tZW51X19hZGRyZXNzJykuc3RvcCggdHJ1ZSwgdHJ1ZSApLmZhZGVPdXQoMjApO1xuICAgICAgLy8gaGlkZSBtZW51IHBob25lc1xuICAgICAgJCgnLm1lbnVfX3Bob25lJykuc3RvcCggdHJ1ZSwgdHJ1ZSApLmZhZGVPdXQoMjApO1xuICAgICAgLy8gaGlkZSBtZW51IGJvdHRvbSBidG5cbiAgICAgICQoJy5tZW51X19idG5fX2xpbmsnKS5zdG9wKCB0cnVlLCB0cnVlICkuZmFkZU91dCgyMCk7XG5cbiAgICB9KTtcblx0fSkoKTtcblxuXG4gIC8vIGJ1cmdlciBtZW51XG5cdChmdW5jdGlvbigkKSB7XG5cblx0XHR2YXIgZHVyYXRpb24gPSAxMDA7XG5cblx0XHQkKCcjYnVyZ2VyJykuY2xpY2soZnVuY3Rpb24oKXtcblx0XHRcdCQoJyNidXJnZXItY29udGVudCcpLmZhZGVJbihkdXJhdGlvbik7XG5cdFx0fSk7XG5cblx0XHQvLyBoaWRlIHdoZW4gY2xpY2sgY2xvc2UgYnV0dG9uXG5cdFx0JCgnLmJ1cmdlci1uYXZfX2Nsb3NlJykuY2xpY2soZnVuY3Rpb24oKXtcblx0XHRcdCQoJyNidXJnZXItY29udGVudCcpLmZhZGVPdXQoZHVyYXRpb24pO1xuXHRcdH0pO1xuXG5cdFx0Ly8gaGlkZSBtb2RhbC1jb250ZW50IHdoZW4gY2xpY2sgb3V0IG9mIG1vZGFsLWNvbnRlbnQgYmxvY2tcblx0XHQkKCcjYnVyZ2VyLWNvbnRlbnQnKS5jbGljayhmdW5jdGlvbigpe1xuXHRcdFx0JCgnI2J1cmdlci1jb250ZW50JykuZmFkZU91dChkdXJhdGlvbik7XG5cdFx0fSk7XG5cblx0XHQvLyBoaWRlIHdoZW4gbW9kYWwtY29udGVudCBwcmVzcyBFc2MgYnV0dG9uXG5cdFx0JCgnaHRtbCBib2R5Jykub24oJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5rZXlDb2RlID09PSAyNykge1xuXHRcdFx0XHRcdFx0JCgnI2J1cmdlci1jb250ZW50JykuZmFkZU91dChkdXJhdGlvbik7XG5cdFx0XHRcdH1cblx0XHR9KTtcblxuXHR9KShqUXVlcnkpO1xuXHQvLyBlb2YgYnVyZ2VyIG1lbnVcblxuXG59KTtcbiJdfQ==
