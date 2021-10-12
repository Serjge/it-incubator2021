// 01 test

// one line comment

/*
multi-line comment
*/

//02 test

var myName;

//03 test

// Setup
var a;
a = 7;
// Only change code below this line

//04 test

// Setup
var a;
a = 7;
var b;
b = a;
// Only change code below this line

//05 test

var a = 9;

//06 test

// Only change code below this line
var a = 5;
var b = 10;
var c = 'I am a';
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + ' String!';

// 07 test

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = 'A String';
titleCaseOver = 9000;

//08 test

var sum = 10 + 10;

// 09 test

var difference = 45 - 33;

//10 test

var product = 8 * 10;

//11 test

var quotient = 66 / 33;

//12 test

var myVar = 87;

// Only change code below this line
myVar++;

//13 test

var myVar = 11;

// Only change code below this line
myVar--;

//14 test

var myDecimal = 5.7;

// Only change code below this line

//15 test

var product = 2.0 * 2.5;

// 16 test

var quotient = 4.4 / 2.0; // Change this line

// 17 test

// Only change code below this line

var remainder = 11 % 3;

// 18 test

var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

// 19 test

var a = 11;
var b = 9;
var c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

// 20 test

var a = 5;
var b = 12;
var c = 4.6;

// Only change code below this line
a *= a;
b *= 3;
c *= 10;

// 21 test

var a = 48;
var b = 108;
var c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

// 22 test

var myFirstName = 'Sergey';
var myLastName = 'Dudkin';

// 23 test

var myStr = 'I am a "double quoted" string inside "double quotes".';
// Change this line

// 24 test

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// 25 test

var myStr; // Change this line

myStr = 'FirstLine\n\t\\SecondLine\nThirdLine';

// 26 test

var myStr; // Change this line

myStr = 'This is the start.' + ' ' + 'This is the end.';

// 27 test

// Only change code below this line

var myStr = 'This is the first sentence.';

myStr += ' This is the second sentence.';

// 28 test

// Only change code below this line
var myName = 'Sergey';
var myStr = 'My name is' + myName + 'and I am well!';

// 29 test

// Change code below this line

var someAdjective = 'best';
var myStr = 'Learning to code is ';

myStr += someAdjective;

// 30 test

// Setup
var lastNameLength = 0;
var lastName = 'Lovelace';

// Only change code below this line

lastNameLength = lastName.length;

// 31 test

// Setup
var firstLetterOfLastName = '';
var lastName = 'Lovelace';

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

// 32 test

// Setup
var myStr = 'Jello World';

// Only change code below this line
myStr = 'Hello World'; // Change this line
// Only change code above this line

// 33 test

// Setup
var lastName = 'Lovelace';

// Only change code below this line
var thirdLetterOfLastName = lastName[2]; // Change this line

// 34 test

// Setup
var lastName = 'Lovelace';

// Only change code below this line
var thirdLetterOfLastName = lastName[2]; // Change this line

// 35 test

// Setup
var lastName = 'Lovelace';

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

// 36 test

var myNoun = 'dog';
var myAdjective = 'big';
var myVerb = 'ran';
var myAdverb = 'quickly';

// Only change code below this line
var wordBlanks =
	'The ' + myAdjective + ' ' + myNoun + ' ' + myVerb + ' ' + myAdverb; // Change this line
// Only change code above this line

// 37 test

// Only change code below this line
var myArray = ['hi', 1, 2];

// 38 test

// Only change code below this line
var myArray = [
	['Sergey', 25],
	['Oleg', 25],
];

// 39 test

var myArray = [50, 60, 70];

var myData = myArray[0];

// 40 test

// Setup
var myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;

// 41 test

var myArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[[10, 11, 12], 13, 14],
];

var myData = myArray[2][1];

// 42 test

// Setup
var myArray = [
	['John', 23],
	['cat', 2],
];

// Only change code below this line

myArray.push(['dog', 3]);

// 43 test

// Setup
var myArray = [
	['John', 23],
	['cat', 2],
];

// Only change code below this line
var removedFromMyArray = myArray.pop();

// 44 test

// Setup
var myArray = [
	['John', 23],
	['dog', 3],
];

// Only change code below this line
var removedFromMyArray = myArray.shift();

// 45 test

// Setup
var myArray = [
	['John', 23],
	['dog', 3],
];
myArray.shift();

// Only change code below this line

myArray.unshift(['Paul', 35]);

// 46 test

var myList = [];

myList.push(['Chocolate Bar', 155]);
myList.push(['Chocolate Bar', 155]);
myList.push(['Chocolate Bar', 155]);
myList.push(['Chocolate Bar', 155]);
myList.push(['Chocolate Bar', 155]);

// 47 test

function reusableFunction() {
	console.log('Hi World');
}

reusableFunction();

// 48 test

function functionWithArgs(a, b) {
	console.log(a + b);
}

functionWithArgs(5, 7);

// 49 test

// Declare the myGlobal variable below this line

function fun1() {
	// Assign 5 to oopsGlobal Here
	var oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
	var output = '';
	if (typeof myGlobal != 'undefined') {
		output += 'myGlobal: ' + myGlobal;
	}
	if (typeof oopsGlobal != 'undefined') {
		output += ' oopsGlobal: ' + oopsGlobal;
	}
	console.log(output);
}

var myGlobal = 10;
var oopsGlobal = 5;

// 50 test

function myLocalScope() {
	// Only change code below this line
	var myVar = 'scope';
	console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

// 51 test

// Setup
var outerWear = 'T-Shirt';

function myOutfit() {
	// Only change code below this line

	var outerWear = 'sweater';

	// Only change code above this line
	return outerWear;
}

myOutfit();

// 52 test

function timesFive(num) {
	return num * 5;
}

// 53 test

// Setup
var sum = 0;

function addThree() {
	sum = sum + 3;
}

function addFive() {
	sum = sum + 5;
}
// Only change code below this line

// Only change code above this line

addThree();
addFive();

// 54 test

// Setup
var processed = 0;

function processArg(num) {
	return (num + 3) / 5;
}

processed = processArg(7);
// Only change code below this line

// 55 test

function nextInLine(arr, item) {
	// Only change code below this line
	arr.push(item);
	var shifted = arr.shift();

	return shifted;

	// Only change code above this line
}

// Setup
var testArr = [1, 2, 3, 4, 5];

// Display code
console.log('Before: ' + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log('After: ' + JSON.stringify(testArr));

// 56 test

function welcomeToBooleans() {
	// Only change code below this line

	return true; // Change this line

	// Only change code above this line
}

// 57 test

function trueOrFalse(wasThatTrue) {
	// Only change code below this line
	if (wasThatTrue) {
		return 'Yes, that was true';
	}
	return 'No, that was false';

	// Only change code above this line
}

// 58 test

// Setup
function testEqual(val) {
	if (val == 12) {
		// Change this line
		return 'Equal';
	}
	return 'Not Equal';
}

testEqual(10);

// 59 test

// Setup
function testStrict(val) {
	if (val === 7) {
		// Change this line
		return 'Equal';
	}
	return 'Not Equal';
}

testStrict(10);

// 60 test

// Setup
function compareEquality(a, b) {
	if (a === b) { // Change this line
		return "Equal";
	}
	return "Not Equal";
}

compareEquality(10, "10");

// 61 test

// Setup
function testNotEqual(val) {
	if (val != 99) { // Change this line
		return "Not Equal";
	}
	return "Equal";
}

testNotEqual(10);

// 62 test

// Setup
function testStrictNotEqual(val) {
	if (val !== 17) { // Change this line
		return "Not Equal";
	}
	return "Equal";
}

testStrictNotEqual(10);

// 63 test

function testGreaterThan(val) {
	if (val > 100) {  // Change this line
		return "Over 100";
	}

	if (val > 10) {  // Change this line
		return "Over 10";
	}

	return "10 or Under";
}

testGreaterThan(10);

// 64 test

function testGreaterOrEqual(val) {
	if (val >= 20) {  // Change this line
		return "20 or Over";
	}

	if (val >= 10) {  // Change this line
		return "10 or Over";
	}

	return "Less than 10";
}

testGreaterOrEqual(10);

// 65 test

function testLessThan(val) {
	if (val < 25) {  // Change this line
		return "Under 25";
	}

	if (val < 55) {  // Change this line
		return "Under 55";
	}

	return "55 or Over";
}

testLessThan(10);

// 66 test

function testLessOrEqual(val) {
	if (val <= 12) {  // Change this line
		return "Smaller Than or Equal to 12";
	}

	if (val <= 24) {  // Change this line
		return "Smaller Than or Equal to 24";
	}

	return "More Than 24";
}

testLessOrEqual(10);

// 67 test

function testLogicalAnd(val) {
	// Only change code below this line

	if (val <= 50 && val >= 25) {

		return "Yes";

	}

	// Only change code above this line
	return "No";
}

testLogicalAnd(10);

// 68 test

function testLogicalOr(val) {
	// Only change code below this line

	if (val < 10 || val > 20) {
		return "Outside";
	}



	// Only change code above this line
	return "Inside";
}

testLogicalOr(15);

// 69 test

function testElse(val) {
	var result = "";
	// Only change code below this line

	if (val > 5) {
		result = "Bigger than 5";
	}
	else {
		result = "5 or Smaller";
	}

	// Only change code above this line
	return result;
}

testElse(4);

// 70 test

// 71 test

// 72 test

// 73 test

// 74 test

// 75 test

// 76 test

// 77 test

// 78 test

// 79 test

// 80 test
