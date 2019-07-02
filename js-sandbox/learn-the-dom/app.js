// EXAMINING THE DOCUMENT OBJECT
/*
let val;

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function (script) {
  console.log(script.getAttribute('src'));
});

console.log(val);


// DOM SELECTION FOR SINGLE ELEMENTS
// document.getElementByID()
console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);
const taskTitle = document.getElementById('task-title');

// Change styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '1rem';

// Change the content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Task List';
taskTitle.innerHTML = '<span style="color: red">Task List</span>';

// document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('ul li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'pink';
document.querySelector('li:nth-child(4)').textContent = 'List Item Changed';
document.querySelector('li:nth-child(odd)').textContent = 'Odd items';
document.querySelector('li:nth-child(even)').textContent = 'Even items';


// DOM SELECTION FOR MULTIPLE ELEMENTS
// document.getElementsByClassName()
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[2]);
items[2].style.color = 'red';
items[2].textContent = 'Blue';

// document.getElementsByTagName()
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[2]);
lis[3].style.color = 'blue';
lis[3].textContent = 'Red';

// Convert HTML Collection into an array
lis = Array.from(lis);
lis.forEach(function (li) {
  console.log(li.innerText);
});

// document.querySelectorAll()
const listItems = document.querySelectorAll('ul.collection li.collection-item');
let oddItems = document.querySelectorAll('li:nth-child(odd)');
const evenItems = document.querySelectorAll('li:nth-child(even)');
oddItems = Array.from(oddItems);
oddItems.forEach(function (item) {
  item.style.background = '#ccc';
});
for (let i = 0; i < evenItems.length; i++) {
  evenItems[i].style.background = '#f4f4f4';
}


// TRAVERSING THE DOM
let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;
// Node Types:
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes
val = list.children;
val = list.children[0].textContent = 'Hello';
// Children of children
val = list.children[3].children;
// First Child
val = list.firstChild;
val = list.firstElementChild;
// Last Child
val = list.lastChild;
val = list.lastElementChild;
// Count Child Elements
val = list.childElementCount;
// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
// Parents of parents
val = listItem.parentElement.parentElement;
// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
// Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);


// CREATING ELEMENTS
// Create an li element
const li = document.createElement('li');
// Add a class/id
li.className = 'collection-item';
li.id = 'new-item';
// Add an attribute
li.setAttribute('title', 'New Item');
// Create text node and append
li.appendChild(document.createTextNode('Created with JS'));

// Create new link element
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';
// Append the link to the li
li.appendChild(link);

// Append li as child to the ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);


// REMOVING/REPLACING ELEMENTS
// Replace an element
// Create a new element to use during replacement
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Grab the heading we want to replace
const oldHeading = document.getElementById('task-title');
// Parent element
const cardAction = document.querySelector('.card-action');

// Replace the heading
cardAction.replaceChild(newHeading, oldHeading);

// Remove an element
// Grab all list items & list
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove a list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// Classes and classList
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];
let val;
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'https://google.com');
link.setAttribute('title', 'Google');
link.removeAttribute('title');
val = link.hasAttribute('href');


// EVENT OBJECT & EVENT LISTENERS
// Select the button
const clearBtn = document.querySelector('.clear-tasks');
// Event listener with an anonymous function
// clearBtn.addEventListener('click', function (e) {
//   console.log('Hello');
//   e.preventDefault();
// });
// Event listener with a named function (declaration)
function onClick(e) {
  let val;
  val = e;

  // Event target element
  val = e.target;
  val = e.target.className;
  val = e.target.classList;

  // Event type
  val = e.type;
  // Timestamp
  val = e.timeStamp;
  // Coordinates relative to the window
  val = e.clientY;
  val = e.clientX;
  // Coordinates relative to the element
  val = e.offsetY;
  val = e.offsetX;
  console.log(val);
}
clearBtn.addEventListener('click', onClick);


// MOUSE EVENTS
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');
// Click
// clearBtn.addEventListener('click', runEvent);
// // Double Click
// clearBtn.addEventListener('dblclick', runEvent);
// // Mouse Down
// clearBtn.addEventListener('mousedown', runEvent);
// // Mouse Up
// clearBtn.addEventListener('mouseup', runEvent);
// // Mouse Enter
// card.addEventListener('mouseenter', runEvent);
// // Mouse Leave
// card.addEventListener('mouseleave', runEvent);
// // Mouse Over
// card.addEventListener('mouseover', runEvent);
// // Mouse Out
// card.addEventListener('mouseout', runEvent);
// Mouse Move
card.addEventListener('mousemove', runEvent);

// Event handler
function runEvent(e) {
  console.log(`Event type: ${e.type}`);
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}


// KEYBOARD & INPUT EVENTS
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Clear the form value
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown', runEvent);
// Keyup
// taskInput.addEventListener('keyup', runEvent);
// Keypress
// taskInput.addEventListener('keypress', runEvent);
// Focus
// taskInput.addEventListener('focus', runEvent);
// Blur
// taskInput.addEventListener('blur', runEvent);
// Cut
// taskInput.addEventListener('cut', runEvent);
// Paste
// taskInput.addEventListener('paste', runEvent);
// Input Event
// taskInput.addEventListener('input', runEvent);
// Change (for select/dropdowns)
// select.addEventListener('change', runEvent)

function runEvent(e) {
  console.log(`Event type: ${e.type}`);
  // console.log(e.target.value);
  // heading.innerText = e.target.value;
  // Get input value
  // console.log(taskInput.value);
  // e.preventDefault();
}


// EVENT BUBBLING & DELEGATION
// Bubbling Example:
// document.querySelector('.card-title').addEventListener('click', function () {
//   console.log('card-title');
// });
// document.querySelector('.card-content').addEventListener('click', function () {
//   console.log('card-content');
// });
// document.querySelector('.card').addEventListener('click', function () {
//   console.log('card');
// });
// document.querySelector('.col').addEventListener('click', function () {
//   console.log('col');
// });

// Delegation example:
document.body.addEventListener('click', deleteItem);


function deleteItem(e) {
  // if (e.target.parentElement.className === 'delete-item secondary-content') {
  //   console.log('Delete the item');
  //   console.log(e.target);
  // }
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('Delete the item');
    e.target.parentElement.parentElement.remove();
  }
}
*/

// LOCAL & SESSION STORAGE
// Set local storage item
localStorage.setItem('name', 'john');
localStorage.setItem('age', 33);
// Set session storage
sessionStorage.setItem('name', 'Beth');

// Remove item from storage
// localStorage.removeItem('name');

// Get value from storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');
// console.log(name);
// console.log(age);

// Clear local storage
// localStorage.clear();

document.querySelector('form').addEventListener('submit', function (e) {
  // Grab the input value
  const task = document.getElementById('task').value;

  let tasks;
  // Check if any tasks exist in storage
  if (localStorage.getItem('tasks') === null) {
    // If none exist, initialize an empty array
    tasks = [];
  } else {
    ;
    // If tasks exist, grab and parse the local data
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  // Add the new task to the array
  tasks.push(task);

  // Store the array (as a string) back to local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));

  // Alert task was saved
  alert('Task Saved');

  // Prevent default button behavior
  e.preventDefault();

});

// Grab the tasks list and parse so we can use array methods
const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function (task) {
  console.log(task);
});