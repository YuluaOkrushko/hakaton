$('.btn-burger').on('click', function() {
  $('.header__nav').toggleClass('is-active');
  $("html body").toggleClass('is-unsrollable');
});
