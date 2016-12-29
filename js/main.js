/* Treehouse Project-03: Build an Interactive Form */

// DONE: Set focus first text field on page load, vanilla JS works.
// var giveInputNameFocus = document.getElementById('name');
// function setFocus() {
//   giveInputNameFocus.focus();
// }
// setFocus();

// DONE: Set focus on first text field on page load w/ jQuery.
function setInitialFocus() {
  var $setPageLoadFocus = $('#name');
  $setPageLoadFocus.focus();
}

function createOtherJobTextarea() {
  // TODO: Job Role Section-  when 'other' option is selected from 'Job Role'
  // reveal a text field w/ id="other-title" placeholder="Your Job Role"
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
