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
  var $formFirstChild = $('form:first-child');
  var $newTextArea = $('input');

// something like
  $('').on('click', function() {
    $newTextArea.attr(type='text', id='other-title', name='user_other_role', placeholder='Your Job Role');
    if (select.title.value === 'other') {
      $formFirstChild.append($newTextArea);
    }
  });
  // #title.on('click', )

  // NOT working:
  // var $getForm = $('form');
  // var getField = $getForm.children();
  // var setOtherInput = getField[0];
  // var otherInput = '<input type="text" id="other-title" placeholder="Your Job Role">';
  // setOtherInput.append(otherInput)
  //
  //
  // DOES NOT Work: but WAS?????
  // var $getForm = $('form');
  // var getField = $getForm.children();
  // var otherInput = '<input type="text" id="other-title" placeholder="Your Job Role">';
  // getField[0].append(otherInput)
}

$(document).ready(function() {
  setInitialFocus();
});
