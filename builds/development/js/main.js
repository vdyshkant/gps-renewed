(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$( document ).ready(function() {


  (function() {

    if (!$('.menu-home')) {
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

  $('.bxslider').bxSlider({
    // mode: 'vertical',
    auto: true,
    speed: 500, // 1500
    controls: false,
    pause: 1000, // 4000
    pager: false,
    autoControls: false
  });


  // eof slider

});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3d3L0RvY3VtZW50cy93b3JrLzAxX19kZXYvMDhfX2dwcy12Mi9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL2hvbWUvd3cvRG9jdW1lbnRzL3dvcmsvMDFfX2Rldi8wOF9fZ3BzLXYyL3NyYy9qcy9mYWtlX2U4ZTIzZTVhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKSB7XG5cblxuICAoZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAoISQoJy5tZW51LWhvbWUnKSkge1xuICAgICAgdmFyIHN0cmluZ18xID0gJ0dQUyc7XG4gICAgICAkKCcubG9nb19fdGV4dCcpLnRleHQoc3RyaW5nXzEpO1xuICAgICAgJCgnLmxvZ29fX3RleHQnKS5mYWRlSW4oMTAwKTtcblxuICAgICAgJCgnI21lbnUnKS5tb3VzZWVudGVyKGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIHNob3cgbG9nb1xuICAgICAgICAkKCcubG9nb19fdGV4dCcpLmZhZGVPdXQoJzMwMCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIG9yaWdpbl8xID0gJ0dyYW50IFBvc3QgU2VydmljZSc7XG4gICAgICAgICAgICAkKCcubG9nb19fdGV4dCcpLnRleHQob3JpZ2luXzEpO1xuXG4gICAgICAgICAgICAkKCcubG9nb19fdGV4dCcpLmNzcyhcImZvbnQtc2l6ZVwiLCBcIjE2cHhcIik7XG4gICAgICAgICAgICAkKCcubG9nb19fdGV4dCcpLmZhZGVJbignMzAwJyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBzaG93IG1lbnUgaXRlbXNcbiAgICAgICAgJCgnLm1lbnVfX3NpZGViYXJfX2l0ZW1fX2xpbmtfX3RleHQnKS5zdG9wKCB0cnVlLCB0cnVlICkuZGVsYXkoMzAwKS5mYWRlSW4oMzAwKTtcbiAgICAgICAgLy8gc2hvdyBtZW51IGFkZHJlc3Nlc1xuICAgICAgICAkKCcubWVudV9fYWRkcmVzcycpLnN0b3AoIHRydWUsIHRydWUgKS5kZWxheSgzMDApLmZhZGVJbigzMDApO1xuICAgICAgICAvLyBzaG93IG1lbnUgcGhvbmVzXG4gICAgICAgICQoJy5tZW51X19waG9uZScpLnN0b3AoIHRydWUsIHRydWUgKS5kZWxheSgzMDApLmZhZGVJbigzMDApO1xuICAgICAgICAvLyBzaG93IG1lbnUgYm90dG9tIGJ0blxuICAgICAgICAkKCcubWVudV9fYnRuX19saW5rJykuc3RvcCggdHJ1ZSwgdHJ1ZSApLmRlbGF5KDMwMCkuZmFkZUluKDMwMCk7XG4gICAgICAgIC8vXG4gICAgICB9KTtcblxuICAgICAgJCgnI21lbnUnKS5tb3VzZWxlYXZlKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJy5sb2dvX190ZXh0JykuZmFkZU91dCgnNTAnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzdHJpbmdfMSA9ICdHUFMnO1xuICAgICAgICAgICAgJCgnLmxvZ29fX3RleHQnKS50ZXh0KHN0cmluZ18xKTtcblxuICAgICAgICAgICAgJCgnLmxvZ29fX3RleHQnKS5jc3MoXCJmb250LXNpemVcIiwgXCIxMnB4XCIpO1xuICAgICAgICAgICAgJCgnLmxvZ29fX3RleHQnKS5mYWRlSW4oJzMwMCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gaGlkZSBtZW51IGl0ZW1zXG4gICAgICAgICQoJy5tZW51X19zaWRlYmFyX19pdGVtX19saW5rX190ZXh0Jykuc3RvcCggdHJ1ZSwgdHJ1ZSApLmZhZGVPdXQoMjApO1xuICAgICAgICAvLyBoaWRlIG1lbnUgYWRkcmVzc2VzXG4gICAgICAgICQoJy5tZW51X19hZGRyZXNzJykuc3RvcCggdHJ1ZSwgdHJ1ZSApLmZhZGVPdXQoMjApO1xuICAgICAgICAvLyBoaWRlIG1lbnUgcGhvbmVzXG4gICAgICAgICQoJy5tZW51X19waG9uZScpLnN0b3AoIHRydWUsIHRydWUgKS5mYWRlT3V0KDIwKTtcbiAgICAgICAgLy8gaGlkZSBtZW51IGJvdHRvbSBidG5cbiAgICAgICAgJCgnLm1lbnVfX2J0bl9fbGluaycpLnN0b3AoIHRydWUsIHRydWUgKS5mYWRlT3V0KDIwKTtcbiAgICAgIH0pO1xuICAgIH1cblxuXHR9KSgpO1xuXG5cbiAgLy8gYnVyZ2VyIG1lbnVcblx0KGZ1bmN0aW9uKCQpIHtcblxuXHRcdHZhciBkdXJhdGlvbiA9IDEwMDtcblxuXHRcdCQoJyNidXJnZXInKS5jbGljayhmdW5jdGlvbigpe1xuXHRcdFx0JCgnI2J1cmdlci1jb250ZW50JykuZmFkZUluKGR1cmF0aW9uKTtcblx0XHR9KTtcblxuXHRcdC8vIGhpZGUgd2hlbiBjbGljayBjbG9zZSBidXR0b25cblx0XHQkKCcuYnVyZ2VyLW5hdl9fY2xvc2UnKS5jbGljayhmdW5jdGlvbigpe1xuXHRcdFx0JCgnI2J1cmdlci1jb250ZW50JykuZmFkZU91dChkdXJhdGlvbik7XG5cdFx0fSk7XG5cblx0XHQvLyBoaWRlIG1vZGFsLWNvbnRlbnQgd2hlbiBjbGljayBvdXQgb2YgbW9kYWwtY29udGVudCBibG9ja1xuXHRcdCQoJyNidXJnZXItY29udGVudCcpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdFx0XHQkKCcjYnVyZ2VyLWNvbnRlbnQnKS5mYWRlT3V0KGR1cmF0aW9uKTtcblx0XHR9KTtcblxuXHRcdC8vIGhpZGUgd2hlbiBtb2RhbC1jb250ZW50IHByZXNzIEVzYyBidXR0b25cblx0XHQkKCdodG1sIGJvZHknKS5vbigna2V5dXAnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG5cdFx0XHRcdFx0XHQkKCcjYnVyZ2VyLWNvbnRlbnQnKS5mYWRlT3V0KGR1cmF0aW9uKTtcblx0XHRcdFx0fVxuXHRcdH0pO1xuXG5cdH0pKGpRdWVyeSk7XG5cdC8vIGVvZiBidXJnZXIgbWVudVxuXG5cbiAgLy8gc2xpZGVyXG5cbiAgJCgnLmJ4c2xpZGVyJykuYnhTbGlkZXIoe1xuICAgIC8vIG1vZGU6ICd2ZXJ0aWNhbCcsXG4gICAgYXV0bzogdHJ1ZSxcbiAgICBzcGVlZDogNTAwLCAvLyAxNTAwXG4gICAgY29udHJvbHM6IGZhbHNlLFxuICAgIHBhdXNlOiAxMDAwLCAvLyA0MDAwXG4gICAgcGFnZXI6IGZhbHNlLFxuICAgIGF1dG9Db250cm9sczogZmFsc2VcbiAgfSk7XG5cblxuICAvLyBlb2Ygc2xpZGVyXG5cbn0pO1xuIl19
