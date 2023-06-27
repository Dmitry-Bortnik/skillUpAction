$('.index-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  fade: false,
  infinite: true,
  responsive: [{
    breakpoint: 480,
    settings: {
      arrows: false,
    }
  }]
});


$('.js-video').on('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  var popup = $('.awg-popup');
  var video = $(this).data('video');
  var iframe = '<iframe src="https://www.youtube.com/embed/' + video + '?rel=0&amp;autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  var videoBlock = $('.awg-popup').find('.awg-popup__video');
  videoBlock.html(iframe);
  popup.fadeIn();
});

$('.js-close-popup').click(function () {
  var popup = $('.awg-popup');
  var videoBlock = $('.awg-popup').find('.awg-popup__video');
  popup.fadeOut();
  videoBlock.empty();
});

$(document).ready(function () {
  $("#form-modal").submit(function () {
    $("#form-modal button").prop("disabled", true).text("Ждите...");
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(this).serialize()
    }).done(function () {
      $('#form-modal').html("<div class='thx-text'><span>Спасибо.<br>Менеджер свяжется с вами в ближайшее время</span>");
    });
    return false;
  });


});

// index partners

(function($) {
  $(function() {
    $('.create-pack--tabs').on('click', '.create-pack--tab:not(.active)', function() {
      $(this).addClass('active').siblings().removeClass('active');
      let dataCategory = $(this).attr('data-select');
      $('.create-pack .flex-col-3').hide();
      $('.create-pack .flex-col-3[data-tab='+ dataCategory +']').show();
      if (dataCategory == 'all-category') {
        $('.create-pack .flex-col-3').show(); 
      }
    });
  });
})(jQuery);

var rev = $('.rev_slider');
rev.on('init', function(event, slick, currentSlide) {
  var
    cur = $(slick.$slides[slick.currentSlide]),
    next = cur.next(),
    prev = cur.prev();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  cur.removeClass('slick-snext').removeClass('slick-sprev');
  slick.$prev = prev;
  slick.$next = next;
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  console.log('beforeChange');
  var
    cur = $(slick.$slides[nextSlide]);
  console.log(slick.$prev, slick.$next);
  slick.$prev.removeClass('slick-sprev');
  slick.$next.removeClass('slick-snext');
  next = cur.next(),
    prev = cur.prev();
  prev.prev();
  prev.next();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  slick.$prev = prev;
  slick.$next = next;
  cur.removeClass('slick-next').removeClass('slick-sprev');
});

rev.slick({
  speed: 500,
  arrows: true,
  dots: true,
  focusOnSelect: true,
  prevArrow: '<button class="slick-prev"> prev</button>',
  nextArrow: '<button class="slick-next"> next</button>',
  infinite: true,
  centerMode: true,
  slidesPerRow: 2,
  slidesToShow: 2,
  slidesToScroll: 5,
  centerPadding: '0',
  swipe: true,
  customPaging: function(slider, i) {
    return '';
  },
  /*infinite: false,*/
});

$( "#change-connect, #change-connect2" ).on( "change", function() {
  let thisChange = $(this).find(':selected').attr('data-placeholder');
  $('#connect-input').attr('placeholder',thisChange);
  $('#connect-input2').attr('placeholder',thisChange);
} );

$("body").on("click", ".toggle-data--title", function () {
  $(this).toggleClass('active');
  $(this).next().slideToggle();
})

$("body").on("click", ".cart-info__btn", function () {
  $('.cart-mini').show();
  $('.cart-info').hide();
  return false;
})

$("body").on("click", ".modal-cart__back", function () {
  $('.modal-def-cart').hide();
  return false;
})

$("body").on("click", ".cart-mini__btn", function () {
  $('.modal-def-cart').show();
  return false;
})

$('.scrollTo').on('click', function() {
  $('.modal-def-cart').hide();
  let href = $(this).attr('href');

  $('html, body').animate({
      scrollTop: $(href).offset().top
  }, {
      duration: 370,   
      easing: "linear" 
  });

  return false;
});

//

$("body").on("click", ".cart-mini__close", function () {
  $('.cart-mini').hide();
  $('.cart-info').show();
  return false;
});

$.fn.checkGender = function() {
  var selectedValue = $(this).val();
  if (selectedValue === '') {
    $(this).css('color', '#B7B7B7');
  } 
  else {
    $(this).css('color', '#fff');
  }
}

$(document).ready(function() {
  $('select[name=your-channel]').checkGender()
  $('select[name=your-channel]').change(function(){
      $(this).checkGender();
  });
});

function checkWindowWidth() {
  if (window.innerWidth < 1025) {
    $(".logos-parnters__list").slick({
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
  if (window.innerWidth < 480) {
    $(".about-free--list").slick({
      dots: false,
      slidesToShow: 1,
      infinite: false,
      slidesToScroll: 1,
      arrows: false,
      variableWidth: true,
    });
  }
}

checkWindowWidth();

window.addEventListener('resize', checkWindowWidth);

$(".main-container--courses").slick({
  dots: false,
  slidesToShow: 1,
  infinite: false,
  slidesToScroll: 1,
  arrows: false,
  variableWidth: true,
  // responsive: [
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }
  // ]
});