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
