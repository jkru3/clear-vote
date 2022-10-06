import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

export default function Slider({ icon, affirmativeStance, affirmativeExplanation, negativeStance, negativeExplanation }) {

  const popover = (
    <Popover id="popover-basic" className='m-1'>
      <Popover.Body>
        "https://www.youtube.com/watch?v=t8JK5bVoVBw"
      </Popover.Body>
    </Popover>
  );

  const Details = () => (
    <OverlayTrigger trigger="click" rootClose placement={ window.innerWidth > 768 ? "right" : "top" } overlay={popover}>
      <input className="icon" type="image" src={require('../img/circle-question-regular.svg').default} alt={"¯\\_(ツ)_/¯"} data-bs-toggle="popover" data-placement="top"/>
    </OverlayTrigger>
  );

  function onClick() {
    {/* add state and useState first! */}
  }

  return (
    <div>
      <div className="row">
        <div className="col col-auto dropdown">
          <Form.Select aria-label="Default select example">
            <option value="1">{ affirmativeStance }</option>
            <option value="0">Neutral / Undecided</option>
            <option value="-1">{ negativeStance }</option>
          </Form.Select>
          <ul className="dropdown-menu" aria-labelledby="dropdown-0">
            <li className="dropdown-item affirmative" >{ affirmativeStance }</li>
            <li className="dropdown-item neutral" onclick="switchDropdown(0, 0)">Neutral / Undecided</li>
            <li className="dropdown-item negative" onclick="switchDropdown(-1, 0)">{ negativeStance }</li>
          </ul>
        </div>
        <div className="col my-auto">
          <Details />
        </div>
      </div>
      <div className="row">
        <div className="slidecontainer">
          <input type="range" min="0" max="100" value="0" className="slider" />
          <div className="selector">
            {/* change to SelectButton */}<div className="select-btn" style={{backgroundImage: `url('..img/person-praying-solid.svg}')`}}></div>
            <div className="SelectValue"></div>
          </div>
          {/* should this be inside the selector? */}<div className="ProgressBar"></div>
        </div>
      </div>
    </div>
  

/*const ISSUE = JSON.parse(JSON_TEXT);
const bsPopover = [];
const slider = []; 
const selector = [];
const SelectValue = [];
const ProgressBar = []; 
const afrm = [];
const ntrl = [];
const ngtv = [];

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


//adds each issue to the DOM (tag, attributes, children(text or more tags), isLeaf)
let ul = document.getElementById("list");
for(let i = 0; i < ISSUE.length; i++) {
  let listItem = create("li", null,
    [["div", [["class", "row"]],
      [["div", [["class", "col col-auto dropdown"]],
        [["button", [["class", "btn dropdown-toggle bg-light bg-opacity-75"], ["type", "button"], ["id", `dropdown-${i}`], ["data-bs-toggle", "dropdown"], ["aria-expanded", "false"]],
          [["span", [["class", "issue-name"]], null, true]],
        false],
        ["ul", [["class", "dropdown-menu"], ["aria-labelledby", `dropdown-${i}`]],
          [["li", [["class", "dropdown-item affirmative"], ["onclick", `switchDropdown(1, ${i}`]], null, true],
          ["li", [["class", "dropdown-item neutral"], ["onclick", `switchDropdown(1, ${i})`]], null, true],
          ["li", [["class", "dropdown-item negative"], ["onclick", `switchDropdown(1, ${i})`]], null, true]],
        false]],
      false], 
      ["div", [["class", "col my-auto"]], 
        [["input", [["type", "range"], ["min", "0"], ["max", "100"], ["value", "0"], ["class", "slider"]], null, true],
        ["div", [["class", "selector"]],
          [["div", [["class", "select-btn"], ["style", ""]], null, true],
          ["div", [["class", "SelectValue"]], null, true]], 
        false]],
      false]],
    false]], 
  false);
        
  ul.appendChild(listItem);
  //ul.appendChild(create("br", null, null, true)); //page break
}

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
    
    //this part is for the popover
    bsPopover[i] = new bootstrap.Popover(document.querySelectorAll('[data-bs-toggle="popover"]')[i], {
      placement: 'left',
      trigger: 'focus',
      html: true
    })

    //this part is for the slider and it's value
    slider[i] = document.querySelectorAll(".slider")[i];
    selector[i] = document.querySelectorAll(".selector")[i];
    SelectValue[i] = document.querySelectorAll(".SelectValue")[i];
    ProgressBar[i] = document.querySelectorAll(".ProgressBar")[i];
    afrm[i] = document.querySelectorAll(".affirmative")[i];
    ntrl[i] = document.querySelectorAll(".neutral")[i];
    ngtv[i] = document.querySelectorAll(".negative")[i];
    
    SelectValue[i].innerHTML = slider[i].value;
    
    slider[i].oninput = function() {
      SelectValue[i].innerHTML = slider[i].value;
      selector[i].style.left = this.value + "%";
      ProgressBar[i].style.width = this.value + "%";
    }
    
    //this part populates the icon, issue, and text
    document.querySelectorAll(".select-btn")[i].style = "background-image: url('../assets/" + ISSUE[a[i]].icon + "');";
    afrm[i].innerHTML = ISSUE[a[i]].affirmativeStance;
    if(ISSUE[a[i]].negativeStance == null) {
      bsPopover[i]._config.content = `<p>${ISSUE[a[i]].affirmativeExplanation}</p>`
      continue;
    }
    ngtv[i].innerHTML = ISSUE[a[i]].negativeStance;
    let number = Math.random();
    if (number > 0.5) {
      switchDropdown(1, i);
    } else {
      switchDropdown(-1, i);
    }
  } catch {
    console.log("not all files are being read");
  }
}

function switchDropdown(switchTo, i) {
  switch(switchTo) {
    case 1:
      document.querySelectorAll(".issue-name")[i].innerHTML = ISSUE[a[i]].affirmativeStance;
      slider[i].value = 0;
      SelectValue[i].innerHTML = slider[i].value;
      selector[i].style.left = "0%";
      ProgressBar[i].style.width = "0%";
      slider[i].removeAttribute("disabled");
      bsPopover[i]._config.content = `<p>${ISSUE[a[i]].affirmativeExplanation}</p>`
      afrm[i].style = "display: none";
      ntrl[i].removeAttribute("style");
      ngtv[i].removeAttribute("style");
      break;
    case 0:
      document.querySelectorAll(".issue-name")[i].innerHTML = "Neutral";
      slider[i].value = 0;
      SelectValue[i].innerHTML = slider[i].value;
      selector[i].style.left = "0%";
      ProgressBar[i].style.width = "0%";
      slider[i].setAttribute("disabled", "");
      bsPopover[i]._config.content = "No opinion, not sure, or undecided"
      ntrl[i].style = "display: none";
      afrm[i].removeAttribute("style"); 
      ngtv[i].removeAttribute("style");
      break;
    case -1:
      document.querySelectorAll(".issue-name")[i].innerHTML = ISSUE[a[i]].negativeStance;
      slider[i].value = 0;
      SelectValue[i].innerHTML = slider[i].value;
      selector[i].style.left = "0%";
      ProgressBar[i].style.width = "0%";
      slider[i].removeAttribute("disabled");
      bsPopover[i]._config.content = `<p>${ISSUE[a[i]].negativeExplanation}</p>`
      ngtv[i].style = "display: none";
      afrm[i].removeAttribute("style"); 
      ntrl[i].removeAttribute("style");
      break;
  }*/
  )
}
