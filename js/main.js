/* Treehouse Project-03: Build an Interactive Form */


// DONE: Set focus on first text field on page load w/ jQuery.
function setInitialFocus() {
  var $setPageLoadFocus = $('#name');
  $setPageLoadFocus.focus();
}

const createOtherJobTextarea = () => {
  // DONE: A text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.  Give the field an id of “other-title,” and add the placeholder text of "Your Job Role" to the field.
  // TODO: Fix error thrown to console when else clause conditional runs while there is No input text to remove.
  // TODO: Fix margins on newTextArea to fit better onto the form.
  let getSelectJobRole = document.getElementById('title');
  let newTextArea = document.createElement('input');
  newTextArea.setAttribute('id', 'other-title');
  newTextArea.setAttribute('placeholder', 'Your Job Role');
  $('#title').change(function(){
    if (getSelectJobRole.value === 'other') {
        getSelectJobRole.after(newTextArea);
    } else {
        getSelectJobRole.nextElementSibling.remove();
    }
  });
}


$(document).ready(function() {
  setInitialFocus();
  createOtherJobTextarea();
});
