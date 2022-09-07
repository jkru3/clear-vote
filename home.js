"use strict";

const JSON_TEXT = '[{' +
    '"icon": "fa-solid fa-person-pregnant",' +
    '"affirmativeStance": "Pro-Choice",' +
    '"affirmativeExplaination": "This focus powers womans health services, abortive services, and contraceptive care",' +
    '"negativeStance": "Pro-Life",' +
    '"negativeExplaination": "This focus powers stricter measures on abortive services and contraceptive care"' +
'}, {' +
    '"icon": "fa-solid fa-earth-americas",' +
    '"affirmativeStance": "Natural Resource Security",' +
    '"affirmativeExplaination": "This focus prioritizes Earth\'s biodiversity and powers land, ocean, forest, and wildlife conservation efforts",' +
    '"negativeStance": null,' +
    '"negativeExplaination": null' +
'}, {' +
    '"icon": "",' +
    '"affirmativeStance": "",' +
    '"affirmativeExplaination": "",' +
    '"negativeStance": "",' +
    '"negativeExplaination": ""' +
'}]'
var ISSUE = JSON.parse(JSON_TEXT);
for (i = 0; i < ISSUE.length; i++) {
  document.getElementById("demo1").className = ISSUE[0].icon;
  document.getElementById("demo2").innerHTML = " " + ISSUE[0].affirmativeStance;
  document.getElementById("demo3").innerHTML = ISSUE[0].affirmativeExplaination;
  if(ISSUE[0].negativeStance != null) {
    document.getElementById("demo4").className = "fa-solid fa-repeat";
  }
}
var clicked = false;
function switchStance() {
  if (!clicked) {
    clicked = true;
    document.getElementById("demo2").innerHTML = " " + ISSUE[0].negativeStance;
    document.getElementById("demo3").innerHTML = ISSUE[0].negativeExplaination;
  } else {
    clicked = false;
    document.getElementById("demo2").innerHTML = " " + ISSUE[0].affirmativeStance;
    document.getElementById("demo3").innerHTML = ISSUE[0].affirmativeExplaination;
  }
}

/* This code handles collapsable tab */

var tabs = document.getElementsByClassName("collapsible"); //selects every html element containing 'class="collapsable'" 
for (var i = 0; i < tabs.length; i++) { //iterates through every element containing 'class="collapsable"'
  tabs[i].addEventListener("click", function() {
    this.classList.toggle("active");        //all this does is .toggle the css to change the background color
    var content = this.nextElementSibling;  //this grabs the div following the button
    if (content.style.display === "block") { //this changes the button between block and none
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

/* This code handles the slider */
var slider = document.getElementById("myRange");
var output = document.getElementById("value");

output.innerHTML = slider.value;
slider.oninput = function() {
  if(!clicked) {
    output.innerHTML = this.value;
  } else {
    output.innerHTML = Math.abs(this.value) * -1;
  }
}

function populate() {
  var z = document.createElement('p');
  z.innerHTML = "hello world";
  document.div.appendChild(z);
}