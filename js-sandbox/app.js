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
*/

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