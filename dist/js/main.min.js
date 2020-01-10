$(document).ready(function () {
  $('.header-menu__link').click(function () {
    $(this).parents('.header-menu').addClass('active');
    $('.links-list li a').click(function () {
      var toLoad = $(this).data('link');
      if (toLoad.length > 0) {
        $('.menu-height').hide(loadContent);
      }

      function loadContent() {
        $('.menu-height').load(toLoad, '')
      }

      return false;
    });
  });
});