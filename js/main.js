/* Treehouse Project-03: Build an Interactive Form */

/* Global Variables --------------------------------------------- */
var getName = document.getElementById('name');
var getColorSelect = document.getElementById('color');
var getActivitiesFieldset = document.getElementsByClassName('activities');
var getMail = document.getElementById('mail');
var ccNum = document.getElementById('cc-num');
var zipCode = document.getElementById('zip');
var cvv = document.getElementById('cvv');
var counter = 0;

function setInitialFocus() {
  // Sets focus in the name input field on page load.
  var setPageLoadFocus = document.getElementById('name');
  setPageLoadFocus.focus();
  // Hides the Other Job Role input text field that loads for no JS rubric.
  var otherText = document.getElementById('other-title');
  otherText.style.display = 'none';
}

function createOtherJobTextarea() {
  // A text field will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
  var getSelectJobRole = document.getElementById('title');
  var getOther = document.getElementById('other-title');
  getSelectJobRole.addEventListener('click', function() {
    if (getSelectJobRole.value === 'other') {
      getSelectJobRole.nextElementSibling.style.display = 'inline-block';
      getOther.focus();
    } else {
      getSelectJobRole.nextElementSibling.style.display = 'none';
    }
  });
}

function tShirtInfo() {
  // Changes color select option value when attribute is disabled to corresponding color restrictions, i.e.--if tomato is selected & then theme is switched to js puns.
  var getDesignSelect = document.getElementById('design');
  var hideColor = document.getElementById('colors-js-puns');
  var removeOpt = document.getElementById('remove');

  hideColor.style.display = 'none';
  getDesignSelect.addEventListener('change', tShirtInfo);
  // Hide or show the corresponding color options based on which design option is currently selected.
  if (getDesignSelect.value === 'js puns') {
    hideColor.style.display = 'block';
    removeOpt.disabled = true;
    getColorSelect[0].selected = true;
    for (idx=3; idx<6; idx++) {
      getColorSelect[idx].style.display = 'none';
    }
    for (idx=0; idx<3; idx++) {
      getColorSelect[idx].style.display = 'block';
    }
  } else if (getDesignSelect.value === 'heart js') {
    hideColor.style.display = 'block';
    removeOpt.disabled = true;
    getColorSelect[3].selected = true;
    for (idx=0; idx<3; idx++) {
      getColorSelect[idx].style.display = 'none';
    }
    for (idx=3; idx<6; idx++) {
      getColorSelect[idx].style.display = 'block';
    }
  }
}

function registerForActivities() {
  // Some events are at the same time as others. If the user selects a workshop, don't allow selection of a workshop at the same date and time -- you should disable the checkbox.
  // Visually indicates that the workshop in the competing time slot isn't available.  When a user unchecks an activity, the competing activities (if there are any) are no longer disabled.
  getActivitiesFieldset[0].setAttribute('id', 'registerAct');
  var getAct = document.getElementById('registerAct');

  getAct.addEventListener('click', function() {
    if (getActivitiesFieldset[0].childNodes[5].children[0].checked) {
      // If A checked, disable C:
      getActivitiesFieldset[0].childNodes[9].children[0].disabled = true;
      getActivitiesFieldset[0].childNodes[9].style.color = '#706D73';
      addStrikeThrough(9);
    }
    if (getActivitiesFieldset[0].childNodes[9].children[0].checked) {
      // If C checked, disable A:
      addStrikeThrough(5);
      getActivitiesFieldset[0].childNodes[5].children[0].disabled = true;
      getActivitiesFieldset[0].childNodes[5].style.color = '#706D73';
    }
    if (getActivitiesFieldset[0].childNodes[7].children[0].checked) {
      // If B checked, disable D:
      getActivitiesFieldset[0].childNodes[11].children[0].disabled = true;
      getActivitiesFieldset[0].childNodes[11].style.color = '#706D73';
      addStrikeThrough(11);
    }
    if (getActivitiesFieldset[0].childNodes[11].children[0].checked) {
      // If D checked, disable B:
      getActivitiesFieldset[0].childNodes[7].children[0].disabled = true;
      getActivitiesFieldset[0].childNodes[7].style.color = '#706D73';
      addStrikeThrough(7);
    }
    // Reverse the disabled input.
    if (!getActivitiesFieldset[0].childNodes[5].children[0].checked) {
      // If A unchecked, enable C:
      getActivitiesFieldset[0].childNodes[9].children[0].disabled = false;
      getActivitiesFieldset[0].childNodes[9].style.color = '#000';
    }
    if (!getActivitiesFieldset[0].childNodes[9].children[0].checked) {
      // If C unchecked, enable A:
      getActivitiesFieldset[0].childNodes[5].children[0].disabled = false;
      getActivitiesFieldset[0].childNodes[5].style.color = '#000';
    }
    if (!getActivitiesFieldset[0].childNodes[7].children[0].checked) {
      // If B unchecked, enable D:
      getActivitiesFieldset[0].childNodes[11].children[0].disabled = false;
      getActivitiesFieldset[0].childNodes[11].style.color = '#000';
    }
    if (!getActivitiesFieldset[0].childNodes[11].children[0].checked) {
      // If D unchecked, enable B:
      getActivitiesFieldset[0].childNodes[7].children[0].disabled = false;
      getActivitiesFieldset[0].childNodes[7].style.color = '#000';
    }
  });
}

function runningTotal() {
  // As a user selects activities, a running total displays below the list of checkboxes.
  var inputLength = getActivitiesFieldset[0].childNodes.length; // 18
  var label = document.createElement('label');
  var total = 0;
  // Initialize counters to help add/subtract for each activity.
  var allCounter = 0;
  var jsframeworksCounter = 0;
  var jslibsCounter = 0;
  var expressCounter = 0;
  var nodeCounter = 0;
  var buildToolsCounter = 0;
  var npmCounter = 0;
  var num;
  var dollar;
  var count;

  // Each time an input is checked/unchecked the for loop calculates the total.
  $('input[type="checkbox"]').change(function() {
    for (var idx=3; idx < inputLength; idx += 2) {
      // var getLabelInput = <label><input name='all'>Main Conf $200</label>
      var getLabelInput = getActivitiesFieldset[0].childNodes[idx];
      // var getName = all, js-frameworks, express, node, etc
      var getName = getLabelInput.firstChild.attributes[1].value;
      // var isChecked = true or false val for input checkbox
      var isChecked = getLabelInput.childNodes[0].checked;

      // Massive conditional checks each input checkbox & adds/subtracts that activities value to the total displayed.
      if (getName === 'all' && isChecked === true && allCounter === 0 ) {
        dollar = getLabelInput.innerText;
        num = dollar.match((/([0-9]{3})/g));
        count = num.pop();
        total += parseInt(count);
        allCounter++;
      } else if (getName ==='all' && isChecked === false && allCounter === 1) {
        dollar = getLabelInput.innerText;
        num = dollar.match((/([0-9]{3})/g));
        count = num.pop();
        total -= parseInt(count);
        allCounter--;
      }
      if (getName === 'js-frameworks' && isChecked === true && jsframeworksCounter === 0 ) {
        dollar = getLabelInput.innerText;
        num = dollar.match((/([0-9]{3})/g));
        count = num.pop();
        total += parseInt(count);
        jsframeworksCounter++;
      } else if (getName ==='js-frameworks' && isChecked === false && jsframeworksCounter === 1) {
        dollar = getLabelInput.innerText;
        num = dollar.match((/([0-9]{3})/g));
        count = num.pop();
        total -= parseInt(count);
        jsframeworksCounter--;
      }if (getName === 'js-libs' && isChecked === true && jslibsCounter === 0 ) {
        dollar = getLabelInput.innerText;
        num = dollar.match((/([0-9]{3})/g));
        count = num.pop();
        total += parseInt(count);
        jslibsCounter++;
      } else if (getName ==='js-libs' && isChecked === false && jslibsCounter === 1) {
        dollar = getLabelInput.innerText;
        num = dollar.match((/([0-9]{3})/g));
        count = num.pop();
        total -= parseInt(count);
        jslibsCounter--;
      }if (getName === 'express' && isChecked === true && expressCounter === 0 ) {
        dollar = getLabelInput.innerText;
        num = dollar.match((/([0-9]{3})/g));
        count = num.pop();
        total += parseInt(count);
        expressCounter++;
      } else if (getName ==='express' && isChecked === false && expressCounter === 1) {
        dollar = getLabelInput.innerText;
        num = dollar.match((/([0-9]{3})/g));
        count = num.pop();
        total -= parseInt(count);
        expressCounter--;
      }if (getName === 'node' && isChecked === true && nodeCounter === 0 ) {
        dollar = getLabelInput.innerText;
        num = dollar.match((/([0-9]{3})/g));
        count = num.pop();
        total += parseInt(count);
        nodeCounter++;
      } else if (getName ==='node' && isChecked === false && nodeCounter === 1) {
        dollar = getLabelInput.innerText;
        num = dollar.match((/([0-9]{3})/g));
        count = num.pop();
        total -= parseInt(count);
        nodeCounter--;
      }if (getName === 'build-tools' && isChecked === true && buildToolsCounter === 0 ) {
        dollar = getLabelInput.innerText;
        num = dollar.match((/([0-9]{3})/g));
        count = num.pop();
        total += parseInt(count);
        buildToolsCounter++;
      } else if (getName ==='build-tools' && isChecked === false && buildToolsCounter === 1) {
        dollar = getLabelInput.innerText;
        num = dollar.match((/([0-9]{3})/g));
        count = num.pop();
        total -= parseInt(count);
        buildToolsCounter--;
      }if (getName === 'npm' && isChecked === true && npmCounter === 0 ) {
        dollar = getLabelInput.innerText;
        num = dollar.match((/([0-9]{3})/g));
        count = num.pop();
        total += parseInt(count);
        npmCounter++;
      } else if (getName ==='npm' && isChecked === false && npmCounter === 1) {
        dollar = getLabelInput.innerText;
        num = dollar.match((/([0-9]{3})/g));
        count = num.pop();
        total -= parseInt(count);
        npmCounter--;
      }
      // Append a label to this fieldtest & update its innerText w/ total.
      label.className = 'cost';
      label.innerText = 'Total: $' + total;
      getActivitiesFieldset[0].append(label);
    }
  });
}

function addStrikeThrough(num) {
  // Function adds class='strike-through' to inputs to implement CSS rule change.
  // Create new span to hold innerText to implent a CSS rule.
  var newSpan = document.createElement('span');
  newSpan.innerText = getActivitiesFieldset[0].childNodes[num].innerText;
  // Variable is a copy of the input, to replace it
  // add class='strike-through' to it.
  var input = getActivitiesFieldset[0].childNodes[num].firstChild;
  input.setAttribute('class', 'strike-through');
  // Remove the innerText now that a copy is in the span.
  getActivitiesFieldset[0].childNodes[num].innerText = '';
  // Append the span.
  getActivitiesFieldset[0].childNodes[num].append(newSpan);
  // Prepend the input.
  getActivitiesFieldset[0].childNodes[num].prepend(input);
}

function paymentInfoSection() {
  // Display payment sections based on the payment option chosen in the select menu.
  var getThatDiv = document.getElementsByTagName('fieldset');
  var paymentSelect = document.getElementById('payment');
  paymentSelect.addEventListener('click', paymentInfoSection );

  var credit = getThatDiv[3].childNodes[7];
  var paypal = getThatDiv[3].childNodes[9];
  var bitcoin = getThatDiv[3].childNodes[11];
  // The "Credit Card" payment option is selected by default, display the #credit-card div, and hide the "Paypal" and "Bitcoin information.
  paypal.style.display = 'none';
  bitcoin.style.display = 'none';
  getThatDiv[3].childNodes[5].childNodes[1].disabled = true;
  // When a user selects the "PayPal" payment option, the Paypal information displays, and the credit card and “Bitcoin” information are hidden.
  if (paymentSelect.value === 'paypal') {
    paypal.style.display = 'block';
    credit.style.display = 'none';
    bitcoin.style.display = 'none';
  } else if (paymentSelect.value === 'bitcoin') {
    // When a user selects the "Bitcoin" payment option, the Bitcoin information displays, and the credit card and “PayPal” information are hidden.
    bitcoin.style.display = 'block';
    paypal.style.display = 'none';
    credit.style.display = 'none';
  } else if (paymentSelect.value === 'credit card') {
    credit.style.display = 'block';
    paypal.style.display = 'none';
    bitcoin.style.display = 'none';
  }
}

function formValidation() {
  // If any of the following validation errors exist, prevent the user from submitting the form:
  var button = document.getElementsByTagName('button');
  button[0].setAttribute('id', 'register-button');
  var register = document.getElementById('register-button');

  register.addEventListener('click', function(event) {
    event.preventDefault();
    validName();
    validEmail();
    validTShirt();
    validActivities();
    validCreditCard();
    validZipCode();
    validCVV();
  });
}

function validName() {
  // If name field is left blank, an error message displays.
  if (getName.value.length >= 4) {
    getName.previousElementSibling.style.color = '#000';
    getName.previousElementSibling.innerText = 'Name:';
    return true;
  } else {
    getName.previousElementSibling.style.color = '#c92233';
    getName.previousElementSibling.innerText = 'Name:  (please provide your name)';
    return false;
  }
}

function validEmail() {
  // Email field must be a validly formatted e-mail address.
  var getMail = document.getElementById('mail');
  var userEmail = getMail.value;
  var checkEmail = userEmail.match((/([a-z]{4,})\@[a-z]{3,}\.[a-z]{2}/g));

  if (checkEmail !== null) {
    getMail.previousElementSibling.style.color = '#000';
    getMail.previousElementSibling.innerText = 'Email:';
    return true;
  } else if (!checkEmail) {
    getMail.previousElementSibling.style.color = '#c92233';
    getMail.previousElementSibling.innerText = 'Email:  (please provide your email)';
    return false;
  }
}

function validTShirt() {
  // If a Tshirt Theme & color aren't selected, an error message displays.
  var getTShirt = document.getElementById('design');
  var getTShirtLegend = document.getElementsByClassName('shirt');
  if (getTShirt.value === 'Select Theme') {
    counter = 1;
    getTShirtLegend[0].childNodes[1].innerHTML = 'T-Shirt Info' + '<p id="shirtValid">Don\'t forget to pick a shirt</p>';
    getTShirtLegend[0].childNodes[1].firstChild.nextSibling.style.color = '#c92233';
    return false;
  } else if (getTShirt.value !== 'Select Theme' && counter === 1) {
    getTShirtLegend[0].childNodes[1].firstChild.nextSibling.style.display='none';
    counter = 0;
  } else {
    return true;
  }
}

function validActivities() {
  // Must select at least one checkbox under the "Register for Activities" section of the form, if not then on submit an error message displays.
  var inputLength = getActivitiesFieldset[0].childNodes.length; // 18

  for (var idx=3; idx < inputLength; idx += 2) {
    // var getLabelInput = <label><input name='all'>Main Conf $200</label>
    var getLabelInput = getActivitiesFieldset[0].childNodes[idx];
    // var isChecked = true or false val for input checkbox
    var isChecked = getLabelInput.childNodes[0].checked;

    if (isChecked) {
      getActivitiesFieldset[0].childNodes[1].style.color = '#184f68';
      getActivitiesFieldset[0].childNodes[1].firstChild.nextSibling.style.display = 'none';
      return true;
    } else if (!isChecked) {
      getActivitiesFieldset[0].childNodes[1].innerHTML = 'Register for Activities' + '<p>Please select an Activity</p>';
      getActivitiesFieldset[0].childNodes[1].firstChild.nextSibling.style.color = '#c92233';
      return false;
    }
  }
}

function validCreditCard() {
  // Credit card field only accepts a 16 digit number.
  ccNum.setAttribute('maxlength', 16);
  errorMessage(ccNum);
}

function validZipCode() {
  // The zipcode field accepts only a 5-digit number.
  var zipCode = document.getElementById('zip');
  zipCode.setAttribute('maxlength', 5);
  var regex = (/\d{5}$/);
  var regexAlpha = (/([a-z])/);

  if (zipCode.value === '') {
    zipCode.previousElementSibling.style.color = '#c92233';
    zipCode.previousElementSibling.innerText = 'Zip Code: cannot be left blank';
    return false;
  }  else if (regexAlpha.test(zipCode.value)) {
    zipCode.previousElementSibling.style.color = '#c92233';
    zipCode.previousElementSibling.innerText = 'Zip Code may not contain alphabetic characters';
    return false;
  } else if (!regex.test(zipCode.value)) {
    zipCode.previousElementSibling.style.color = '#c92233';
    zipCode.previousElementSibling.innerText = 'Zip Code: Enter a valid zip code';
    return false;
  } else {
    zipCode.previousElementSibling.style.color = '#000';
    zipCode.previousElementSibling.innerText = 'Zip Code:';
    return true;
  }
}

function validCVV() {
  // The CVV only accepts a 3 digit number.
  var cvv = document.getElementById('cvv');
  cvv.setAttribute('maxlength', 3);
  cvv.setAttribute('minlength', 3);
  var regex = (/\d{3}$/g);
  if (!regex.test(cvv.value)) {
    cvv.previousElementSibling.style.color = '#c92233';
    cvv.previousElementSibling.innerText = 'CVV: Enter a valid CVV';
    return false;
  } else {
    cvv.previousElementSibling.style.color = '#000';
    cvv.previousElementSibling.innerText = 'CVV';
    return true;
  }
}

// Exceeds Functions -----------------------------------------------------
function errorMessage(input) {
// Form provides at least one error message that changes depending on the error.
  var regex = (/\d{16}$/g);
  var regexAlpha = (/([a-z])/g);   // regerex to check for alpha chars
  if (input.value === '') {
    input.previousElementSibling.style.color = '#c92233';
    input.previousElementSibling.innerText = 'Card Number: You must enter a valid card number';
  } else if (input.value.length < 16 && (!regexAlpha.test(input.value))) {
    input.previousElementSibling.style.color = '#c92233';
    input.previousElementSibling.innerText = 'Enter credit card number 16 digits long';
  } else if (regexAlpha.test(input.value)) {
    input.previousElementSibling.style.color = '#c92233';
    input.previousElementSibling.innerText = 'Card may not contain alphabetic characters';
  } else if (!regex.test(input.value)) {
    input.previousElementSibling.style.color = '#c92233';
    input.previousElementSibling.innerText = 'Card Number: Enter a valid card number';
  } else {
    input.previousElementSibling.style.color = '#000';
    input.previousElementSibling.innerText = 'Card Number';
  }
}

function realTimeValidationError() {
  // Displays real-time error message when input field gets focus.
  // Adds real-time validation in the scenario where a blank form is submitted all error messages are shown & as each input field is correctly filled then remove the corresponding error message for that input field, except Activities.
  getMail.addEventListener('focus', validEmail);
  getMail.addEventListener('keyup', validEmail);

  ccNum.addEventListener('focus', validCreditCard);
  ccNum.addEventListener('keyup', validCreditCard);

  zipCode.addEventListener('focus', validZipCode);
  zipCode.addEventListener('keyup', validZipCode);

  cvv.addEventListener('focus', validCVV);
  cvv.addEventListener('keyup', validCVV);
  getName.addEventListener('keyup', validName);
  getColorSelect.addEventListener('click', validTShirt);
}

setInitialFocus();
createOtherJobTextarea();
tShirtInfo();
registerForActivities();
runningTotal();
paymentInfoSection();
formValidation();
realTimeValidationError();
