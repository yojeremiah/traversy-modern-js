// LOGGING TO THE CONSOLE
/*
(console.log('Let\'s learn some JavaScript');
console.log(123);
console.log(true);
var greeting = 'Hello';
console.log(greeting);
console.log([1, 2, 3, 4]);
console.log({ a: 1, b: 2 });
console.table({ a: 1, b: 2 });
console.error('This is an error');
console.clear();
console.warn('This is a warning');
console.time('Hello');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.timeEnd('Hello');


// VARIABLES
// Declare a global-level variable (var)
var name = 'John Doe';
console.log(name);
name = 'Jane Dawn';
// Initialize a variable
var greeting;
console.log(greeting);
greeting = 'Hello Jay!';
console.log(greeting);
// Variables can only include:
// Letters, numbers, '_' and '$'
// Variables cannot start with a number
// Multi-World Variable Conventions
var firstName = 'Camel'; // Camel case
var last_name = 'Case'; // Underscore
var MiddleName = 'Middle'; // Pascal case
// Declare a block-level variable (let)
let food = 'Apple';
console.log(food);
food = 'Banana';
// Declare a constant variable (const)
// Cannot reassign & must be assigned a value
const color = 'Red';
console.log(color);
// color = 'Blue'; ERROR - cannot change a const
// const person; ERROR - not assigned
// Object/array values can still be mutated
const boy = {
  name: 'Alex',
  age: 30
}
boy.age = 21;
console.table(boy);


// DATA TYPES
// Primitive types: string, number, boolean, Null, Undefined, Symbols (ES6)
const name = 'Jay Schutlz'; // String
console.log(typeof (name));
const age = 24; // Number
console.log(typeof (age));
const hasKids = false; // Boolean
console.log(typeof (hasKids));
const car = null; // Null (object)
console.log(typeof (car));
let test; // Undefined
console.log(typeof (test));
const sym = Symbol(); // Symbol
console.log(sym);
// Reference types (objects): Arrays, object literals, functions, dates, anything else...
const hobbies = ['Fitness', 'Coding', 'Music']; // Array
const address = {
  city: 'San Diego',
  state: 'CA'
}; // Object
const today = new Date();
console.log(today);


// TYPE CONVERSION/COERCION
let value;
// Number to string
value = 5;
value = String(value);
value = String(4 + 4);
// Bool to string
value = String(true);
// Date to string
value = String(new Date());
// Array to string
value = String([1, 2, 3]);
// toString Method
value = (5).toString();
// String to number
value = Number('5');
// Boolean to number
value = Number(true);
value = Number([1, 2]);
value = parseInt('100');
value = parseFloat('100.31');
// Output value to console
console.log(value);
console.log(typeof value);
// console.log(value.length);
console.log(value.toFixed(3));
const val1 = 1;
const val2 = '2';
const sum = Number(val1 + val2);
console.log(sum);
console.log(typeof sum);'


// NUMBERS & MATH OBJECTS
const num1 = 100;
const num2 = 50;
let val;
// Simple math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;
// Math object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(4.2); // Round up;
val = Math.floor(2.6) // Round down;
val = Math.sqrt(16);
val = Math.abs(-23);
val = Math.pow(5, 3); // Base, exponent
val = Math.min(4, 2, 673, 123);
val = Math.max(4, 2, 673, 123);
val = Math.random(); // Random decimal
// Random number between 0 and 19
val = Math.floor(Math.random() * 20);
// Random number between 1 and 20
val = Math.floor(Math.random() * 20 - 1 + 1) + 1;
val = Math.floor(Math.random() * 20) + 1;
console.log(val);
// Random number between min and max
// Math.floor(Math.random() * (max - min + 1)) + min


// STRINGS & STRING METHODS
const firstName = 'William';
const lastName = 'Smith';
const str = 'Hello there my name is Jay';
const tags = 'webdesign, webdev, ux/ui'
const age = 18;
let val;
val = firstName + lastName;
// Concatenation
val = firstName + ' ' + lastName;
// Appending
val = 'Jay ';
val += 'Schultz';
val = 'Hello, my name is ' + firstName + ' and I am ' + age;
// Escape characters
val = 'It\'s useful to use the escape character (\\) when coding'
// Length property
val = firstName.length; // Property does not need (), unlike a method
// Concat method
val = firstName.concat(' ', lastName);
// Change case
val = firstName.toLowerCase();
val = firstName.toUpperCase();
// Index notation (array indexing)
val = firstName[0];
// indexOf method
val = firstName.indexOf('l'); // Finds first occurrence of letter
val = firstName.lastIndexOf('l'); // Finds last occurrence
// charAt() method
val = firstName.charAt(5); // Returns letter at given index
// Get last character
val = firstName.charAt(firstName.length - 1);
// Substring()
val = firstName.substring(0, 4); // Returns 'Will'
// Slice
val = firstName.slice(-3);
// Split
val = str.split(' ');
val = tags.split(',');
// Replace
val = str.replace('Jay', 'Jack');
// Includes
val = str.includes('Jay');
val = str.includes('Bay');
val = firstName[firstName.length - 1];
console.log(val);


// TEMPLATE LITERALS
const name = 'John';
const age = 31;
const job = 'Web developer';
const city = 'Miami';
let html;
function hello() {
  return 'Hello';
}
// Without template literals (ES5);
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + ' </li></ul>';
// Using template literals (ES6)
html = `
  <ul>
  <li>Name: ${name}</li>
  <li>Age: ${age}</li>
  <li>Job: ${job}</li>
  <li>City: ${city}</li>
  <li>Function: ${hello()}</li>
  <li>Math: ${2 + 2}</li>
  <li>Conditionals: ${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;
document.body.innerHTML = html;


// ARRAYS & ARRAY METHODS
const numbers = [12, 238, 34, 45, 67];
const numbers2 = new Array(1, 2, 3);
const fruit = ['Apple, Banana, Orange, Kiwi'];
const mixed = [1, 'Str', true, null, { a: 1, b: 1 }, new Date()];
let val;
// Array Length
val = numbers.length;
// Check if item is an array
val = Array.isArray(2);
val = Array.isArray(numbers);
// Get single value (index starts at zero)
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(45);
// Mutating Arrays
// Add on to end
// numbers.push(19);
// // Add on to start
// numbers.unshift(13);
// // Remove from end
// numbers.pop();
// // Remove from front
// numbers.shift();
// // Splice values
// numbers.splice(1, 2); // (Start, end) index;
// // Reverse array
// numbers.reverse();
// Concatenate
val = numbers.concat(numbers2);
// Sorting arrays
val = fruit.sort();
val = numbers.sort();
// Use the 'compare function'
val = numbers.sort(function (x, y) {
  return x - y;
});
// Reverse sort
val = numbers.sort(function (x, y) {
  return y - x;
});
// Find
function under50(num) {
  return num < 50;
}
val = numbers.find(under50);

console.log(numbers);
console.log(val);


// OBJECT LITERALS
let val;
const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'oldskool@aol.com',
  hobbies: ['sports', 'music'],
  address: {
    city: 'san diego',
    state: 'ca'
  },
  getBirthYear() {
    return 2019 - this.age;
  }
}; // Object literal
val = person;
val = person.firstName; // Property;
val = person['firstName']; // Bracket notation
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear(); // Method is a function property
const people = [
  { name: 'John', age: 20 },
  { name: 'Mike', age: 22 }
]
for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);;
}
*/

// DATES & TIMES
let val;
const today = new Date();
let birthday = new Date('1-12-1994 11:25:00');
birthday = new Date('January 12 1994');
birthday = new Date('1/12/1994');
// Date object methods
val = today.getMonth(); // Zero-based, like arrays
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();
birthday.setMonth(2);
birthday.setDate(24);
birthday.setFullYear(2029);
birthday.setHours(4);
birthday.setMinutes(45);
birthday.setSeconds(43);
console.log(birthday);
