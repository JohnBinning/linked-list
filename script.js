$('#enter-btn').on('click', function() {
  var newTitle = $('#title-input').val();
  var newUrl = $('#url-input').val();
  $('h2').text(newTitle);
  $('div').text(newUrl);
})

$('.read-btn').on('click', function() {
  $('.read-btn').toggleClass('.read');
})
