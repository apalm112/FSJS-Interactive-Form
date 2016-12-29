// TODO: Set focus first text field on page load.
var giveInputNameFocus = document.getElementById('name');
function setFocus() {
  giveInputNameFocus.focus();
}
setFocus();

// TODO: Set focus on first text field on page load w/out jQuery.
var $setPageLoadFocus = $('#name');
$setPageLoadFocus.focus();
