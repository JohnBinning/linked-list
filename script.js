
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
var titleInput = $('#title-input')
// var urlInput = $('#url-input')


$('#title-input, url-input').keyup(function(){
  $('#enter-btn').prop('disabled', false);
});

$('#enter-btn').on('click', function() {
    makeLink();
});


// will want to call makeLink in another secondFunction.  secondFunction will need to audit that the proper inputs have been made on click of enter button then call makeLink.
function makeLink (titleValue){
  $('.section2').prepend(
    '<article>' + '<h2 class="card-title">' + titleInput.val() + '</h2>' + '<div class="card-url">' + "url" + '</div>' + '<button class="read-button">Read</button>' + '<button class="delete-button">Delete</button>' + '</article>');
};




// make a function that disables the enter button based on if title || url = ""

// make a function that calls the above function on each keyup titleinput.keyup(abovefunction)

// call the second function on page load - globally
=======

$('#enter-btn').on('click', function() {
  var newTitle = $('#title-input').val();
  var newUrl = $('#url-input').val();
  $('.web-title').text(newTitle);
  $('.web-url').text(newUrl);
});

// $('.read-btn').on('click', function() {
//   $('.read-btn').toggleClass('.read');
// })

