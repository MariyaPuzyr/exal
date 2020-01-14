$(document).ready(function () {
  $('.header-menu__link').click(function () {
    $(this).parents('.header-menu').addClass('active');
    $('.links-list li a').click(function () {
      var toLoad = $(this).data('link') + ' #content';
      if (toLoad.length > 0) {
        $('.menu-height').hide(loadContent);
      }

      function loadContent() {
        $('.menu-height').load(toLoad, '', showNewContent)
      }

      function showNewContent() {
        $('#content').show('normal');
      }
      return false;
    });
  });

  /* add news slider */
  $('.single-item').slick({
    slidesToShow: 1,
    slidesToScroll: 1
  });
});