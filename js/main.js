var $btn = $('.btn-show-hide');
var $list = $('.list');
var $move = $('.btn-move');
var $bounce = $('.btn-bounce');
var $collapse = $('.btn-collapse-expand');
var $append = $('.btn-append');

$btn.on('click', function (e) {
  $('.box').toggleClass('box-show');
});

$move.on('click', function (e) {
  $('.diamond').toggleClass('diamond-move');
});

$bounce.on('click', function (e) {
  $('circle').addClass('circle-bounce');
});

$collapse.on('click', function (e) {
  $('.panel').toggleClass('expand');
});

$append.on('click', function (e) {
  var $li = $('<li>');

  $li.html('things');
  $list.append($li);
  $li.addClass('words');
});

$('.circle').on('.animationed', function (e) {
  $('.circle').removeClass('circle-bounce');
});
