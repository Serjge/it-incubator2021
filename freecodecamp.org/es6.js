//test 01

let catName;
let quote;
function catTalk() {
  'use strict';

  catName = 'Oliver';
  quote = catName + ' says Meow!';
}
catTalk();

//test 02

function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

//test 03

function printManyTimes(str) {
  // Only change code below this line

  const SENTENCE = str + ' is cool!';
  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }

  // Only change code above this line
}
printManyTimes('freeCodeCamp');

//test 04

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();

//test 05

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

//test 06

var magic = function () {
  return new Date();
};

const magic = () => new Date(); // преобразованная функция

//test 07

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

//test 08

// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line

//test 09

const sum = (...args) => {
  let tmp = 0;
  for (let arg of args) tmp += arg;

  return tmp;
};

//test 10

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1]; // Change this line

console.log(arr2);

//test 11

//test 12

//test 13

//test 14

//test 15

//test 16

//test 17

//test 18

//test 19

//test 20

//test 21

//test 22

//test 23

//test 24

//test 25

//test 26

//test 27

//test 28

//test 29

//test 30

//test 31
