$(".input-mask-control").inputmask("+38 (999) 999-99-99");

$(".smooth-anchor").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 82
    }, 500, function(){
      window.location.hash = hash;
    });
  }
});

$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="/img/back.svg" /></button>',
  nextArrow: '<button type="button" class="slick-btn slick-next"><img src="/img/next.svg" /></button>',
  dots: true,
  infinite: true,
  speed: 500,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});