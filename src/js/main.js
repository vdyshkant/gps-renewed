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



	if($('body').is('.page-about')){

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

  } // eof body.is






// DAte PICKER
$(document).ready(function() {
	if($('body').is('.page-terms')){

    // locale
    	$.fn.fdatepicker.dates['ru'] = {
    		days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    		daysShort: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб", "Вск"],
    		daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    		months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    		monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    		today: "Сегодня"
    	};
    // eof locale


    var tempDate = new Date(), now = new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate(), 0, 0, 0, 0);

    $('#datePickInput').fdatepicker({
      onRender: function (date) {
        return date.valueOf < now.valueOf() ? 'disabled' : '';
      },
      language: 'ru',
      format: 'dd-dd-yyyy',
      startDate: new Date(),
      weekStart: 1
    });



    // main code





    $('.btn.btn-form.btn--terms').click(function(event) {
      event.preventDefault();

      var firstSelect = $('select.js-de-sender option:selected').val();
        // console.log(firstSelect);
      var secondSelect = $('select.js-de-recipient option:selected').val();
        // console.log(secondSelect);
      var deliveryMode = $('select.js-de-howFast option:selected').val();
      deliveryMode = parseFloat(deliveryMode);

      var output =  calculateDeliveyTerm(firstSelect, secondSelect, deliveryMode);


        // console.log('click triggered');



  // console.warn('after func work "output" var === ' + output);
      // console.log(output + ' дней будет занимать вся суета с перевозкой вашего барахла');

      var isHidden;

      if (output) {


        var deliveryRange = output.split('-');
          // console.log('после изъятия с output, deliveryRange == ' + deliveryRange);

          // moment.js

          var sendDate = $('#datePickInput').val().split('-')
            , sendDay = parseInt(sendDate[1])
            , sendMonth = parseInt(sendDate[0])-1
            , sendYear = parseInt(sendDate[2]);




          // eof moment.js





        // output = output + ' дней будет занимать вся суета с перевозкой вашего барахла';


        if ($('#datePickInput').val()) {

          if (deliveryRange.length > 1) {
            // output = 'Перевозка будет занимать от ' + deliveryRange[0] + ' до ' + deliveryRange[1] + ' дней.';
            var fromDate = moment().year(sendYear).month(sendMonth).date(sendDay).add(deliveryRange[0], 'day').format('DD-MM-YYYY')
              , toDate = moment().year(sendYear).month(sendMonth).date(sendDay).add(deliveryRange[1], 'day').format('DD-MM-YYYY');

            output = 'Ожидайте посылку в период с ' + fromDate + ' по ' + toDate + '.';
          } else {
            // deliveryRange = parseFloat(deliveryRange);
            // console.log('после parseFloat(deliveryRange), deliveryRange == ' + deliveryRange);
            console.log('после parseFloat[0] == ' + deliveryRange[0]);

            toDate = moment().year(sendYear).month(sendMonth).date(sendDay).add(deliveryRange[0], 'day').format('DD-MM-YYYY');
            console.log(deliveryRange[0]);
            output = 'Ожидайте посылку ' + toDate + '.';
            // switch(deliveryRange) {
            //   case 1:  // if (x === 'value1')
            //     // toDate = 'Перевозка будет занимать ' + deliveryRange + ' день.';
            //
            //
            //
            //     break;
            //
            //   case 2:  // if (x === 'value2')
            //
            //   case 3:  // if (x === 'value3')
            //
            //   case 4:  // if (x === 'value4')
            //     output = 'Перевозка будет занимать ' + deliveryRange + ' дня.';
            //     break;
            //
            //   case 5:  // if (x === 'value5')
            //
            //   case 6:  // if (x === 'value6')
            //
            //   case 7:  // if (x === 'value7')
            //
            //   case 8:  // if (x === 'value8')
            //
            //   case 9:  // if (x === 'value9')
            //
            //   case 10:  // if (x === 'value10')
            //     output = 'Перевозка будет занимать ' + deliveryRange + ' дней.';
            //     break;
            //   default:
            //
            //
            // }

          }



          // var output = 'Ожидайте посылку в период с ' + fromDate + ' по ' + toDate;
          // console.log(output)
        } else {
          output = 'Пожалуйста, проверьте правильность введенных значений!';
        }


        if ($('.js-de-output').css('opacity') == 0) {
          isHidden = true;
        } else {
          isHidden = false;
        }

        if (isHidden) {
          // console.log('isHidden = true;');
          // console.log(isHidden);

          $('.js-de-content').html(output);
          $('.js-de-output').fadeTo( "fast", 1 );
          $('.js-de-content').fadeTo( "fast", 1 );
          isHidden = false;
          // console.log(isHidden + ' // after присваивание');
        } else {
          // console.log('isHidden = false;');
          // console.log(isHidden);

          $('.js-de-content').fadeTo( "fast", 0, function() {
            // $('.js-de-content').html(output).fadeTo('fast', 1);
            $(this).html(output).fadeTo('fast', 1);
          } );

        }


      } else {

        if ($('.js-de-output').css('opacity') == 0) {
          isHidden = true;
        } else {
          isHidden = false;
        }

        output = 'Пожалуйста, проверьте правильность введенных значений!';
        if (isHidden) {
          $('.js-de-content').html(output);
          $('.js-de-output').fadeTo( "fast", 1 );
          $('.js-de-content').fadeTo( "fast", 1 );

          isHidden = false;
        } else {
          $('.js-de-content').fadeTo( "fast", 0, function() {
            // $('.js-de-content').html(output).fadeTo('fast', 1);
            $(this).html(output).fadeTo('fast', 1);
          } );
        }

      }




    }); // eof onclick




    // eof main code



  } // eof body.is
}); // eof ready


function calculateDeliveyTerm(select_1, select_2, deliveryMode) {



  var gorod_from = select_1,
      gorod_to = select_2,

      arr1 = [

        ['', '1-2', '1-2', '1', '1-2', '2-4', '1-2', '1-2', '1', '1', '1-2', '1-2', '1-2', '1-2', '1-2', '1-2', '2-3', '1-2', '1-2', '1-3', '1-2', '1-2'],
        ['1-2', '', '1-3', '1-2', '1-2', '2-4', '3-4', '3-4', '2-3', '3-4', '3-4', '2-3', '3-4', '2-3', '2-3', '2-3', '2-3', '3-4', '2-4', '1-2', '2-3', '3-4'],
        ['1-2', '2-3', '', '1-2', '2-3', '2-4', '3-4', '3-4', '2-3', '2-3', '3-4', '2-3', '3-4', '3-4', '3-4', '3-4', '3-4', '2-3', '2-4', '2-3', '2-3', '3-4'],
        ['1-2', '1-2', '1-2', '', '1-2', '2-3', '1-2', '2-3', '2-3', '2-3', '2-3', '2-3', '2-3', '2-3', '2-3', '2-3', '1-2', '1-2', '1-2', '2-3', '1-2', '2-3'],
        ['1-2', '1-2', '1-2', '1-2', '', '2-4', '3-4', '3-4', '2-3', '2-3', '2-3', '2-3', '2-3', '2-3', '2-3', '3-4', '2-3', '2-3', '2-4', '1-2', '2-3', '3-4'],
        ['2-4', '2-4', '2-4', '2-3', '2-4', '', '3-4', '3-4', '2-4', '3-4', '3-4', '2-4', '3-4', '3-4', '3-4', '3-4', '3-4', '3-4', '3-4', '1-2', '3-4', '3-5'],
        ['1-2', '2-3', '2-3', '1-2', '2-3', '3-4', '', '2-3', '1-2', '2-3', '3', '3', '3', '3', '3', '3', '3', '3-4', '2-3', '3-4', '2-3', '3-4'],
        ['1-2', '3-4', '3-4', '2-3', '3-4', '4', '3', '', '1-2', '2-3', '2-3', '2-3', '3-4', '2-3', '2-3', '3-4', '2-3', '2-3', '3', '3-4', '2-3', '3-4'],
        ['1-2', '3-4', '3-4', '1-2', '3-4', '3-4', '1-2', '1-2', '', '1-2', '1-2', '3-4', '1-2', '1-2', '1-2', '1-2', '2-3', '2-3', '1', '3-4', '2-3', '2-3'],
        ['1', '1-2', '1-3', '1-2', '1-2', '4', '2-3', '1-3', '1-2', '', '1-2', '2-3', '1-2', '1-2', '1', '1-3', '2-3', '1-3', '2-3', '1-3', '1-3', '2-3'],
        ['1-2', '3-4', '3-4', '2-3', '2-3', '4', '3-4', '2-3', '1-2', '1-2', '', '2-3', '3-4', '2-3', '2-3', '3-4', '3-4', '2-3', '2-3', '3-4', '2-3', '3-4'],
        ['1-2', '2-3', '2-3', '1-2', '2-3', '4', '3-4', '3-4', '1-2', '2-3', '2-3', '', '3-4', '2-3', '3-4', '2-3', '2-3', '1-2', '3-4', '2-3', '1-2', '4'],
        ['1-2', '3-4', '3-4', '1-2', '3-4', '4', '3-4', '4-5', '2-3', '2-3', '3-4', '3-4', '', '1-2', '3-4', '1-2', '3-4', '3-4', '3-4', '3-4', '3-4', '4'],
        ['1-2', '3-4', '3-4', '1-2', '3-4', '4', '3', '2-3', '1-2', '1-2', '2-3', '3-4', '1-2', '', '1-2', '1-2', '3-4', '3-4', '3', '3-4', '3-4', '1-2'],
        ['1-2', '3-4', '3-4', '2-3', '3-4', '4', '3-4', '3-4', '2-3', '1-2', '2-3', '3-4', '3-4', '2-3', '', '3-4', '3-4', '2-4', '3-4', '3-4', '2-4', '3'],
        ['1-2', '2-3', '2-3', '1-2', '2-3', '4', '3-4', '4-5', '3-4', '3-4', '3-4', '3-4', '1-2', '1-2', '3-4', '', '3-4', '3-4', '3-4', '3-4', '3-4', '3'],
        ['2-3', '2-3', '2-3', '1-2', '2-3', '4', '2-3', '2-3', '2-3', '3-4', '3-4', '2-3', '2-3', '2-3', '3-4', '2-3', '', '2-3', '3', '3-4', '2-3', '3-4'],
        ['1-2', '1-2', '1-2', '1-2', '1-2', '4', '2-3', '3-5', '2-3', '2-3', '2-3', '1-2', '2-3', '2-3', '2-3', '3-4', '1-2', '', '3', '2-3', '1-2', '3'],
        ['1-2', '3-4', '3-4', '1-3', '3-4', '4', '1-3', '1-3', '1', '2-3', '2-3', '3-4', '3-4', '3', '3', '3-4', '3', '3-4', '', '3-4', '3', '3'],
        ['1-3', '2-3', '1-2', '1-3', '1-2', '1-2', '3-4', '3-4', '3-4', '3-4', '3-4', '3-4', '3-4', '3-4', '3-4', '3-4', '3-4', '2-3', '3-4', '', '3-4', '3-4'],
        ['1-2', '2-3', '2-3', '1-2', '2-3', '3-4', '3', '3-4', '1-2', '2-3', '2-3', '1-2', '2-3', '2-3', '3-4', '3-4', '2-3', '1-2', '3', '2-3', '', '3-4'],
        ['1-2', '3-4', '3-4', '2-3', '3-4', '3-5', '3-4', '4-5', '2-3', '3-4', '3-4', '3-4', '3-4', '1', '3-4', '3', '3', '3-4', '3-4', '3-4', '3-4', '']
      ],

      arr2 = [
        ['', '8-12', '3-6', '3-4', '8-10', '6-8', '3-4', '3-4', '2-3', '2-3', '2-3', '5-7', '4-5', '2-3', '2-3', '4-5', '5-6', '3-4', '3', '5-7', '5-6', '3-4'],
        ['5-6', '', '4-5', '8-10', '3-4', '6-8', '11', '11', '9-10', '12', '12', '7-9', '12', '12', '12', '12', '10', '7-9', '9-10', '5-7', '6-8', '12'],
        ['3-7', '5-6', '', '5-7', '4-6', '4-5', '8-9', '8-9', '7-8', '6-8', '7-9', '4-5', '8-9', '7-9', '6-8', '11', '6-8', '5-6', '7-9', '3-4', '4-5', '8-9'],
        ['4-5', '7-9', '4-7', '', '7-8', '7-9', '3-4', '5-7', '3-5', '4-5', '5-7', '4-5', '4-5', '5-7', '4-5', '5-6', '2-3', '2-3', '3-5', '7-9', '2-3', '6-8'],
        ['10', '4-5', '3-4', '7-8', '', '5-6', '10', '10', '7-8', '8-9', '10', '6-8', '10', '10', '10', '10', '8-9', '6-8', '8-9', '4-5', '6-8', '10'],
        ['8-9', '5-6', '4-5', '8-9', '4-5', '', '8-9', '8-9', '7-9', '7-9', '8-9', '4-5', '11', '7-9', '7-9', '11', '8-9', '7-8', '7-9', '1-2', '7-8', '10'],
        ['3-4', '8-9', '5-7', '3-4', '8-9', '8-9', '', '5-6', '2-3', '5-6', '6-8', '6-8', '6-8', '6-8', '6-7', '6-8', '4-5', '4-6', '3-4', '8-9', '4-6', '7-9'],
        ['3-4', '12', '6-9', '5-7', '11', '12', '3-4', '', '2-3', '4-5', '4-5', '6-8', '5-7', '4-5', '4-5', '6-8', '5-6', '5-6', '3-4', '11', '5-6', '4-6'],
        ['2-3', '11', '5-8', '3-5', '10', '11', '2-3', '2-3', '', '3-4', '3-4', '5-7', '5-6', '3-4', '3-4', '7-8', '4-5', '4-5', '3-4', '10', '4-5', '3-4'],
        ['2-3', '12', '6-8', '4-5', '10', '10', '4-5', '4-5', '3-4', '', '3-4', '6-7', '5-7', '3-5', '2-3', '6-8', '5-6', '5-6', '3-4', '8-9', '5-6', '3-5'],
        ['2-3', '12', '7-9', '5-7', '10', '10', '4-5', '4-5', '3-4', '3-4', '', '7-8', '7-9', '4-5', '3-4', '8-9', '6-8', '6-8', '3-4', '8-9', '6-8', '4-5'],
        ['5-7', '8-9', '5-7', '3-4', '6-8', '10', '5-6', '5-6', '4-5', '5-6', '7-8', '', '5-7', '5-7', '5-6', '6-8', '5-6', '3-4', '5-6', '8-9', '2-3', '5-7'],
        ['4-6', '12', '8-9', '4-5', '10', '11', '6-7', '6-8', '5-7', '5-7', '7-9', '6-8', '', '6-7', '6-8', '2-3', '5-6', '6-7', '5-7', '11', '6-7', '6-7'],
        ['2-3', '12', '12', '5-7', '12', '12', '5-6', '4-5', '3-4', '3-4', '4-5', '7-8', '5-6', '', '3-4', '3-4', '6-8', '6-8', '3-5', '12', '6-8', '2-3'],
        ['2-3', '11', '5-8', '4-5', '10', '11', '5-6', '4-6', '3-4', '2-3', '3-4', '6-9', '8-9', '4-5', '', '8-9', '5-7', '6-8', '3-5', '10', '6-8', '4-5'],
        ['4-5', '12', '11', '4-5', '11', '13', '6-7', '7-9', '6-8', '6-8', '7-9', '7-9', '2-3', '3-4', '6-8', '', '5-7', '5-7', '6-8', '12', '5-7', '3-5'],
        ['3-5', '8-9', '4-7', '2', '6-8', '10', '3-4', '4-5', '4-5', '4-5', '5-7', '4-5', '4-6', '5-7', '4-6', '4-6', '', '3-5', '4-5', '7-9', '3-5', '5-7'],
        ['3-4', '8-10', '6-8', '2-3', '8-9', '10', '4-6', '5-6', '5-6', '5-6', '6-8', '3-4', '5-6', '6-7', '5-6', '5-7', '3-4', '', '5-6', '10', '2', '5-7'],
        ['3', '11', '7-9', '3-5', '10', '11', '3', '3', '1-2', '3-4', '3-4', '5-7', '5-6', '3-4', '3-4', '7-8', '4-5', '4-5', '', '10', '4-5', '3-4'],
        ['7-8', '3-5', '2-3', '8-9', '2-4', '1-2', '8-9', '8-9', '6-9', '6-9', '7-9', '3-5', '11', '6-9', '6-9', '11', '9-10', '5-7', '6-9', '', '5-7', '7-9'],
        ['4-6', '7-8', '4-6', '2-3', '6-8', '8-9', '4-6', '4-6', '4-6', '5-6', '6-8', '2-4', '6-7', '7-8', '6-7', '7-8', '3-4', '1-2', '4-6', '6-7', '', '7-8'],
        ['2-4', '12', '12', '5-7', '12', '12', '5-6', '4-5', '3-4', '3-4', '4-5', '7-8', '5-6', '1-2', '3-4', '3-4', '6-8', '6-8', '3-5', '12', '6-8', '']
      ];

    var firstSelect = $('select.js-de-sender option:selected').val();

    if (deliveryMode === 0) {
      if( gorod_from !== gorod_to ){
        return arr1[gorod_from][gorod_to];
      }
      else{
        // console.log(gorod_from);
        // console.log(gorod_to);
        // console.log(deliveryMode);
        return false;
      }
    } else if (deliveryMode === 1) {
      if( gorod_from !== gorod_to ){
        return arr2[gorod_from][gorod_to];
      }
      else{
        return false;
      }
    }



} // eof function declaration
// EOF calculator




// DAte PICKER eof

// этим мы отключим перепрыгивание наверх экрана по клике на ссылку
// function fancyNice(e) {
//    e.preventDefault();
// }


 // eof slider



  // (function($) {
  //   if($('body').is('.page-home')){
  //     new WOW().init();
  //   }
  // })(jQuery);


});
