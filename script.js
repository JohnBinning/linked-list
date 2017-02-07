// $('#enter-btn').on('click', function() {
//   var newTitle = $('#title-input').val();
//   var newUrl = $('#url-input').val();
//   $('h2').text(newTitle);
//   $('div').text(newUrl);
// })
//
//
// $('.read-btn').on('click', function() {
//   $('.read-btn').toggleClass('.read');
// })

$('#title-input, url-input').keyup(function(){
  $('#enter-btn').prop('disabled', false);
});

$('#enter-btn').on('click', function() {
    makeLink();
});


// will want to call makeLink in another secondFunction.  secondFunction will need to audit that the proper inputs have been made on click of enter button then call makeLink.
function makeLink (){
  $('.section2').prepend(
    '<article>' + '<h2 class="card-title">' + "title" + '</h2>' + '<div class="card-url">' + "url" + '</div>' + '<button class="read-button">Read</button>' + '<button class="delete-button">Delete</button>' + '</article>');
};
