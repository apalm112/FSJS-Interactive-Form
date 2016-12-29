// DONE: Set focus first text field on page load, vanilla JS works.
var giveInputNameFocus = document.getElementById('name');
function setFocus() {
  giveInputNameFocus.focus();
}
setFocus();

// DONE: Set focus on first text field on page load w/ jQuery.
var $setPageLoadFocus = $('#name');
$setPageLoadFocus.focus();

// TODO: Job Role Section-  when 'other' option is selected from 'Job Role'
        // reveal a text field w/ id="other-title" placeholder="Your Job Role"
var $formFirstChild = $('form:first-child');
var $newTextArea = $('input');
$newTextArea.attr(type="text"  id="other-title" placeholder="Your Job Role");
if (select.#title.value === 'other') {
  $formFirstChild.append($newTextArea);  
}
