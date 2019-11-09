// GETTING TO KNOW THE DOM

// Example
let val;

// window object 
val = window;

// document
val = document;

// HTML collection
val = document.all;

// Access via index
val = document.all[20];

val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// Can access items without query sekectors but nor recommended
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;

val = document.links;
val = document.links[4];
val = document.links[4].className;
val = document.links[4].classList;
val = document.links[4].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[1];

val = document.scripts[2].getAttribute('src');

// Two simple ways to convert HTML collections to Arrays
let firstArray = Array.from(document.scripts);
// console.log(firstArray);

let secondArray = [...document.scripts ];
// console.log(secondArray);

// There is anouther way but not as simple i think using call()

// DOM SELECTORS 
// Single Elements vs Multiple Element Selectors

// document.getElementById() 
val = document.getElementById('task-title').style.backgroundColor = 'red';
val = document.getElementById('task-title').style.color = 'white';
val = document.getElementById('task-title').style.textAlign = 'center';
val = document.getElementById('task-title').style.padding = '1rem'

val = document.getElementById('task-title');

// Change content 1 - 3
let selectedItem = document.getElementById('task-title');
selectedItem.textContent = "Hello World";
selectedItem.innerText = "Hello Again";
selectedItem.innerHTML = '<em>hello again</em>';

// document.querySelector() : only gets the first item if more than one
// single selector only

// document.querySelector() returns html collection

var myItem = document.querySelector('li');
// console.log(myItem);

// document.getElementByClassName()
var myItem = document.getElementsByClassName('collection-item');
// console.log(myItem);

(() => {
    let item = [...myItem];
    item.forEach( (element) => {
        // console.log(element, 'IIFE');
    })
})()

// document.getElementsByTagName()

var myItem = document.getElementsByTagName('li');
// console.log(myItem);

(() => {
    let item = [...myItem];
    item.forEach( (element) => {
        // console.log(element, 'IIFE');
    })
})()

// Node List vs HTML Collection : can use for each to loop
// querySelectorAll() returns node list

var myItem = document.querySelectorAll('li');
// console.log(myItem);

(() => {
    let item = myItem;
    item.forEach( (element) => {
        // console.log(element, 'Node list');
    })
})()

// Traversing the DOM

val = undefined;


const list = document.querySelector('ul');
console.log(list);

const listItem = document.querySelector('li');
// console.log(listItem);

// Get child nodes with childNodes
console.log(list.childNodes);

// Child nodes selects everything. including line breaks


// Get children Element Nodes with children
console.log(list.children[0].children);

console.log(listItem.firstChild, 'from first child');
console.log(listItem.firstElementChild, 'from first element child');


console.log(listItem.lastChild, 'from last child');
console.log(listItem.lastElementChild, 'from last element child');



// get length of elements with childElementCount
console.log(listItem.childElementCount, 'count elements');

// get the parent
console.log(listItem.parentNode.parentNode, 'count elements');
console.log(listItem.parentNode.parentElement, 'count elements');


// Sibking or adjacent elements
console.log(listItem.nextSibling);
console.log(listItem.nextElementSibling);


console.log(listItem.previousSibling);
console.log(listItem.previousElementSibling);


// CREATEING ELEMENTS

const rootElement = document.getElementById('root');
console.log(rootElement, 'My Div');

// Create Element
const div = document.createElement('div');
div.className = 'my-div';
div.setAttribute('name', 'Test');
 

// Create heading
const heading = document.createElement('h1');
heading.className = 'title';
heading.appendChild(document.createTextNode('Hello World Again'))




// Add heading to div
div.appendChild(heading);

rootElement.appendChild(div);








console.log(div);




// document

/*
// document.all returns an HTML collection.  Which can't be looped with forEach
// you can use for loop instead and access it via index.

// Use For Loop 
(() => {
    let item = document.all;
    
    for ( let i = 0; i < item.length; i++) {
        console.log(item[i], "From For Loop")
    }
})()


let myArray = [ ...document.all ];

// Use forEadh
(() => {
    let item = myArray;
    item.forEach( (element) => {
        console.log(element, 'IIFE');
    })
})()

*/

//console.log(val, "Your Value");


// REPALCING ELEMENST WITH JAVASCRIPT

// Create Element 

const newHeading = document.createElement('h1');
const innerText = document.createTextNode('Jabascript'); 
newHeading.appendChild(innerText);
console.log(newHeading);

const oldHeading = document.getElementsById('task-title');
