/*

// CONSTRUCTORS AND 'THIS' KEYWORD
// Person Object Constructor (starts with capital letter)
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// const brad = new Person('brad', 36);
// const john = new Person('john', 21);

// 'this' in the global scope refers to the window object
console.log(this);

const bradv2 = new Person('Brad', '12/13/1994');
console.log(bradv2.calculateAge());


// BUILT IN CONSTRUCTORS
// Strings
// Stored as string
const name1 = 'Jack';
// Stored as object
const name2 = new String('Jack');
name2.foo = 'bar';
if (name2 === 'Jack') {
  console.log('YES');
} else {
  console.log('NO');
}
// Number
const num1 = 5;
const num2 = new Number(5);
// Boolean
const bool1 = true;
const bool2 = new Boolean(true);
// Functions
const getSum1 = function(x, y) {
  return x + y;
}
const getSum2 = new Function('x', 'y', 'return 1 + 1');
// Objects
const john1 = {
  name: 'John'
};
const jon2 = new Object({name: 'John'});
// Arrays
const array1 = [1, 2, 3];
const array2 = new Array(1,2,3,);
// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');


// PROTOTYPES EXPLAINED
// Person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function() {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}
// Calculate age in the prototype
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
// Get full name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}
// Gets married
Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
}
const john = new Person('john', 'doe', '08/12/1990');
const mary = new Person('mary', 'mack', '06/12/1992');


// PROTOTYPAL INHERITANCE
// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
}
// Create person
const person1 = new Person('John', 'Doe');
console.log(person1.greeting());
// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}
// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);
// Make the customer.prototype return Customer()
Customer.prototype.constructor = Customer;
// Customer greeting
Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}, welcome to our company`;
}
// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Std');
console.log(customer1.greeting());

// OBJECT.CREATE
const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}!`
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Smith';
mary.age = 30;
mary.getsMarried('Thompson');
console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
  firstName: {value: 'Brad'},
  lastName: {value: 'Johnson'},
  age: {value: 30}
});
console.log(brad);
console.log(brad.greeting());
*/