$('a[href^="#"]').click(function() {
  let speed = 800;
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? 'html' : href);
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

let start_position = 0,     //初期位置０
    window_position,
    $window = $(window),
    $header = $('.header');

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


$('.menu-btn').on('click', function(){
  $('.menu').toggleClass('is-active');
});

$(".menu-btn").click(function () {
  $(this).toggleClass('active');
});

$(".button-popup1").on("click", function() {
  $(".img1")
    .addClass("show")
    .fadeIn();
  // return false;
});

$(".button-popup2").on("click", function() {
  $(".img2")
    .addClass("show")
    .fadeIn();
  // return false;
});

$(".button-popup3").on("click", function() {
  $(".img3")
    .addClass("show")
    .fadeIn();
  // return false;
});

$(".button-popup4").on("click", function() {
  $(".img4")
    .addClass("show")
    .fadeIn();
  // return false;
});

$(".button-popup5").on("click", function() {
  $(".img5")
    .addClass("show")
    .fadeIn();
  // return false;
});

$(".button-popup6").on("click", function() {
  $(".img6")
    .addClass("show")
    .fadeIn();
  // return false;
});

$(".button-popup7").on("click", function() {
  $(".img7")
    .addClass("show")
    .fadeIn();
  // return false;
});

$(".button-popup8").on("click", function() {
  $(".img8")
    .addClass("show")
    .fadeIn();
  // return false;
});

$(".button-popup9").on("click", function() {
  $(".img9")
    .addClass("show")
    .fadeIn();
  // return false;
});

$(".button-popup12").on("click", function() {
  $(".img10")
    .addClass("show")
    .fadeIn();
  // return false;
});

$(".button-popup13").on("click", function() {
  $(".img11")
    .addClass("show")
    .fadeIn();
  // return false;
});

$(".button-popup14").on("click", function() {
  $(".img12")
    .addClass("show")
    .fadeIn();
  // return false;
});

$(".button-popup15").on("click", function() {
  $(".img13")
    .addClass("show")
    .fadeIn();
  // return false;
});

$(".button-popup16").on("click", function() {
  $(".img14")
    .addClass("show")
    .fadeIn();
  // return false;
});

$(".button-popup17").on("click", function() {
  $(".img15")
    .addClass("show")
    .fadeIn();
  // return false;
});

$(".button-popup18").on("click", function() {
  $(".img16")
    .addClass("show")
    .fadeIn();
  // return false;
});

$(".button-popup19").on("click", function() {
  $(".img17")
    .addClass("show")
    .fadeIn();
  // return false;
});

$(".button-popup20").on("click", function() {
  $(".img18")
    .addClass("show")
    .fadeIn();
  // return false;
});

$(".button-popup21").on("click", function() {
  $(".img19")
    .addClass("show")
    .fadeIn();
  // return false;
});

$(".button-popup10").on("click", function() {
  $(".video1")
    .addClass("show")
    .fadeIn();
  // return false;
});

$(".button-popup11").on("click", function() {
  $(".video2")
    .addClass("show")
    .fadeIn();
  // return false;
});

$(document).click(function(event){
  var target = $(event.target);

  if(target.hasClass('popup')) {
      target.fadeOut();
  }
});

$(".close-btn").on("click", function() {
  $(".popup").fadeOut();
  // return false;
});