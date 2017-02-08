var titleInput = $('#title-input')
var urlInput = $('#url-input')


$(titleInput).on('keyup', function() {
  buttonDisable();
});

$(urlInput).on('keyup', function() {
  buttonDisable();
});


function buttonDisable() {
  if (titleInput.val()==="" || urlInput.val()==="") {
    console.log('true')
    $('#enter-btn').prop('disabled', true);
  } else {
    console.log('false')
    $('#enter-btn').prop('disabled', false);
  }
}


$('#enter-btn').on('click', function() {
    makeLink();
    // console.log("hello");
});




// will want to call makeLink in another secondFunction.  secondFunction will need to audit that the proper inputs have been made on click of enter button then call makeLink.
function makeLink (){

  $('.links-area').prepend(
    '<article>' + '<div class="web-title">' + titleInput.val() + '</div>' + '<div class="web-url">' + urlInput.val() + '</div>' + '<button class="read-btn">Read</button>' + '<button class="delete-btn">Delete</button>' + '</article>');

    // $('.read-btn').click(function() {
    //   $(this).toggleClass('read');
    // });

    $('article').on('click', '.read-btn', function(){
      $(this).toggleClass('read');
      $(this).parent().toggleClass('read');
    })

    $('article').on('click', '.delete-btn', function(){
     $(this).parent().remove('article');
     totalCount();
   })

    $('enter-btn').click(function(){
    });

    function totalCount() {
      var totalNumber = $('article').length;
      $('.total-counter').text(totalNumber);
    }
    totalCount();
};




// make a function that disables the enter button based on if title || url = ""

// make a function that calls the above function on each keyup titleinput.keyup(abovefunction)

// call the second function on page load - globally
