$(document).ready(function () {
  $('.header-menu__link').click(function () {
    var innerContent = $('.content-inner');
    $(this).parents('.header-menu').addClass('active');
    /* load inner wrapper for pages */
    $(this).parents('.header-menu').find('.tab-content').append('<div class="content-inner"></div>');

    /* ajax loader pages by click */
    $(document).on("click",".load-page",function() {
      var toLoad = $(this).data('link') + ' #content';
      if (toLoad.length > 0) {
        $(this).parents('.menu-height').hide();
        /* load page content*/
        $('.content-inner').show().load(toLoad, '', function () {
          $('#content').show();
        });
      }
      return false;
    });
    innerContent.remove().hide();
    $('.menu-height').show();
  });

  /* add news slider */
  $('.single-item').slick({
    slidesToShow: 1,
    slidesToScroll: 1
  });
});