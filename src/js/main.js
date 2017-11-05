var site = {

  init: function() {
    site.registerEvents();
  },
  registerEvents: function() {
    $('.back-to-top').on('click', site.scrollToTop);
  },
  scrollToTop: function() {
    $('body').animate({scrollTop: 0}, 400);
  }
};

$(function() {
  site.init();
});