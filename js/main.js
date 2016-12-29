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
  // var $newTextArea = $('input');
  var $jobRole = $('#title');
  // var otherJobRoleInput = '<input type="text" id="other-title" placeholder="Your Job Role">';

// something like
  $('#title').on('click', function() {
    // $newTextArea.attr(type='text', id='other-title', name='user_other_role', placeholder='Your Job Role');
    window.$jobRole[0][5].onselect;
      // THIS WORKS:
    var newTextArea = document.createElement('input');
    $('fieldset')[0].append(newTextArea);
  });


  // NOT working:
  // var $getForm = $('form');
  // $getForm[0][0].append(otherInput);
  //
  // // DOES NOT Work: but WAS?????
  // var $getField = $getForm.children();
  // $getField[0].append(otherInput);
  //
  // var $setOtherInput = $getField[0];
  // $setOtherInput.append(otherInput);
}


$(document).ready(function() {
  setInitialFocus();
  createOtherJobTextarea();
});
