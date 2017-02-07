
$('#enter-btn').on('click', function() {
  var newTitle = $('#title-input').val();
  var newUrl = $('#url-input').val();
  $('.web-title').text(newTitle);
  $('.web-url').text(newUrl);
});

// $('.read-btn').on('click', function() {
//   $('.read-btn').toggleClass('.read');
// })
