var $btn = $('.btn-show-hide');
var $list = $('.list');
var $move = $('.btn-move');
var $bounce = $('.btn-bounce');
var $collapse = $('.btn-collapse-expand');
var $append = $('.btn-append');

$btn.on('click', function (e) {
  $('.box').toggleClass('box-show');
});
