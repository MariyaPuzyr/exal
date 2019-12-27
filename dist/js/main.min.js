$(document).ready(function () {
  $('.header-menu__list-item').hide();
  $('.header-menu__link').click(function(e){
    e.preventDefault();
    $(this).closest('li').siblings().children('a').removeClass('active');
    $(this).addClass('active');
    $('.header-menu__list').children('div').hide();
    $($(this).attr('href')).show();
  })
});