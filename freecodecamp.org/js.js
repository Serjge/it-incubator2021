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
	if (a === b) {
		// Change this line
		return 'Equal';
	}
	return 'Not Equal';
}

compareEquality(10, '10');

// 61 test

// Setup
function testNotEqual(val) {
	if (val != 99) {
		// Change this line
		return 'Not Equal';
	}
	return 'Equal';
}

testNotEqual(10);

// 62 test

// Setup
function testStrictNotEqual(val) {
	if (val !== 17) {
		// Change this line
		return 'Not Equal';
	}
	return 'Equal';
}

testStrictNotEqual(10);

// 63 test

function testGreaterThan(val) {
	if (val > 100) {
		// Change this line
		return 'Over 100';
	}

	if (val > 10) {
		// Change this line
		return 'Over 10';
	}

	return '10 or Under';
}

testGreaterThan(10);

// 64 test

function testGreaterOrEqual(val) {
	if (val >= 20) {
		// Change this line
		return '20 or Over';
	}

	if (val >= 10) {
		// Change this line
		return '10 or Over';
	}

	return 'Less than 10';
}

testGreaterOrEqual(10);

// 65 test

function testLessThan(val) {
	if (val < 25) {
		// Change this line
		return 'Under 25';
	}

	if (val < 55) {
		// Change this line
		return 'Under 55';
	}

	return '55 or Over';
}

testLessThan(10);

// 66 test

function testLessOrEqual(val) {
	if (val <= 12) {
		// Change this line
		return 'Smaller Than or Equal to 12';
	}

	if (val <= 24) {
		// Change this line
		return 'Smaller Than or Equal to 24';
	}

	return 'More Than 24';
}

testLessOrEqual(10);

// 67 test

function testLogicalAnd(val) {
	// Only change code below this line

	if (val <= 50 && val >= 25) {
		return 'Yes';
	}

	// Only change code above this line
	return 'No';
}

testLogicalAnd(10);

// 68 test

function testLogicalOr(val) {
	// Only change code below this line

	if (val < 10 || val > 20) {
		return 'Outside';
	}

	// Only change code above this line
	return 'Inside';
}

testLogicalOr(15);

// 69 test

function testElse(val) {
	var result = '';
	// Only change code below this line

	if (val > 5) {
		result = 'Bigger than 5';
	} else {
		result = '5 or Smaller';
	}

	// Only change code above this line
	return result;
}

testElse(4);

// 70 test

function testElseIf(val) {
	if (val > 10) {
		return 'Greater than 10';
	} else if (val < 5) {
		return 'Smaller than 5';
	} else {
		return 'Between 5 and 10';
	}
}

testElseIf(7);

// 71 test

function orderMyLogic(val) {
	if (val < 5) {
		return 'Less than 5';
	} else if (val < 10) {
		return 'Less than 10';
	} else {
		return 'Greater than or equal to 10';
	}
}

orderMyLogic(7);

// 72 test

function testSize(num) {
	// Only change code below this line
	if (num < 5) {
		return 'Tiny';
	} else if (num < 10) {
		return 'Small';
	} else if (num < 15) {
		return 'Medium';
	} else if (num < 20) {
		return 'Large';
	} else if (num >= 20) {
		return 'Huge';
	}

	return 'Change Me';
	// Only change code above this line
}

testSize(7);

// 73 test

var names = [
	'Hole-in-one!',
	'Eagle',
	'Birdie',
	'Par',
	'Bogey',
	'Double Bogey',
	'Go Home!',
];
function golfScore(par, strokes) {
	// Only change code below this line
	if (strokes == 1) {
		return names[0];
	} else if (strokes <= par - 2) {
		return names[1];
	} else if (strokes == par - 1) {
		return names[2];
	} else if (strokes == par) {
		return names[3];
	} else if (strokes == par + 1) {
		return names[4];
	} else if (strokes == par + 2) {
		return names[5];
	} else if (strokes >= par + 3) {
		return names[6];
	}

	return 'Change Me';
	// Only change code above this line
}

golfScore(5, 4);

// 74 test

function caseInSwitch(val) {
	var answer = '';
	// Only change code below this line
	switch (val) {
		case 1:
			return 'alpha';
			break;
		case 2:
			return 'beta';
			break;
		case 3:
			return 'gamma';
			break;
		case 4:
			return 'delta';
			break;
	}

	// Only change code above this line
	return answer;
}

caseInSwitch(1);

// 75 test

function switchOfStuff(val) {
	var answer = '';
	// Only change code below this line
	switch (val) {
		case 'a':
			return 'apple';
			break;
		case 'b':
			return 'bird';
			break;
		case 'c':
			return 'cat';
			break;
		default:
			return 'stuff';
			break;
	}

	// Only change code above this line
	return answer;
}

switchOfStuff(1);

// 76 test

function sequentialSizes(val) {
	var answer = '';
	// Only change code below this line
	switch (val) {
		case 1:
		case 2:
		case 3:
			answer = 'Low';
			break;
		case 4:
		case 5:
		case 6:
			answer = 'Mid';
			break;
		case 7:
		case 8:
		case 9:
			answer = 'High';
	}

	// Only change code above this line
	return answer;
}

sequentialSizes(1);

// 77 test

function chainToSwitch(val) {
	var answer = '';
	// Only change code below this line

	switch (val) {
		case 'bob':
			return 'Marley';
			break;
		case 42:
			return 'The Answer';
			break;
		case 1:
			return 'There is no #1';
			break;
		case 99:
			return 'Missed me by this much!';
			break;
		case 7:
			return 'Ate Nine';
			break;
	}
	/*
		if (val === "bob") {
			answer = "Marley";
		} else if (val === 42) {
			answer = "The Answer";
		} else if (val === 1) {
			answer = "There is no #1";
		} else if (val === 99) {
			answer = "Missed me by this much!";
		} else if (val === 7) {
			answer = "Ate Nine";
		}
	*/
	// Only change code above this line
	return answer;
}

chainToSwitch(7);

// 78 test

function isLess(a, b) {
	// Only change code below this line
	return a < b;

	/*
	if (a < b) {
		return true;
	} else {
		return false;
	}
	*/
	// Only change code above this line
}

isLess(10, 15);

// 79 test

// Setup
function abTest(a, b) {
	// Only change code below this line
	if (a < 0 || b < 0) {
		return undefined;
	}

	// Only change code above this line

	return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

// 80 test

var count = 0;

function cc(card) {
	// Only change code below this line
	switch (card) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			count++;
			break;
		case 10:
		case 'A':
		case 'J':
		case 'K':
		case 'Q':
			count--;
			break;
	}
	var holdBet = 'Hold';
	if (count > 0) {
		holdBet = 'Bet';
	}

	return count + ' ' + holdBet;
	// Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');

// 81 test

var myDog = {
	// Only change code below this line
	name: 'doges',
	legs: 4,
	tails: 10,
	friends: ['yes', 'dog'],

	// Only change code above this line
};

// 82 test

// Setup
var testObj = {
	hat: 'ballcap',
	shirt: 'jersey',
	shoes: 'cleats',
};

// Only change code below this line

var hatValue = testObj.hat; // Change this line
var shirtValue = testObj.shirt; // Change this line

// 83 test

// Setup
var testObj = {
	'an entree': 'hamburger',
	'my side': 'veggies',
	'the drink': 'water',
};

// Only change code below this line

var entreeValue = testObj['an entree']; // Change this line
var drinkValue = testObj['the drink']; // Change this line

// 84 test

// Setup
var testObj = {
	12: 'Namath',
	16: 'Montana',
	19: 'Unitas',
};

// Only change code below this line

var playerNumber = 16; // Change this line
var player = testObj[playerNumber]; // Change this line

// 85 test

// Setup
var myDog = {
	name: 'Coder',
	legs: 4,
	tails: 1,
	friends: ['freeCodeCamp Campers'],
};

// Only change code below this line

myDog.name = 'Happy Coder';

// 86 test

var myDog = {
	name: 'Happy Coder',
	legs: 4,
	tails: 1,
	friends: ['freeCodeCamp Campers'],
};

myDog.bark = 'woof';

// 87 test

// Setup
var myDog = {
	name: 'Happy Coder',
	legs: 4,
	tails: 1,
	friends: ['freeCodeCamp Campers'],
	bark: 'woof',
};

// Only change code below this line

delete myDog.tails;

// 88 test

// Setup
function phoneticLookup(val) {
	var result = '';

	// Only change code below this line
	var lookup = {
		alpha: 'Adams',
		bravo: 'Boston',
		charlie: 'Chicago',
		delta: 'Denver',
		echo: 'Easy',
		foxtrot: 'Frank',
	};
	result = lookup[val];

	// Only change code above this line
	return result;
}

phoneticLookup('charlie');

// 89 test

function checkObj(obj, checkProp) {
	// Only change code below this line
	if (obj.hasOwnProperty(checkProp)) {
		return obj[checkProp];
	}
	return 'Not Found';
	// Only change code above this line
}

// 90 test

var myMusic = [
	{
		artist: 'Billy Joel',
		title: 'Piano Man',
		release_year: 1973,
		formats: ['CD', '8T', 'LP'],
		gold: true,
	},
	{
		artist: 'Billy Joel',
		title: 'Piano Man',
		release_year: 1973,
		formats: ['CD', '8T', 'LP'],
		gold: true,
	},
];

// 91 test

var myStorage = {
	car: {
		inside: {
			'glove box': 'maps',
			'passenger seat': 'crumbs',
		},
		outside: {
			trunk: 'jack',
		},
	},
};

var gloveBoxContents = myStorage.car.inside['glove box'];

// 92 test

var myPlants = [
	{
		type: 'flowers',
		list: ['rose', 'tulip', 'dandelion'],
	},
	{
		type: 'trees',
		list: ['fir', 'pine', 'birch'],
	},
];

var secondTree = myPlants[1].list[1];

// 93 test

// Setup
var recordCollection = {
	2548: {
		albumTitle: 'Slippery When Wet',
		artist: 'Bon Jovi',
		tracks: ['Let It Rock', 'You Give Love a Bad Name'],
	},
	2468: {
		albumTitle: '1999',
		artist: 'Prince',
		tracks: ['1999', 'Little Red Corvette'],
	},
	1245: {
		artist: 'Robert Palmer',
		tracks: [],
	},
	5439: {
		albumTitle: 'ABBA Gold',
	},
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
	if (prop !== 'tracks' && value !== '') {
		records[id][prop] = value;
	} else if (
		prop === 'tracks' &&
		records[id].hasOwnProperty('tracks') === false
	) {
		records[id][prop] = [value];
	} else if (prop === 'tracks' && value !== '') {
		records[id][prop].push(value);
	} else if (value === '') {
		delete records[id][prop];
	}

	return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// 94 test

// Setup
var myArray = [];

// Only change code below this line

var i = 5;
while (i >= 0) {
	myArray.push(i);
	i--;
}

// 95 test

// Setup
var myArray = [];

// Only change code below this line

for (var i = 1; i < 6; i++) {
	myArray.push(i);
}

// 96 test

// Setup
var myArray = [];

// Only change code below this line
for (var i = 1; i < 10; i += 2) {
	myArray.push(i);
}

// 97 test

// Setup
var myArray = [];

// Only change code below this line
for (var i = 9; i > 0; i -= 2) {
	myArray.push(i);
}

// 98 test

// Setup
var myArr = [2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for (var i = 0; i < myArr.length; i++) {
	console.log((total += myArr[i]));
}

// 99 test

function multiplyAll(arr) {
	var product = 1;
	// Only change code below this line
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			product *= arr[i][j];
		}
	}

	// Only change code above this line
	return product;
}

multiplyAll([
	[1, 2],
	[3, 4],
	[5, 6, 7],
]);

// 100 test

// Setup
var myArray = [];
var i = 10;

// Only change code below this line
do {
	myArray.push(i);
	i++;
} while (i < 11);

// 101 test

// Setup
var myArray = [];
var i = 10;

// Only change code below this line
do {
	myArray.push(i);
	i++;
} while (i < 5)

// 102 test

// Setup
var contacts = [
	{
		"firstName": "Akira",
		"lastName": "Laine",
		"number": "0543236543",
		"likes": ["Pizza", "Coding", "Brownie Points"]
	},
	{
		"firstName": "Harry",
		"lastName": "Potter",
		"number": "0994372684",
		"likes": ["Hogwarts", "Magic", "Hagrid"]
	},
	{
		"firstName": "Sherlock",
		"lastName": "Holmes",
		"number": "0487345643",
		"likes": ["Intriguing Cases", "Violin"]
	},
	{
		"firstName": "Kristian",
		"lastName": "Vos",
		"number": "unknown",
		"likes": ["JavaScript", "Gaming", "Foxes"]
	}
];


function lookUpProfile(name, prop) {
	// Only change code below this line
	for (let i = 0; i < contacts.length; i++) {
		if (contacts[i].firstName === name) {
			return contacts[i][prop] || "No such property"
		}

	} return "No such contact"
	// Only change code above this line
}

lookUpProfile("Akira", "likes");

// 103 test

function randomFraction() {

	// Only change code below this line

	return Math.random();

	// Only change code above this line
}

// 104 test

function randomWholeNum() {

	// Only change code below this line

	return Math.floor(Math.random() * 10);
}

// 105 test

function randomRange(myMin, myMax) {
	// Only change code below this line

	return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
	// Only change code above this line
}

// 106 test

function convertToInteger(str) {
	return parseInt(str)
}

convertToInteger("56");

// 107 test

function convertToInteger(str) {
	return parseInt(str, 2)
}

convertToInteger("10011");

// 108 test

function checkEqual(a, b) {
	return a === b ? "Equal" : "Not Equal"
}

checkEqual(1, 2);

// 109 test

function checkSign(num) {
	return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative"
}

checkSign(10);

// 110 test

// Only change code below this line
function countdown(n) {
	if (n < 1) {
		return []
	} else {
		const tmpArr = countdown(n - 1)
		tmpArr.unshift(n)
		return tmpArr
	}
	return;
}
// Only change code above this line

// 111 test

function rangeOfNumbers(startNum, endNum) {
	if (startNum <= endNum) {
		const arr = rangeOfNumbers(startNum + 1, endNum)
		arr.unshift(startNum)
		return arr
	}
	return [];
};
