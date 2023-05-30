(function ($) {
  'use strict';

  /*::::::::::::::::::::::::::::::::::::
    Preloader
    ::::::::::::::::::::::::::::::::::::*/
  $(window).on('load', function () {
    setTimeout(() => {
      $(
        '.' + document.querySelector('#root').firstChild.classList.value
      ).fadeOut();
    }, 500)

  });
})(jQuery);
