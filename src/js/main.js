'use strict';

var app = {
  init: function() {
    app.favorites();
  },
  favorites: function() {
    $('#github-window').find('.content .ico-star').on('click', app.iconToggler);
  },
  iconToggler: function() {
    $(this).toggleClass('active');
  }
};

$(function() {
  app.init();
});