var titleInput = $('#title-input')
var urlInput = $('#url-input')


// call button disable function on page load - globally
$(titleInput).on('keyup', function() {
  buttonDisable();
});

$(urlInput).on('keyup', function() {
  buttonDisable();
});


// make a function that disables the enter button based on if title || url = ""

// make a function that calls the above function on each keyup titleinput.keyup(abovefunction)

function buttonDisable() {
  if (titleInput.val()==="" || urlInput.val()==="") {
    $('#enter-btn').prop('disabled', true);
  } else {
    $('#enter-btn').prop('disabled', false);
  }
}


// selecting 'enter' button and adding a 'click' event listener
// calling the makeLink function
$('#enter-btn').on('click', function() {
    makeLink();
});

function makeLink (){
  addCard();
  removeCard();
}


// 1. prepend card
function addCard() {
  $('.links-area').prepend(
    '<article class="linkCard">' +
      '<div class="web-title">' +
        titleInput.val() +
      '</div>' +
      '<div class="web-url">' + '<a href="http://' + urlInput.val() +  '" target="_blank">' +
        urlInput.val() + '</a>' +
      '</div>' +
      '<button class="read-btn">Read</button>' +
      '<button class="delete-btn">Delete</button>');

  }

// 2.delete card funcionality
function removeCard() {
    $('article').on('click', '.delete-btn', function(){
     $(this).parent().remove('article');
     totalCount();
     unReadCounter();
   })
    totalCount();
    unReadCounter();
};


// 'Read' button functionality
$('.links-area').on('click', '.read-btn', function(){
  $(this).toggleClass('read');
  $(this).parent().toggleClass('read');
  readCounter();
  unReadCounter();
});


// COUNTER FUNCTIONS:

// Total number counter:
function totalCount() {
  var totalNumber = $('article').length;
  $('.total-counter').text(totalNumber);
  return totalNumber;
}

// 'Read' number counter
function readCounter() {
  var numItems = $('.linkCard .read').length
  $('.read-links').text(numItems);
  return numItems;
};

// 'Unread' number counter
function unReadCounter() {
  var totalCoutnNum = parseInt(totalCount(), 10);
  var readCountNum = parseInt(readCounter(), 10);
  var unReadCountNum = totalCoutnNum - readCountNum;
  $('.unread-links').text(unReadCountNum);
  // return totalCoutnNum - readCountNum;
}
