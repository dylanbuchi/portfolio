$('.hjava').on('mouseover', function () {
  $(this).addClass('active-j');
  $('.hpy').removeClass('active-p');
  $('.hdart').removeClass('active-d');
  $('.hjs').removeClass('active-js');
});

$('.hpy').on('mouseover', function () {
  $(this).addClass('active-p');
  $('.hjava').removeClass('active-j');
  $('.hdart').removeClass('active-d');
  $('.hjs').removeClass('active-js');
});

$('.hdart').on('mouseover', function () {
  $(this).addClass('active-d');
  $('.hjava').removeClass('active-j');
  $('.hpy').removeClass('active-p');
  $('.hjs').removeClass('active-js');
});

$('.hjs').on('mouseover', function () {
  $(this).addClass('active-js');
  $('.hjava').removeClass('active-j');
  $('.hpy').removeClass('active-p');
  $('.hpy').removeClass('active-d');
});
