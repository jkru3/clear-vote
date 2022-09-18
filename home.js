"use strict";

const tooltips = document.querySelectorAll('.tt')
tooltips.forEach(t => {
  new bootstrap.Tooltip(t)
});

(() => { //redirects page to home if it isn't a valid section and invalidates any pages that aren't the current page
  let url = window.location.href;
  let temp = "";
  if(url.includes("#")) {
    temp = url.split('#');
    if(!url.includes("home") && !url.includes("about")) {
      window.location = temp[0]; 
    }
  } else {
    window.location += "#home";
  }
})();



const JSON_TEXT = '[{' +
  '"icon": "fa-solid fa-person-praying",' +
  '"affirmativeStance": "Religious Expression",' +
  '"affirmativeExplanation": "This focus prioritizes protecting religious freedoms and ideals in public spaces",' +
  '"negativeStance": "Secular Public Sector",' +
  '"negativeExplanation": "This focus prioritizes keeping public spaces secular and free from theocratic interference"' +
'}]'
/*, {' +
  '"icon": "fa-solid fa-comment",' +
  '"affirmativeStance": "Freedom of Speech",' +
  '"affirmativeExplanation": "This stance aims to protect all forms of speech and expression in public spaces",' +
  '"negativeStance": "Restriction of Harmful Expression",' +
  '"negativeExplanation": "This stance aims to restrict and penalize forms of expression that may cause public harm, including slander and hate speech"' +
'}, {' +
  '"icon": "fa-solid fa-person-pregnant",' +
  '"affirmativeStance": "Pro-Choice",' +
  '"affirmativeExplanation": "This focus powers womans health services, abortive services, and contraceptive care",' +
  '"negativeStance": "Pro-Life",' +
  '"negativeExplanation": "This focus powers stricter measures on abortive services and contraceptive care"' +
'}, {' +
  '"icon": "fa-solid fa-gun",' +
  '"affirmativeStance": "Right to Bear Arms",' +
  '"affirmativeExplanation": "This focus prioritizing the allowance of citizens to purchase and possess personal firearms",' +
  '"negativeStance": "Gun Control",' +
  '"negativeExplanation": "This focus aims to enforce stricter gun control laws, including limits on purchasing and high caliber weapons"' +
'}, {' +
  '"icon": "fa-solid fa-eye",' +
  '"affirmativeStance": "Public Privacy",' +
  '"affirmativeExplanation": "This stance prioritizes maintaining the personal privacy of all citizens in public spaces",' +
  '"negativeStance": "Public Surveillance",' +
  '"negativeExplanation": "This stance aims to increase public protection by monitoring when and where crime happens through the use of technology"' +
'}, {' +
  '"icon": "fa-solid fa-school",' +
  '"affirmativeStance": "Local Education Standards",' +
  '"affirmativeExplanation": "This stance aims to set education standards to the ideals and values of the community",' +
  '"negativeStance": "Common Core Standards",' +
  '"negativeExplanation": "This stance aims to set education standards to the ideals and values of the state"' +
'}, {' +
  '"icon": "fa-solid fa-viruses",' +
  '"affirmativeStance": "Personal Health Autonomy",' +
  '"affirmativeExplanation": "This stance aims to provide greater autonomy to citizens who choose to remain unvaccinated",' +
  '"negativeStance": "Public Health Security",' +
  '"negativeExplanation": "This stance prioritizes enforcing health measures in spaces where they could be hazardous to public health"' +
'}, {' +
  '"icon": "fa-solid fa-fingerprint",' +
  '"affirmativeStance": "Digital Identity Privacy",' +
  '"affirmativeExplanation": "This focus prioritizes restricting private interests from collecting personal data",' +
  '"negativeStance": null,' +
  '"negativeExplanation": null' +
'}, {' +
  '"icon": "fa-solid fa-sack-dollar",' +
  '"affirmativeStance": "Education Funding",' +
  '"affirmativeExplanation": "This focus prioritizes increasing funding for subsidized tuition and teacher pay",' +
  '"negativeStance": null,' +
  '"negativeExplanation": null' +
'}, {' +
  '"icon": "fa-solid fa-money-check-dollar",' +
  '"affirmativeStance": "Income Parity",' +
  '"affirmativeExplanation": "This focus prioritizes flattening the earnings of the wealthy across gender, LGBTQIA+, racial, and criminal boundaries and increasing funding for welfare, social security, veteran services, and work benefits",' +
  '"negativeStance": null,' +
  '"negativeExplanation": null' +
'}, {' +
  '"icon": "fa-solid fa-handshake",' +
  '"affirmativeStance": "Common Good Leadership",' +
  '"affirmativeExplanation": "This focus prioritizes on cooperating with leaders across political divides while increasing efficiency and reducing spending",' +
  '"negativeStance": null,' +
  '"negativeExplanation": null' +
'}, {' +
  '"icon": "fa-solid fa-user-doctor",' +
  '"affirmativeStance": "Expanded Health Services",' +
  '"affirmativeExplanation": "This focus aims to increase funding for public counseling, mental health programs, and pandemic preparedness",' +
  '"negativeStance": null,' +
  '"negativeExplanation": null' +
'}, {' +
  '"icon": "fa-solid fa-bottle-water",' +
  '"affirmativeStance": "Sustainable Development",' +
  '"affirmativeExplanation": "This focus prioritizes the clean up and restrictions of materials that are hazardous to human health and wildlife, such as lead, plastic, and pesticides",' +
  '"negativeStance": null,' +
  '"negativeExplanation": null' +
'}, {' +
  '"icon": "fa-solid fa-bus",' +
  '"affirmativeStance": "Accessibility",' +
  '"affirmativeExplanation": "This focus prioritizes inclusive urban design, including keeping transportation public and housing affordable",' +
  '"negativeStance": null,' +
  '"negativeExplanation": null' +
'}, {' +
  '"icon": "fa-solid fa-industry",' +
  '"affirmativeStance": "Carbon Emmission Regulations",' +
  '"affirmativeExplanation": "This focus aims to regulate and tax where energy comes from and how much is used",' +
  '"negativeStance": null,' +
  '"negativeExplanation": null' +
'}, {' +
  '"icon": "fa-solid fa-tree",' +
  '"affirmativeStance": "Natural Resource Security",' +
  '"affirmativeExplanation": "This focus prioritizes Earth\'s biodiversity and powers land, ocean, forest, and wildlife conservation efforts",' +
  '"negativeStance": null,' +
  '"negativeExplanation": null' +
'}, {' +
  '"icon": "fa-solid fa-earth-americas",' +
  '"affirmativeStance": "International Cooperation",' +
  '"affirmativeExplanation": "This focus aims to foster a greater coordination abroad, especially on global issues such as the Paris Agreement",' +
  '"negativeStance": null,' +
  '"negativeExplanation": null' +
'}, {' +
  '"icon": "fa-solid fa-person-booth",' +
  '"affirmativeStance": "Voter and Government Transparency",' +
  '"affirmativeExplanation": "This focus aims to increase transparency of public officials and the democratic process",' +
  '"negativeStance": null,' +
  '"negativeExplanation": null' +
'}, {' +
  '"icon": "fa-solid fa-scale-balanced",' +
  '"affirmativeStance": "Police and Justice Reform",' +
  '"affirmativeExplanation": "This focus prioritizes the reform local law enforcement",' +
  '"negativeStance": null,' +
  '"negativeExplanation": null' +
'}, {' +
  '"icon": "fa-solid fa-face-smile-beam",' +
  '"affirmativeStance": "Ethical Treatments and Standards",' +
  '"affirmativeExplanation": "This focus aims to raise the ethical standards of which drug abusers, the homeless, animals and livestock are held to",' +
  '"negativeStance": null,' +
  '"negativeExplanation": null' +
'}]'*/
const ISSUE = JSON.parse(JSON_TEXT);

//this random array is used to randomize all the issue elements on each run
const a = shuffle(Array.from(Array(ISSUE.length).keys()));
function shuffle(array) {
  let m = array.length, t, r;
  while (m) {
    r = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[r];
    array[r] = t;
  }
  return array;
}

const clicked = [];
clicked.length = ISSUE.length;

//randomizes each stance issue to be either affirmative or negative
window.onload = () => { 
  for(let i = 0; i < ISSUE.length; i++) {
    if(ISSUE[a[i]].negativeStance == null) {
      continue;
    }
    let number = Math.random();
    if (number < 0.5) {
      clicked[i] = true;
    } else {
      clicked[i] = false;
    }
    switchStance(i);
  }
};

//adds each issue to the DOM
/*let ul = document.getElementById("list");
for(let i = 0; i < ISSUE.length; i++) {
  let listItem = create("li", null,
    [["span", [["class", "info"]],
      [["i", [["class", null], ["alt", "no icon found :("]], null, true], 
      ["span", [["class", "issue-name"]], null, true], 
      ["p", [["class", "info-text"]], null, true]], 
    false], 
    ["input", [["type", "range"], ["min", "0"], ["max", "4"], ["value", "0"], ["class", "user-rating"], ["onchange", `updateValue(${i})`], ["id", `item-${a[i]}`]], null, true], 
    ["i", [["onclick", `switchStance(${i})`], ["class", null]], null, true], //note the second variable "${i}" is only necessary for the code to run
    ["span", [["class", "value"], ["for", `input-${a[i]}`]], null, true]], 
  false);
  ul.appendChild(listItem);
  ul.appendChild(create("br", null, null, true)); //page break
}*/

//recursively allows each attribute, child, and inner text of a single element be added to the DOM
function create(tagName, attributeData, childData, isLeaf) {
  let node = document.createElement(tagName);
  try {
    for (let i = 0; i < attributeData.length; i++) {
      let data = attributeData[i];
      node.setAttribute(data[0], data[1]);
    }
  } catch {}
  if(!isLeaf) { //recursively adds new children
    for (let j = 0; j < childData.length; j++) {
      let data = childData[j]
      node.appendChild(create(data[0], data[1], data[2], data[3]));
    }
  } else { //if the tag is a child, childData is turned into text
    try {
      node.innerHTML = childData.toString();
    } catch {}
  }
  return node;
}
  
//adds JSON data to each list item
for (let i = 0; i < ISSUE.length; i++) {
  try{
    document.querySelectorAll("li > span > i")[i].className = ISSUE[a[i]].icon;
    document.querySelectorAll(".issue-name")[i].innerHTML = ` ${ISSUE[a[i]].affirmativeStance}`;
    document.querySelectorAll(".info-text")[i].innerHTML = ISSUE[a[i]].affirmativeExplanation;
    if(ISSUE[a[i]].negativeStance == null) {
      continue;
    }
    document.querySelectorAll("li > i")[i].className = "fa-solid fa-repeat";
  } catch {
    console.log("not all files are being read");
  }
}

function switchStance(i) {
  if (!clicked[i]) {
    clicked[i] = true;
    document.querySelectorAll(".issue-name")[i].innerHTML = ` ${ISSUE[a[i]].negativeStance}`;
    document.querySelectorAll(".info-text")[i].innerHTML = ISSUE[a[i]].negativeExplanation;
  } else {
    clicked[i] = false;
    document.querySelectorAll(".issue-name")[i].innerHTML = ` ${ISSUE[a[i]].affirmativeStance}`;
    document.querySelectorAll(".info-text")[i].innerHTML = ISSUE[a[i]].affirmativeExplanation;
  }
  updateValue(i);
}

function updateValue(i) {
  if(!clicked[i]) {
    document.querySelectorAll(".value")[i].innerHTML = document.querySelectorAll(".user-rating")[i].value; //the default
  } else {
    document.querySelectorAll(".value")[i].innerHTML = Math.abs(document.querySelectorAll(".user-rating")[i].value) * -1;
  }
}


/* This code handles collapsable tab */
let tabs = document.getElementsByClassName("collapsible"); //selects every html element containing 'class="collapsable'" 
for (let i = 0; i < tabs.length; i++) { //iterates through every element containing 'class="collapsable"'
  tabs[i].addEventListener("click", function() {
    this.classList.toggle("active");        //all this does is .toggle the css to change the background color
    let content = this.nextElementSibling;  //this grabs the div following the button
    if (content.style.display === "block") { //this changes the button between block and none
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}