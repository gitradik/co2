var lastScrollTop = 0;
let upCount = 0
let downCount = 0

document.addEventListener("scroll", function(){
  var st = window.pageYOffset || document.documentElement.scrollTop;
  var windowWidth = $(window).width();
  if (document.documentElement.scrollTop > 100 && windowWidth >= 991) {
    if (st > lastScrollTop){
      if (downCount++ >= 20) {
        $('#navbarSupportedContent').removeClass('show');
        $('#headerMenu').removeClass("header-menu-open");
        downCount = 0
      }
    } else {
      if (upCount++ > 30) {
        $('#headerMenu').addClass("header-menu-open");
        upCount = 0
      }
    }
  } else {
    $('#headerMenu').addClass("header-menu-open");
  }
  lastScrollTop = st <= 0 ? 0 : st;
}, false);

$(document).on('click', function (e){
  var menu_opened = $('#navbarSupportedContent').hasClass('show');

  if(!$(e.target).closest('#navbarSupportedContent').length &&
      !$(e.target).is('#navbarSupportedContent') &&
      menu_opened === true){
          $('#navbarSupportedContent').collapse('toggle');
  }
});

$(".input-mask-control").inputmask("+38 (999) 999-99-99");

$(".smooth-anchor").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 500, function(){
      window.location.hash = hash;
    });
  }
});

$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="./img/back.svg" /></button>',
  nextArrow: '<button type="button" class="slick-btn slick-next"><img src="./img/next.svg" /></button>',
  dots: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 499,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

const prodNavtabs = [...document.getElementsByClassName('product-nav-tabs')][0];
if (prodNavtabs) {
    $(prodNavtabs).on('shown.bs.tab', function () {
      $('.slider').slick('setPosition')
    })
}

$('.modal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})


class Tg {
  chat_id = '-285705786';
  token = '1330455183:AAE6AThknsnALEBxwJ_O9B6m4-WhbxDuJcw';
  msg = ''

  constructor(serialize){
    this.createMsg(serialize)
  }

  createMsg (serialize) {
    const obj = JSON.parse('{"' + serialize.replace(/&/g, '","').replace(/=/g,'":"') + '"}')
    Object.keys(obj).forEach(key => {
      obj[key] = decodeURI(obj[key])
      this.msg += "<b>" + key + ":" + "</b> " + obj[key] + "%0A";
    })
  }

  url () {
    return `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chat_id}&parse_mode=html&text=${this.msg}`
  }

}

function sendMsg(event) {
  event.preventDefault();
  $('#loader').addClass('loader-visible')
  const tg = new Tg($(event.target).serialize())
  $.ajax({
    type: "POST",
    url: tg.url(),
    data: {},
    success: function () {
      $('#loader').removeClass('loader-visible')
    },
    dataType: 'JSON',
    error: function() {
      $('#loader').removeClass('loader-visible')
      alert("Что-то пошло не так. Пожалуйста, попробуйте еще раз. Если проблема не исчезнет, свяжитесь с нами по адресу co2_service@ukr.net");
   }
  })
}
