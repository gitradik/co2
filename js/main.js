$(document).on('click', function (e){
  var menu_opened = $('#navbarSupportedContent').hasClass('show');

  if(!$(e.target).closest('#navbarSupportedContent').length &&
      !$(e.target).is('#navbarSupportedContent') &&
      menu_opened === true){
          $('#navbarSupportedContent').collapse('toggle');
  }
});

$(document).ready(function(){
  $(".input-mask-s").inputmask("+38(999) 999-99-99");
});

function changeNavBar() {
  var docSrollTop = $(document).scrollTop();
  var windowWidth = $(window).width();
  if (windowWidth > 992) {
    if (docSrollTop > 40) {
      $('#headerMenu').css('display', 'none');
    } else {
      $('#headerMenu').css('display', 'flex');
    }   
  } else {
    if ($('#headerMenu').css('display') !== 'flex') {
      $('#headerMenu').css('display', 'flex');
    }
  }
}

$(document).scroll(function() {
  changeNavBar();
});
$(window).resize(function() {
  changeNavBar();
});

// SLICK

$('.slick-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-btn slick-prev"><i class="fas fa-sort-up"></i></button>',
  nextArrow: '<button type="button" class="slick-btn slick-next"><i class="fas fa-sort-down"></i></button>',
  dots: true,
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

$('.slick-slider-2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-btn slick-prev"><i class="fas fa-sort-up"></i></button>',
  nextArrow: '<button type="button" class="slick-btn slick-next"><i class="fas fa-sort-down"></i></button>',
  dots: true,
  responsive: [
  ]
});

$('#accordion').collapse();

$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".smooth-anchor").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});