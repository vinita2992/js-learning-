// primitive data types -- 7 types

// string
let str = "Hello, World!";
// number  
let num = 42;
// boolean
let isTrue = true;
// null
let emptyValue = null;
// undefined
let notDefined;
// symbol
let uniqueSymbol = Symbol("unique");
// bigint
let bigIntValue = BigInt(1234567890123456789012345678901234567890);

// (Referance) non-primitive data types -- 1 type

// Array
let arr = [1, 2, 3, 4, 5];
// object
let obj = {
  name: "Vinita Nagpure",
  age: 30,
  isStudent: false
};
// function
function greet() {
  return "Hello, Vinita!";
}

const myFunction = function() {
   console.log("This is a function expression");
}

console.log(typeof myFunction); // This will log the type of myFunction, which is 'function'