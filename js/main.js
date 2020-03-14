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

$(document).scroll(function() {
  var docSrollTop = $(document).scrollTop();
  var windowWidth = $(window).width();
  if (windowWidth > 992) {
    if (docSrollTop > 25) {
      $('#headerMenu').css('display', 'none');
    } else {
      $('#headerMenu').css('display', 'flex');
    }   
  } else {
    if ($('#headerMenu').css('display') !== 'flex') {
      $('#headerMenu').css('display', 'flex');
    }
  }
});