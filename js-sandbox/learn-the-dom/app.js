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
*/

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