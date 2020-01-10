$(document).ready(function () {
  $('.header-menu__link').click(function () {
    $(this).parents('.header-menu').addClass('active');
    // $('.header-menu__link.active').parents('.header-menu').removeClass('active');
    // var thisLink = $('.header-menu__link');
    // if(thisLink.hasClass('active')) {
    //   $(this).removeClass('active');
    //   console.log('remove');
    // } else  {
    //   $(this).addClass('active');
    //   console.log('add');
    // }
    $('.links-list li a').click(function () {
      var toLoad = $(this).attr('href');
      $('#content').hide('fast',loadContent);
      $('#links').append('<span id="load">LOADING...</span>');
      $('#load').fadeIn('normal');
      function loadContent() {
        $('#content').load(toLoad,'',showNewContent())
      }
      function showNewContent() {
        $('#content').show('normal',hideLoader());
      }
      function hideLoader() {
        $('#load').fadeOut('normal');
      }
      return false;

    });
  });
});