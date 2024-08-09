$('a[href^="#top"]').click(function() {
  let speed = 800;
  let href = $(this).attr("href");
  let target = $(href == "#top" || href == "" ? 'html' : href);
  let position = target.offset().top;
  $('body,html').animate({
    scrollTop: position
  }, speed, 'swing');
  return false;
});

document.oncontextmenu = function(){ return false; };
document.body.oncontextmenu = "return false;"

$(function(){
  $(window).scroll(function (){
      $('.fadein').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 50){
            $(this).addClass('active');
          }
      });
  });
});

$('.menu-btn').on('click', function(){
  $('.menu').toggleClass('is-active');
});

$(".menu-btn").click(function () {
  $(this).toggleClass('active');
});

// スクロールイベントを設定
var startPos = 0,winScrollTop = 0;
$(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= startPos) {
        $('.header').addClass('hide');
    } else {
        $('.header').removeClass('hide');
    }
    startPos = winScrollTop;
});

$(".btn").click(function () {
  $(this).toggleClass('omakeactive');
});

var btn = document.querySelector('.btn-img1');
btn.addEventListener('click', () => {
    var more = document.querySelector('.text1');
    more.classList.toggle('appear');
});
var btn = document.querySelector('.btn-img2');
btn.addEventListener('click', () => {
    var more = document.querySelector('.text2');
    more.classList.toggle('appear');
});


$(".btn-link").click(function () {
  $(this).toggleClass('menteactive');
});

var btn = document.querySelector('.btn-link1');
btn.addEventListener('click', () => {
    var more = document.querySelector('.textmente1');
    more.classList.toggle('appear');
});
var btn = document.querySelector('.btn-link2');
btn.addEventListener('click', () => {
    var more = document.querySelector('.textmente2');
    more.classList.toggle('appear');
});