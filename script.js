$(function(){
$('.drawer-icon').click(function(){

  $('.drawer-icon').toggleClass('is-active');
  $('.drawer-content').toggleClass('is-active');
  $('.drawer-background').toggleClass('is-active');

  //calss . .....忘れてた
});

//背景クリックしたら消えるやつ
$('.drawer-content-item').click(function(){
  $('.drawer-icon').toggleClass('is-active');
  $('.drawer-content').toggleClass('is-active');
  $('.drawer-background').toggleClass('is-active');
});
  
$('.drawer-background').click(function(){
  $('.drawer-icon').toggleClass('is-active');
  $('.drawer-content').toggleClass('is-active');
  $('.drawer-background').toggleClass('is-active');
});

  
});
